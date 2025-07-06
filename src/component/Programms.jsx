import React from "react";
import logo from './Images/logo.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// 🟩 البطاقة الواحدة
const InfoCard = ({ title, description, slug }) => {
   const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-t from-[rgb(31,171,232)] to-white  rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 max-w-sm mx-auto"
    >
    {/* <div className="bg-gradient-to-t from-[rgb(31,171,232)] to-white  rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 max-w-sm mx-auto"> */}
      {/* الشعار */}
      <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center">
        <img src={logo} alt="logo" className="w-full h-full object-contain rounded-full" />
      </div>

      {/* النص */}
      <div className="mt-6 text-center">
        <Link to={`/programs/${slug}`} className="text-[#1e2b4c] text-lg font-semibold hover:text-[#4CAF50]">
          {title}
        </Link>
        <p className="text-gray-600 text-sm mt-2">
          {description}{" "}
          <Link to={`/programs/${slug}`} className="text-gray-800 font-bold hover:text-[#5a2f00]">
            أكمل القراءة...
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

// 🟨 بيانات البطاقات
const cardsData = [
  {
    slug: "civil-engineer",
    title: "إطلاق جلسات توعية بمركز الحماية",
    description: "تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة",
  },
    {
    slug: "training-project",
    title: "إطلاق جلسات توعية بمركز الحماية",
    description: "تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة",
  },
    {
    slug: "another-post",
    title: "إطلاق جلسات توعية بمركز الحماية",
    description: "تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة",
  },
    {
    slug: "civil-engineer",
    title: "إطلاق جلسات توعية بمركز الحماية",
    description: "تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة",
  },
    {
    slug: "civil-engineer",
    title: "إطلاق جلسات توعية بمركز الحماية",
    description: "تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة، جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة",
  },
    {
    slug: "civil-engineer",
    title: "جمعية منتدى التواصل مهندس/ة مدني",
    description: "أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...جمعية منتدى التواصل هي مؤسسة أهلية غير ربحية مسجلة لدى وزارة الداخلية الفلسطينية وتحمل شهادة تسجيل رقم 7536...",
  },  {
    slug: "civil-engineer",
    title: "جمعية منتدى التواصل مهندس/ة مدني",
    description: "أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...جمعية منتدى التواصل هي مؤسسة أهلية غير ربحية مسجلة لدى وزارة الداخلية الفلسطينية وتحمل شهادة تسجيل رقم 7536...",
  },
  {
    slug: "training-project",
    title: "برنامج تدريبي للمؤسسات",
    description: "أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...",
  },
  {
    slug: "another-post",
    title: "مشروع تنموي جديد",
    description: "أُقيم البرنامج بالتعاون مع عدة شركاء دوليين ومحليين واستهدف بناء القدرات المؤسسية...المشروع يستهدف فئة الشباب في المناطق المهمشة ويعزز فرص العمل والتعليم...",
  },
  // يمكنك إضافة المزيد
];

// 🟦 القسم الكامل
const Programms = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cardsData.map((card, index) => (
        <InfoCard key={index} {...card} />
      ))}
    </div>
  );
};

export default Programms;



