import React from "react";
import SideBar from "../SideBar";

const Partners = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-40 py-8 container mx-auto">
    <div className="max-w-2xl  ml-70 px-4 py-8 text-right font-sans border-b border-gray-200 mt-8">
     <h2 className="text-4xl font-bold text-[#5a2f00] mb-4">الشركاء والمانحون</h2>

      <ul className="list-disc pr-6 text-sm text-gray-800 space-y-1">
        <li className="mb-8">الكفاءة</li>
        <li className="mb-8">المصداقية</li>
        <li className="mb-8">الجودة</li>
        <li className="mb-8">خصوصية الذات المستفيدة</li>
        <li className="mb-8">مراعاة السرية والعدالة في تقديم الخدمة</li>
        <li className="mb-8">تكافؤ الفرص</li>
        <li className="mb-8">المهنية</li>
        <li className="mb-8">الانضباط والالتزام</li>
      </ul>

      </div>
      <SideBar/>
    
    </section>
  );
};

export default Partners ;
