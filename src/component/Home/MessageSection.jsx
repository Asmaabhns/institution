import React from "react";
import SideBar from "../SideBar";

const MessageSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl  mx-auto px-4 py-8 text-right font-sans border-b border-gray-200 mt-8">
      <h2 className="text-2xl font-bold text-[#6a3a1c] mb-8">رسالتنا</h2>
      <p className="text-2xl font-semibold text-[rgb(31,171,232)] mb-2">جمعية التأهيل والتدريب الاجتماعي:</p>
      <p className="text-gray-700 leading-loose text-lg">
        جمعية التأهيل والتدريب الاجتماعي: جمعية أهلية غير حكومية تأسست عام 1991 في فلسطين  بمبادرة من مجموعة من الحريصين على أبناء هذا الشعب في مخيم النصيرات لتأهيل الأشخاص ذوي الإعاقة وتعزيز قدراتهم لدمجهم في المجتمع.

حصلت الجمعية على ترخيص من وزارة الداخلية كجمعية خيرية عثمانية تحت رقم (7317) في عام 2003 م، لتتمكن بعد ذلك  من تقديم خدماتها لأهل المخيم والمناطق المهمشة القريبة منه. 

تهدف الجمعية الى المساهمة في تقديم خدمات التعليم والعلاج والتأهيل المهني للأشخاص ذوي الاعاقة بمختلف أنواعها من أجل تمكينهم في المجتمع والنهضة بواقعهم نحو الأفضل
      </p>
      </div>
      <SideBar/>
    
    </section>
  );
};

export default MessageSection;
