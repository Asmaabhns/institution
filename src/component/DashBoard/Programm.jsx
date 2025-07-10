import React, { useState, useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { NewsContext } from "./NewsContext";

function Programm() {
  const { newsList, deleteNews, editNews } = useContext(NewsContext);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    media: null,
    file: null,
    content: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

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
    if (editingIndex !== null) {
      editNews(editingIndex, formData);
      setEditingIndex(null);
    }
    setFormData({ title: "", category: "", media: null, file: null, content: "" });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    setConfirmDeleteIndex(index);
  };

  const confirmDelete = () => {
    if (confirmDeleteIndex !== null) {
      deleteNews(confirmDeleteIndex);
      setConfirmDeleteIndex(null);
    }
  };

  const handleEdit = (index) => {
    const item = newsList[index];
    setFormData({ ...item });
    setEditingIndex(index);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* نموذج التعديل */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl mx-auto">
          <h2 className="text-center text-xl font-semibold text-gray-800 mb-6">
            نموذج تعديل خبر
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">العنوان *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">التصنيف *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="" disabled>اختر تصنيفاً</option>
                <option>أخبار وبرامج الجمعية</option>
                <option>مدرسة بيسان الخاصة</option>
                <option>دراسات ومقالات</option>
                <option>شهادات</option>
                <option>البوم صور</option>
                <option>فيديو</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">صورة أو فيديو</label>
              <input
                type="file"
                name="media"
                accept="image/*,video/*"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">ملف</label>
              <input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">المحتوى *</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-[rgb(31,171,232)] text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                تحديث الخبر
              </button>
              <button
                type="button"
                onClick={() => { setFormData({ title: "", category: "", media: null, file: null, content: "" }); setShowForm(false); setEditingIndex(null); }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      )}

      {/* عرض الأخبار */}
      <div className="mt-10 space-y-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6 text-[rgb(31,171,232)]">برامج الجمعية</h2>
        {newsList.length === 0 && (
          <p className="text-center text-gray-600">لا توجد أخبار مضافة بعد.</p>
        )}
        {newsList.map((news, index) => (
          <div key={index} className="bg-white p-4 rounded flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-[rgb(31,171,232)] text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-blue-500"
              >
                <FaEdit /> تعديل
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-[rgb(31,171,232)] text-white px-4 py-2 rounded flex items-center gap-1 hover:bg-red-700"
              >
                <FaTrash /> حذف
              </button>
            </div>
            <div className="border-l border-gray-500 h-full mx-4"></div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{news.category}</span>
              </div>
              <p className="text-sm mt-2">
                <strong>{news.title}</strong> {news.content?.slice(0, 80)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* تأكيد الحذف */}
      {confirmDeleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4 font-semibold">هل أنت متأكد من حذف هذا الخبر؟</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                نعم
              </button>
              <button
                onClick={() => setConfirmDeleteIndex(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                لا
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Programm;
