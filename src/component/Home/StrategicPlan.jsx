import React from "react";
import SideBar from "../SideBar";

const StrategicPlan = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl  mx-auto px-4 py-8 text-right font-sans border-b border-gray-200 mt-8">
      <h2 className="text-4xl text-right font-bold mb-2">الخطة الاستراتجية المحدثة</h2>
      <a
        href="/files/Mokeup.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-2xl hover:underline"
      >
        اضغط هنا لفتح الملف
      </a>

      </div>
      <SideBar/>
    
    </section>
  );
};

export default StrategicPlan;
