# SHARKS School JSON Server API

This API is a local teaching backend built with JSON Server. It contains the
data currently displayed by the SHARKS School SPA while leaving the frontend
code unchanged.

## Start the API

From the project root:

```powershell
npm install
npm run api
```

The API runs at:

```text
http://localhost:3000
```

Keep this terminal open while using the API. Run the SPA with Live Server or a
separate static server in another terminal.

## Available resources

| Resource | Endpoint | Purpose |
| --- | --- | --- |
| Home features | `/homeFeatures` | Cards immediately after the Home hero |
| Popular courses | `/popularCourses` | Home popular-course cards and image paths |
| Success stories | `/successStories` | Home student testimonials |
| Categories | `/categories` | Course filter controls |
| Courses | `/courses` | Full course catalog, images, filtering, and pagination |
| Crew | `/crew` | About-page instructors and portraits |
| Pricing plans | `/pricingPlans` | Ordered Basic, Elite, and Pro plans |
| Contact information | `/contactInfo/1` | School contact details |
| Contact messages | `/contactMessages` | Stores submitted Contact form messages |
| Newsletter subscriptions | `/newsletterSubscriptions` | Stores submitted newsletter emails |

## Home endpoints

### Features after the hero

```http
GET /homeFeatures?_sort=order
```

Example item:

```json
{
  "id": "1",
  "order": 1,
  "icon": "◎",
  "title": "Focused Learning",
  "description": "Our bite-sized lessons keep kids engaged..."
}
```

### Popular courses

```http
GET /popularCourses?_sort=order
```

Each item includes `title`, `description`, `price`, `currency`, and an `image`
path such as `/assets/Background.png`.

### Student success stories

```http
GET /successStories?_sort=order
```

Each story includes the student's name, age, avatar letter, quotation, and
display order.

## Courses endpoints

### All categories

```http
GET /categories?_sort=order
```

### All courses

```http
GET /courses?_sort=order
```

### Filter by category

```http
GET /courses?category=coding&_sort=order
GET /courses?category=art&_sort=order
GET /courses?category=language&_sort=order
GET /courses?category=science&_sort=order
```

### Search by title

JSON Server v1 supports comparison operators in query keys:

```http
GET /courses?title:contains=Python&_sort=order
```

### Filter and search together

```http
GET /courses?category=coding&title:contains=Python&_sort=order
```

### Pagination

```http
GET /courses?_page=1&_per_page=3&_sort=order
```

JSON Server v1 returns pagination metadata with the records:

```json
{
  "first": 1,
  "prev": null,
  "next": 2,
  "last": 2,
  "pages": 2,
  "items": 6,
  "data": []
}
```

Use `data` to render the cards and `pages`, `prev`, and `next` to render the
pagination controls.

### One course

```http
GET /courses/1
```

## About endpoint

```http
GET /crew?_sort=order
```

Each crew member contains:

- `id`
- `order`
- `name`
- `role`
- `bio`
- `image`

## Pricing endpoint

```http
GET /pricingPlans?_sort=order
```

Important plan fields:

- `identifier`: stable UI identifier (`basic`, `elite`, or `pro`)
- `order`: keeps the plans in the existing visual order
- `featured`: identifies the highlighted Elite plan
- `features`: nested included/not-included feature records

Always request `_sort=order` instead of depending on the physical order inside
`db.json`.

## Contact endpoints

### Read school contact information

```http
GET /contactInfo/1
```

### Save a contact message

```http
POST /contactMessages
Content-Type: application/json
```

Request body:

```json
{
  "name": "Finley Sharkington",
  "email": "finley@ocean.com",
  "message": "I would like to know more about coding courses.",
  "createdAt": "2026-08-03T10:00:00.000Z",
  "status": "new"
}
```

JSON Server creates an `id` and saves the record to `db.json`.

### Save a newsletter email

```http
POST /newsletterSubscriptions
Content-Type: application/json
```

```json
{
  "email": "student@example.com",
  "createdAt": "2026-08-03T10:00:00.000Z"
}
```

## Other JSON Server operations

These are useful for teaching CRUD without building a custom backend:

```http
POST   /courses
PUT    /courses/1
PATCH  /courses/1
DELETE /courses/1
```

Be careful: POST, PUT, PATCH, and DELETE modify `db.json`.

## Asset paths

The API does not serve the image files. It returns paths such as:

```text
/assets/course1-img(courses-page).png
```

Those files are served by the SPA/static server. When the SPA runs from
`http://localhost:8000`, the complete image URL is:

```text
http://localhost:8000/assets/course1-img(courses-page).png
```

Because the stored paths begin with `/assets`, they work naturally when the SPA
is served from the project root.

## Resetting the data

JSON Server writes new contact messages and newsletter subscriptions directly
into `db.json`. To reset them, stop the server and empty these two arrays:

```json
"contactMessages": [],
"newsletterSubscriptions": []
```

Do not run destructive Git commands to reset the database if other project
changes have not been committed.
