import React from "react";
import SideBar from "../SideBar";

const Board = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-40 py-8 container mx-auto">
    <div className="max-w-2xl  ml-70 px-4 py-8 text-right font-sans border-b border-gray-200 mt-8">
     <h2 className="text-4xl font-bold text-[#5a2f00] mb-12">مجلس الإدارة</h2>

      <ul className="list-disc  text-sm text-gray-800 space-y-1">
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة</li>
        <li className="mb-8">كمال ابو شاويش رئيس مجلس الادارة </li>
      </ul>

      </div>
      <SideBar/>
    
    </section>
  );
};

export default Board ;
