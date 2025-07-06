import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";


const JobApplicationForm = () => {

   const [rows, setRows] = useState([{ id: Date.now(), degree: "", year: "", field: "", grade: "", institute: "" }]);
   const [rowsCourse, setRowsCourse] = useState([{ id: Date.now(), course: "", duration: "", location: "", gradeCourse: "" }]);
   const [exprence, setExprence] = useState([{ id: Date.now(), name: "", work: "", durationWork: "", salary: "",leaveWork:"" }]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
    setRowsCourse(updated)
    setExprence(updated)
  };

  const addRow = (index) => {
    const newRow = { id: Date.now(), degree: "", year: "", field: "", grade: "", institute: "" };
    const updated = [...rows];
    updated.splice(index + 1, 0, newRow);
    setRows(updated);

  };
   const addCourseRow = (index) => {
    const newRow = { id: Date.now(), course: "", duration: "", location: "", gradeCourse: "" };
    const updated = [...rowsCourse];
    updated.splice(index + 1, 0, newRow);
    setRowsCourse(updated);
  };

    const addExprenceRow = (index) => {
    const newWorkRow={ id: Date.now(), name: "", work: "", durationWork: "", salary: "",leaveWork:"" };
    const updatedWork=[...exprence];
    updatedWork.splice(index + 1, 0, newWorkRow);
    setExprence(updatedWork);
  };

  const removeCourseRow = (index) => {
    const updated = [...rowsCourse];
    if (updated.length > 1) {
      updated.splice(index, 1);
      setRowsCourse(updated);
    }
  }
  const removeExprenceRow = (index) => {
  const updatedWork=[...exprence];
  if (updatedWork.length > 1) {
      updatedWork.splice(index, 1);
      setExprence(updatedWork);
    }}
  const removeRow = (index) => {
    const updated = [...rows];
    if (updated.length > 1) {
      updated.splice(index, 1);
      setRows(updated);

    }}
  return (
    // <div className=" max-w-4xl mx-auto bg-white p-6 text-right font-sans">
    <div className="w-full sm:w-[95%] md:w-[90%] lg:max-w-4xl mx-auto bg-white p-4 sm:p-6 text-center font-sans">
      <h1 className="text-3xl font-bold text-[#6a3a1c] my-8 pr-2">استمارة طلب تطوع</h1>
      <p className="text-sm text-gray-700 mb-6">
        نشكركم لزيارتكم، يتم تعبئة الاستمارة في حالات عرض وظائف شاغرة. لأي تواصل
      </p>

      <form className="space-y-6  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="رقم البطاقة الشخصية *" className="border p-2 w-full" />
          <input type="text" placeholder="الوظيفة المطلوبة*" className="border p-2 w-full" />
          <input type="text" placeholder="الاسم رباعي*" className="border p-2 w-full" />
          <input type="text" placeholder="عدد افراد الاسرة*" className="border p-2 w-full" />
        </div>

        <div>
          
          <div className="flex gap-4">
            <label className="block ml-20">الحالة الاجتماعية</label>
            {['أعزب', 'متزوج', 'مطلق', 'أرمل'].map((s, i) => (
              <label key={i} className="flex items-center gap-1">
                <input type="radio" name="status" value={s} /> {s}
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" placeholder="تاريخ الميلاد" className="border p-2 w-full" />
          <input type="text" placeholder="مكان الميلاد" className="border p-2 w-full" />
        </div>

        <div className="mb-8">
          <label className="block mb-1">العنوان الكامل</label>
          <input type="text" placeholder="Street Address" className="border p-2 w-full mb-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="City" className="border p-2 w-full" />
            <input type="text" placeholder="State / Province / Region" className="border p-2 w-full" />
            <input type="text" placeholder="Zip / Postal Code" className="border p-2 w-full" />
          </div>
        </div>

        <div>
          <label className="block mb-1">البريد الإلكتروني</label>
          <input type="email" placeholder="البريد الإلكتروني" className="border p-2 w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="number" placeholder=" رقم الجوال" className="border p-2 w-full" />
          <input type="number" placeholder="رقم الهاتف" className="border p-2 w-full" />
        </div>

{/* <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <label className="block mb-1"> المؤهلات العلمية</label>
          <label className="block mb-1">لمؤهل الدراسي"</label> 
          <label className="block mb-1">سنة التخرج</label> 
          <label className="block mb-1"> التخصص</label> 
          <label className="block mb-1"> جهة الدراسة</label>
          <label className="block mb-1"> المعدل</label>
        </div> */}
      
      
      <div className="space-y-2">
         <div className="flex gap-15 align-middle">
        <label className="font-bold text-right block">المؤهلات العلمية</label>
      <div className="flex gap-4 text-gray-600">
        <label className="font-bold  block">جهة<br></br>الدراسة</label>
      <label className="font-bold  block">المعدل</label>
      <label className="font-bold  block">التخصص</label>
      <label className="font-bold  block">سنة<br></br>التخرج</label>
      <label className="font-bold  block">المؤهل<br></br>الدراسي</label>
      </div>
      </div>
        <div className="space-y-2 pr-40"> 
        {rows.map((row, idx) => (
          <div key={row.id} className="grid grid-cols-6 gap-2 items-center">
            <input type="text" value={row.institute} onChange={(e) => handleChange(idx, "institute", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.grade} onChange={(e) => handleChange(idx, "grade", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.field} onChange={(e) => handleChange(idx, "field", e.target.value)} className="border p-1 text-sm" />
            <input type="text" value={row.year} onChange={(e) => handleChange(idx, "year", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.degree} onChange={(e) => handleChange(idx, "degree", e.target.value)} className="border p-1 text-sm" />
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => addRow(idx)} className="bg-gray-200  p-1 rounded-full text-green-600"><Plus size={18} /></button>
              <button type="button" onClick={() => removeRow(idx)} className="text-red-600 bg-gray-200  p-1 rounded-full"><Minus size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>

 <div className="space-y-2">
      <label className="font-bold text-right block">الدورات التدريبية</label>
      <div className="space-y-2 mr-10">
        {rowsCourse.map((row, idx) => (
          <div key={row.id} className="grid grid-cols-6 gap-2 items-center">
            <input type="text" value={row.course} onChange={(e) => handleChange(idx, "course", e.target.value)} placeholder="اسم الدورة" className="border p-1 text-sm" />
            <input type="text" value={row.duration} onChange={(e) => handleChange(idx, "duration", e.target.value)} placeholder="مكان الدورة" className="border p-1 text-sm" />
            <input type="text" value={row.location} onChange={(e) => handleChange(idx, "location", e.target.value)} placeholder="مدة الدورة" className="border p-1 text-sm" />
            <input type="text" value={row.gradeCourse} onChange={(e) => handleChange(idx, "gradeCourse", e.target.value)} placeholder="نوع الشهادة " className="border p-1 text-sm" />
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => addCourseRow(idx)} className="text-green-600 bg-gray-200  p-1 rounded-full"><Plus size={18} /></button>
              <button type="button" onClick={() => removeCourseRow(idx)} className="text-red-600 bg-gray-200  p-1 rounded-full"><Minus size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>



        <div className="space-y-2 flex gap-4">
          <p>هل تقبل العمل في القطاع الخاص؟</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="worked" value="نعم" /> نعم
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="worked" value="لا" /> لا
          </label>
        </div>

        <div className="space-y-2 flex gap-4">
          <p>هل تعاني من مرض مزمن أو إعاقة؟</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="worked" value="نعم" /> نعم
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="worked" value="لا" /> لا
          </label>
        </div>


 <div className="space-y-2">
      <div className="flex gap-20 align-middle">
        <label className="font-bold text-right block">الخبرة العملية</label>
      <div className="flex gap-4 text-gray-600">
        <label className="font-bold  block">المسمى <br></br>الوظيفي</label>
      <label className="font-bold  block">جهة <br></br>العمل</label>
      <label className="font-bold  block">الفترة</label>
      <label className="font-bold  block">سبب<br></br> ترك<br></br> العمل</label>
      </div>
      </div>
      <div className="space-y-2 pr-40">
        {exprence.map((row, idx) => (
          <div key={row.id} className="grid grid-cols-6 gap-2 items-center">
            <input type="text" value={row.name} onChange={(e) => handleChange(idx, "name", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.work} onChange={(e) => handleChange(idx, "work", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.durationWork} onChange={(e) => handleChange(idx, "durationWork", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.salary} onChange={(e) => handleChange(idx, "salary", e.target.value)}  className="border p-1 text-sm" />
            <input type="text" value={row.leaveWork} onChange={(e) => handleChange(idx, "leaveWork", e.target.value)}  className="border p-1 text-sm" />
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => addExprenceRow(idx)} className="text-green-600 bg-gray-200  p-1 rounded-full"><Plus size={18} /></button>
              <button type="button" onClick={() => removeExprenceRow(idx)} className="text-red-600 bg-gray-200  p-1 rounded-full"><Minus size={18} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="الاسم" className="border p-2 w-full" />
          <input type="text" placeholder="العنوان" className="border p-2 w-full" />
          <input type="text" placeholder="رقم الهاتف" className="border p-2 w-full" />
        </div>

        <div className="space-y-2 flex gap-4">
          <label className="block">تحميل الصورة الشخصية</label>
          <input type="file" className="border p-2" accept="image/png, image/jpeg" />
        </div>
        
        <div className="space-y-2 flex gap-4">
            <label className="block">تحميل ملف السيرة الذاتية</label>
          <input type="file" className="border p-2" accept=".pdf" />
        </div>
        
        <div className="flex items-center gap-6">
          <label className="block">اقرار*</label>
          <input type="checkbox" />
          <label className="text-sm">
            أقر بأن جميع البيانات المذكورة صحيحة، وإذا تبين خلاف ذلك فسيتم إلغاء الطلب.
          </label>
        </div>

        <button type="submit" className="bg-[#4CAF50]  w-40 text-white px-8 py-2 rounded mx-[40%]">
          تقديم الطلب
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;

