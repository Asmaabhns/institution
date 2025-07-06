import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

// دالة لتحويل العنوان إلى slug صالح للرابط
// const generateSlug = (title) =>
//   title.replace(/\s+/g, "-").replace(/[^\wء-ي-]/g, "").toLowerCase();

const certificates = [
  {
    title: "نعم للتعلم",
    description:
      "مشروع تحسين الممارسات الصحية والبيئية وحالة الصرف الصحي لأسر ذوي الإعاقة في المحافظة الوسطى يعلن عن مجموعة من الدورات التدريبية لمواطنين مستفيدين مشروع المال مقابل العمل من باب بناء القدرات والمهارات الذاتية وتنمية المعارف، والاستغلال الأمثل لأوقات الفراغ ...",
    image: "learn"
  },
  {
    title: "شهادة شكر وتقدير مقدمة من الهيئة الشعبية العالمية لدعم غزة",
    image: "thanks"
  },
  {
    title: "تسجيل منتدى التواصل عضو في الشبكة العربية للمنظمات الأهلية",
    image: "membership"
  }
];

const CertificatesSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl mx-auto my-12  px-8 py-8 text-right">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">شهادات</h2>
      {certificates.map((item, index) => {
        const slug = item.image; // استخدام اسم الصورة كـ slug لتطابق البيانات
        return (
          <div key={index} className="border-b my-12 border-gray-200 py-4">
            <Link
              to={`/certificate/${slug}`}
              className="text-2xl font-bold text-[#6a3a1c] hover:text-blue-600"
            >
              {item.title}
            </Link>
            {item.description && (
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {item.description}{" "}
                <Link
                  to={`/certificate/${slug}`}
                  className="text-blue-600 hover:underline"
                >
                  أكمل القراءة »
                </Link>
              </p>
            )}
          </div>
        );
      })}
    </div>
    <SideBar/>
    </section>
  );
};

export default CertificatesSection;
