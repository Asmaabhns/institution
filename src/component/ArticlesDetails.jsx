import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "./SideBar";
const articlesData = {
  1: {
    title: "بالأرقام… مركز بديل يصدر ورقة حقائق بعنوان: “إفشــال الأونــروا: تقليص الخدمات والطاقم والقدرات”",
    description:"الغاية‭ ‬من‭ ‬هذه‭ ‬المطوية‭ ‬هو‭ ‬تسليط‭ ‬الضوء‭ ‬على‭ ‬آثار‭ ‬انعدام‭ ‬الدعم‭ ‬المالي‭ ‬والسياسي‭ ‬للأونروا‭ ‬من‭ ‬قبل‭ ‬المجتمع‭ ‬الدولي،‭ ‬الأمر‭ ‬الذي‭ ‬ما‭ ‬زال‭ ‬يؤدي‭ ‬إلى‭ ‬تقليص‭ ‬خدمات‭ ‬الاونروا‭ ‬وتراجع‭ ‬قدرتها‭ ‬على‭ ‬تقديم‭ ‬الإغاثة‭ ‬والدعم‭ ‬لعدد‭ ‬متزايد‭ ‬من‭ ‬اللّاجئين‭.‬",
    image: "",
    date: "12/04" ,
  },
  2: {
    title: " مقال “دلالات طلب “فتوى قانونية” من محكمة العدل الدولية”",
    description:"دلالات طلب “فتوى قانونية” من محكمة العدل الدولية حول الآثار القانونية الناشئة عن الانتهاك المستمر لحق الشعب الفلسطيني في تقرير المصير في الثلاثين من ديسمبر الماضي تبنت الجمعية العامة للأمم المتحدة القرار ٧٧/٢٤٧، والذي يطلب من محكمة العدل الدولية فتوى",
    image: "",
     date: "12/04" ,
  },
  3: {
    title: "شبكة المنظمات الأهلية تصدر دراسة بحثية الأولى من نوعها حول “ربط مفاهيم الصمود بمتطلبات العمل الإنساني والتنموي”  ",
    description:"12 فبراير 2023 أصدرت شبكة المنظمات الأهلية الفلسطينية دراسة بحثية الأولى من نوعها حول “ربط مفاهيم الصمود بمتطلبات العمل الإنساني والتنموي في مناطق قطاع غزة والضفة الغربية ومناطق ج وشرق القدس، مع التركيز على فئتي النساء والشباب”. وتهدف الدراسة إلى معالجة …",
    image: "",
    date: "12/04" ,
  }
};

const ArticlesDetails = () => {
  const { id } = useParams();
  const data = articlesData[id];

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto border p-4 text-right">
        <h2 className="text-2xl font-bold text-red-600 m-8">
          لم يتم العثور على بيانات 
        </h2>
      </div>
    );
  }

  return (
     <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-4xl mx-auto p-4 text-right">
      <h2 className="text-lg font-bold text-[#4CAF50] mb-4">
        {data.title}
      </h2>
      <div className=" p-4 w-lg">
        <p className="text-sm font-bold text-[#6a3a1c] mb-4">
            {data.description}
        </p>
        <img
        //   src={data.image}
        //   alt={data.image}
          className="w-full h-auto"
        />
      </div>
    </div>
    <SideBar/>
    </section>
  );
};


export default ArticlesDetails;
