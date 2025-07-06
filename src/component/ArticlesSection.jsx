import React from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";


const articles = [
  {
    title: "بالأرقام… مركز بديل يصدر ورقة حقائق بعنوان: “إفشــال الأونــروا: تقليص الخدمات والطاقم والقدرات”",
    description:"الغاية‭ ‬من‭ ‬هذه‭ ‬المطوية‭ ‬هو‭ ‬تسليط‭ ‬الضوء‭ ‬على‭ ‬آثار‭ ‬انعدام‭ ‬الدعم‭ ‬المالي‭ ‬والسياسي‭ ‬للأونروا‭ ‬من‭ ‬قبل‭ ‬المجتمع‭ ‬الدولي،‭ ‬الأمر‭ ‬الذي‭ ‬ما‭ ‬زال‭ ‬يؤدي‭ ‬إلى‭ ‬تقليص‭ ‬خدمات‭ ‬الاونروا‭ ‬وتراجع‭ ‬قدرتها‭ ‬على‭ ‬تقديم‭ ‬الإغاثة‭ ‬والدعم‭ ‬لعدد‭ ‬متزايد‭ ‬من‭ ‬اللّاجئين‭.‬ ‭ ‬تأسست‭ ‬الاونروا",
    image: "",
    date: "12/04" ,
    id:"1" 
       
  },
  {
    title: " مقال “دلالات طلب “فتوى قانونية” من محكمة العدل الدولية”",
    description:"دلالات طلب “فتوى قانونية” من محكمة العدل الدولية حول الآثار القانونية الناشئة عن الانتهاك المستمر لحق الشعب الفلسطيني في تقرير المصير في الثلاثين من ديسمبر الماضي تبنت الجمعية العامة للأمم المتحدة القرار ٧٧/٢٤٧، والذي يطلب من محكمة العدل الدولية فتوى",
    image: "",
     date: "12/04" ,
    id:"2"
  },
  {
    title: "شبكة المنظمات الأهلية تصدر دراسة بحثية الأولى من نوعها حول “ربط مفاهيم الصمود بمتطلبات العمل الإنساني والتنموي”  ",
    description:"12 فبراير 2023 أصدرت شبكة المنظمات الأهلية الفلسطينية دراسة بحثية الأولى من نوعها حول “ربط مفاهيم الصمود بمتطلبات العمل الإنساني والتنموي في مناطق قطاع غزة والضفة الغربية ومناطق ج وشرق القدس، مع التركيز على فئتي النساء والشباب”. وتهدف الدراسة إلى معالجة …",
    image: "",
    date: "12/04" ,
    id:"3"
  }
];

const ArticlesSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl mx-auto my-12  px-8 py-8 text-right">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">دراسات ومقالات</h2>
      {articles.map((item, index) => {
        const id = item.id; //  كـ slug لتطابق البيانات
        return (
          <div key={index} className="border-b my-12 border-gray-200 py-4">
            <Link
              to={`/articles/${id}`}
              className="text-2xl font-bold text-[#6a3a1c] hover:text-blue-600"
            >
              {item.title}
            </Link>
            {item.description && (
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {item.description}{" "}
                <Link
                  to={`/articles/${id}`}
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

export default ArticlesSection;
