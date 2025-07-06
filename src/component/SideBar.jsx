import React, {  useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

import ContactInfo from './Images/contactInfo.png'
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

const SideBar = () => {
  const newsItems = [
    { text: "شراكة مع شركة PALPAY", date: "04/10",slug: "civil-engineer" },
    { text: "إطلاق جلسات توعية بمركز الحماية", date: "03/10",slug: "civil-engineer" },
    { text: "إطلاق جلسات توعية بمركز الحماية", date: "01/10" ,slug: "training-project"},
    { text: "جمعية التاهيل والتدريب الاجتماعي/اعلان توظيف", date: "28/09" },
    { text: "شراكة مع شركة PALPAY" ,date: "22/09" }
  ];

  // const articles2 = [
  //   { text: "بالأرقام... تشكيل الأولوية: تكامل الخدمات والدفع النقدي", date: "13/06" },
  //   { text: "طلب تمويل قانونية من منصة العمل الوطنية", date: "12/04" },
  //   { text: "مفاهيم الحماية واحتياجات العمل الإنساني", date: "13/02" }
  // ];


  const tickerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, []);

  const startScrolling = () => {
    let scrollAmount = tickerRef.current?.scrollTop || 0;
    intervalRef.current = setInterval(() => {
      if (tickerRef.current) {
        scrollAmount += 1;
        tickerRef.current.scrollTop = scrollAmount;
        if (scrollAmount >= tickerRef.current.scrollHeight - tickerRef.current.clientHeight) {
          scrollAmount = 0;
        }
      }
    }, 30);
  };

  const stopScrolling = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
    {/* العمود الأيسر */}
      <aside className="w-full md:w-1/3 space-y-6">
        {/* آخر الأخبار */}
        <div>
          <h2 className="text-3xl font-bold text-right mb-5  pb-1">آخر الأخبار</h2>
          <div
            ref={tickerRef}
            className="overflow-hidden h-50 relative  "
            onMouseEnter={stopScrolling}
            onMouseLeave={startScrolling}
          >
            <ul className="text-sm text-right space-y-4 py-2">
              {newsItems.concat(newsItems).map((item, idx) => (
                
                <li key={idx} className="flex justify-between items-center bg-white p-2 rounded shadow">
                  <span className="bg-green-600 text-white text-xs font-bold w-10 h-10 flex items-center justify-center rounded-full ml-2">
                    {item.date}
                  </span>
                  <Link to={`/programs/${item.slug}`} ><span className="text-right w-full">{item.text}</span></Link>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* دراسات ومقالات */}
        <div>
          <Link to="/articles">
          <h2 className="text-3xl font-bold text-right mb-6 pb-1">دراسات ومقالات</h2>
          </Link>
          <ul className="text-sm text-right space-y-2">
            {articles.map((item, id) => (
              // const slug = item.id; 
              <li key={id} className="flex gap-2 items-center border-b-2 pb-2 border-gray-100">
                <span className="bg-[#4CAF50]  text-white text-xs font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  {item.date}
                </span>
                <Link to={`/articles/${item.id}`}  className="text-blue-700 hover:underline cursor-pointer">{item.title}</Link>
                
              </li>
            ))}
          </ul>
        </div>

        {/* تابعونا */}
        <div className="pt-4">
          <div className="flex justify-start gap-3">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(31,171,232)]">تابعونا على</h3>
            <div className="flex justify-center gap-4 text-white text-xl">
              {/* فيسبوك */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition duration-300"
              >
                <FaFacebookF />
              </a>

              {/* يوتيوب */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition duration-300"
              >
                <FaYoutube />
              </a>

              {/* إنستغرام */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 p-3 rounded-full transition duration-300"
              >
                <FaInstagram />
              </a>
            </div> 
          </div>
        </div>
      </aside>


    
    </>
  );
};

export default SideBar;

