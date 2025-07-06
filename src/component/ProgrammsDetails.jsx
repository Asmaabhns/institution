import React from "react";
import { useParams } from "react-router-dom";
import photo from './Images/photo1.jpg';
import SideBar from "./SideBar";

const cardsData = [
  {
    slug: "civil-engineer",
    title: "إطلاق جلسات توعية بمركز الحماية",
    content: `تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة`,
    
    images: [photo, photo, photo,photo, photo, photo,photo, photo, photo]
  },
  {
    slug: "another-post",
    title: "مشروع تنموي جديد",
    content: `تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة`,
    images: []
  },
  {
    slug: "training-project",
    title: "برنامج تدريبي للمؤسسات",
    content: `أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...`,
    images: [photo]
  }
];

const ProgrammsInfo = ({ title, content, images = [] }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans text-right">
      <h1 className="text-2xl md:text-3xl font-bold text-[#1e2b4c] mb-6 leading-relaxed">
        {title}
      </h1>
      <div className="text-gray-800 leading-loose text-sm md:text-base whitespace-pre-line">
        {content}
      </div>

      {images.length > 0 && (
        <div>
          <h2 className="text-lg font-bold bg-[#5a2f00] text-white mt-8 mb-4 p-4">صور متنوعة من التدريب</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((imgSrc, index) => (
              <div key={index} className="overflow-hidden rounded shadow">
                <img
                  src={imgSrc}
                  alt={`training-${index}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProgrammsDetails = () => {
  const { slug } = useParams();
  const program = cardsData.find((item) => item.slug === slug);

  if (!program) {
    return <div className="text-center text-red-600 py-8">لم يتم العثور على البرنامج المطلوب.</div>;
  }

  return (
  <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="w-2xl"><ProgrammsInfo  {...program} /></div>
    <SideBar/>
    
    
    </section>);
};

export default ProgrammsDetails;
