import React from "react";
import SideBar from "../SideBar";



const annualReports = [
  {
    title: "التقرير الإداري السنوي 2022",
    description:
      "تم العمل على تنفيذ التقرير الإداري للجمعية ونقدمه بين أيديكم",
    link:
      "https://drive.google.com/file/d/1j5o99mB66MQD5wHxpX96LB8qJ7qzxvTk/view?usp=share_link",
  },
  {
    title: "التقرير المالي للجمعية",
    description:
      "البيانات المالية وملف التدقيق المالي للسنة المالية المنتهية بديسمبر / 2022",
    link:
      "https://drive.google.com/file/d/1j5o99mB66MQD5wHxpX96LB8qJ7qzxvTk/view?usp=share_link",
  },
  ,
  {
    title: "التقرير المالي للجمعية",
    description:
      "البيانات المالية وملف التدقيق المالي للسنة المالية المنتهية بديسمبر / 2022",
    link:
      "https://drive.google.com/file/d/1j5o99mB66MQD5wHxpX96LB8qJ7qzxvTk/view?usp=share_link",
  },
  ,
  {
    title: "التقرير المالي للجمعية",
    description:
      "البيانات المالية وملف التدقيق المالي للسنة المالية المنتهية بديسمبر / 2022",
    link:
      "https://drive.google.com/file/d/1j5o99mB66MQD5wHxpX96LB8qJ7qzxvTk/view?usp=share_link",
  },
];


const AnnualReports = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl  mx-auto px-4 py-8 text-right font-sans  mt-8">
    <h2 className="text-gray-700 text-4xl mb-8">التقارير السنوية</h2>

      {annualReports.map((report, index) => (
        <div key={index} className="mb-14 border-b border-gray-200 pb-6">
          <h3 className="text-[#5a2f00] text-xl font-bold mb-2">{report.title}</h3>
          <p className="text-sm text-gray-700 mb-2">{report.description}</p>
          <a
            href={report.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm hover:text-blue-800"
          >
            {report.link}
          </a>
        </div>
      ))}
      </div>
      <SideBar/>
    
    </section>
  );
};

export default AnnualReports;
