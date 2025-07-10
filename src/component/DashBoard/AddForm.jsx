import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "./NewsContext";

function AddForm() {
  const { addNews } = useContext(NewsContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    media: null,
    file: null,
    content: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNews(formData); // ✅ أضف الخبر
    // navigate("/admin/news"); // ✅ انقل المستخدم
    navigate("/admin", { state: { page: { name: "news", category: "الكل" } } });

  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl border-4 border-[rgb(31,171,232)]">
        <h2 className="text-center text-2xl font-semibold text-[rgb(31,171,232)] mb-6">
          نموذج إضافة خبر
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium ">العنوان  *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border  rounded px-3 py-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-[rgb(31,171,232)]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">التصنيف *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2  focus:border-0 focus:ring-[rgb(31,171,232)]"
            >
              <option disabled value="">اختر تصنيفاً</option>
              <option>أخبار وبرامج الجمعية</option>
              <option>مدرسة بيسان الخاصة</option>
              <option>دراسات ومقالات</option>
              <option>شهادات</option>
              <option>البوم صور</option>
              <option>فيديو</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">صورة أو فيديو</label>
            <input
              type="file"
              name="media"
              accept="image/*,video/*"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">ملف</label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">المحتوى *</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full border rounded px-3 focus:border-0 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-[rgb(31,171,232)] text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              نشر الخبر
            </button>
            <button
              type="button"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddForm;
