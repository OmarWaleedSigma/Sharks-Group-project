// اللينك الأساسي الذي سنرسل إليه جميع طلبات الـ API
const API_URL = "http://localhost:3000";

// دالة عامة لجلب أي بيانات من الـ API
export async function getJson(endpoint) {
  // fetch() ترسل طلب إلى الـ API
  const response = await fetch(`${API_URL}${endpoint}`);

  // إذا فشل الطلب نعرض رسالة خطأ
  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  // نحول البيانات إلى JSON حتى نستطيع استخدامها في JavaScript
  const data = await response.json();

  // نرجع البيانات للدالة التي استدعت getJson()
  return data;
}