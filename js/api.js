// اللينك الأساسي الذي سنرسل إليه جميع طلبات الـ API
const API_URL = ["localhost", "127.0.0.1"].includes(window.location.hostname)
  ? "http://localhost:3000"
  : "/api";

// دالة عامة لجلب أي بيانات من الـ API
export async function getJson(endpoint,options={}) {
  try {
    // fetch() ترسل طلب إلى الـ API
    const response = await fetch(`${API_URL}${endpoint}`,{
      headers:{
        'content-type':'application/json',
        ...options.headers
      },
      ...options
    });

    // إذا فشل الطلب نعرض رسالة خطأ
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}.`);
    }

    // نحول البيانات إلى JSON حتى نستطيع استخدامها في JavaScript
    const data = await response.json();

    // نرجع البيانات للدالة التي استدعت getJson()
    return data;
  } catch (error) {
    console.warn(`Unable to load ${endpoint}.`, error);
    throw error;
  }
}
