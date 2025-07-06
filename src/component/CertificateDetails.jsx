import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
import thanks from './Images/thanks.jpeg'

const certificateData = {
  learn: {
    title: "نعم للتعلم",
    image: "/certificates/learn.png"
  },
  thanks: {
    title: "شهادة شكر وتقدير مقدمة من الهيئة الشعبية العالمية لدعم غزة",
    image: "/certificates/thanks.png"
  },
  membership: {
    title: "تسجيل منتدى التواصل عضو في الشبكة العربية للمنظمات الأهلية",
    image: "/certificates/membership.png"
  }
};

const CertificateDetails = () => {
  const { slug } = useParams();
  const data = certificateData[slug];

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto border p-4 text-right">
        <h2 className="text-2xl font-bold text-red-600 m-8">
          لم يتم العثور على بيانات الشهادة
        </h2>
      </div>
    );
  }

  return (
     <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-4xl mx-auto p-4 text-right">
      <h2 className="text-2xl font-bold text-[#6a3a1c] mb-4">
        {data.title}
      </h2>
      <div className="border p-4 w-lg">
        <img
          // src={data.image}
          src={thanks}
          alt={data.title}
          className="w-full h-auto"
        />
      </div>
    </div>
    <SideBar/>
    </section>
  );
};


export default CertificateDetails;



