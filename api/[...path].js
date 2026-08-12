const database = require("../db.json");

function normalizeQueryValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function sortItems(items, field) {
  if (!field) return items;

  return [...items].sort((left, right) => {
    const a = left[field];
    const b = right[field];

    if (typeof a === "number" && typeof b === "number") return a - b;
    return String(a ?? "").localeCompare(String(b ?? ""));
  });
}

module.exports = function handler(request, response) {
  const path = normalizeQueryValue(request.query.path) || "";
  const [collectionName, itemId] = path.split("/").filter(Boolean);
  const collection = database[collectionName];

  response.setHeader("Cache-Control", "no-store");

  if (!Array.isArray(collection)) {
    return response.status(404).json({ error: "Resource not found." });
  }

  if (request.method === "POST" && collectionName === "contactMessages") {
    return response.status(201).json({
      id: `submission-${Date.now()}`,
      ...request.body,
    });
  }

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  if (itemId) {
    const item = collection.find(({ id }) => String(id) === itemId);
    return item
      ? response.status(200).json(item)
      : response.status(404).json({ error: "Item not found." });
  }

  let items = [...collection];

  for (const [key, rawValue] of Object.entries(request.query)) {
    if (["path", "_page", "_per_page", "_sort"].includes(key)) continue;

    const value = normalizeQueryValue(rawValue);

    if (key.endsWith(":contains")) {
      const field = key.slice(0, -":contains".length);
      const needle = String(value).toLocaleLowerCase();
      items = items.filter((item) =>
        String(item[field] ?? "").toLocaleLowerCase().includes(needle),
      );
    } else {
      items = items.filter((item) => String(item[key]) === String(value));
    }
  }

  items = sortItems(items, normalizeQueryValue(request.query._sort));

  const requestedPage = Number(normalizeQueryValue(request.query._page));
  if (!Number.isFinite(requestedPage) || requestedPage < 1) {
    return response.status(200).json(items);
  }

  const perPage = Math.max(
    1,
    Number(normalizeQueryValue(request.query._per_page)) || 10,
  );
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  const page = Math.min(Math.floor(requestedPage), pages);
  const first = 1;
  const last = pages;
  const prev = page > first ? page - 1 : null;
  const next = page < last ? page + 1 : null;
  const start = (page - 1) * perPage;

  return response.status(200).json({
    first,
    prev,
    next,
    last,
    pages,
    items: items.length,
    data: items.slice(start, start + perPage),
  });
};
