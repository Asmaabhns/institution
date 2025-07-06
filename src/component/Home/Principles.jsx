import React from "react";
import SideBar from "../SideBar";

const Principles = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl  mx-auto px-4 py-8 text-right font-sans border-b border-gray-200 mt-8">
     <h2 className="text-4xl font-bold text-[#5a2f00] mb-4">مبادئ وسياسات</h2>

      <p className="mb-6">
        فلسفة المؤسسة تتركز حول الكيفية التي من خلالها يمكن تنمية المجتمع من خلال الالتزام بالقيم
        الإستراتيجية المُحافظة، والمتمثلة بالمجموعتين التاليتين:
      </p>

      <h3 className="text-2xl font-semibold text-[#5a2f00] mt-10  mb-2">أولاً: القيم المهنية وتشمل</h3>
      <ul className="list-disc pr-6 text-sm text-gray-800 space-y-1">
        <li>الكفاءة</li>
        <li>المصداقية</li>
        <li>الجودة</li>
        <li>خصوصية الذات المستفيدة</li>
        <li>مراعاة السرية والعدالة في تقديم الخدمة</li>
        <li>تكافؤ الفرص</li>
        <li>المهنية</li>
        <li>الانضباط والالتزام</li>
      </ul>

      <h3 className="text-2xl font-semibold text-[#5a2f00] mt-10 mb-2">ثانيًا: القيم الأخلاقية وتشمل</h3>
      <ul className="list-disc pr-6 text-sm text-gray-800 space-y-1">
        <li>عدم التحيز والفرقة</li>
        <li>مراعاة كرامة الإنسان وعدالته</li>
        <li>المسؤولية الاجتماعية والمهنية</li>
        <li>الشفافية والمساءلة</li>
      </ul>
      </div>
      <SideBar/>
    
    </section>
  );
};

export default Principles ;
