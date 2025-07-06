import React, {useRef } from "react";
import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import ContactInfo from './Images/contactInfo.png'
import SideBar from "./SideBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import photo1 from './Images/photo1.jpg';
import photo2 from './Images/photo1.jpg';
import SearchBar from "./SearchBar";



const MainSection = () => {
  

  const activities = [
    {
      title: "إطلاق جلسات توعية بمركز الحماية",
      img: slider1,
      slug: "civil-engineer",
      desc: "  تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة،  جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة جلسات لتوعية المجتمع المحلي حول حماية الطفولة."
    },
    {
      title: "شراكة مع شركة PALPAY",
      img: slider2,
      slug: "civil-engineer",
      desc: " تلبية الاحتياجات الإنسانية وتعزيز ظروف الحماية” و المساهمة في بناء صمود المجتمعات الأكثر ضعفاً والمتضررة من الصدمات والأزمات الإنسانية المتكررة وعواقبها في قطاع غزة،  جاء كهدف أساس لمشروع ” تلبية الاحتياجات الإنسانية الأساسية وتعزيز ظروف الحماية للأسر الضعيفة والمحرومة "
    }
  ];
  const newsList = [
      {
        id: 1,
        image: photo1, // ضع صورة هنا أو رابط خارجي
        title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
        date: "25 يونيو 2025",
        desc:"أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان (ايام الفرح) بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي،"
      },
      {
        id: 2,
        image: photo2, // ضع صورة هنا أو رابط خارجي
        title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
        date: "25 يونيو 2025",
      
    desc:"طلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان (ايام الفرح) بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي،"},];

  const projects = [
    {
      title: "تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك",
      desc: "أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان (ايام الفرح) بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي"
    },
    {
      title: "تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك",
      desc: "أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان (ايام الفرح) بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي"
    }
  ];

  // const tickerRef = useRef(null);
  // const intervalRef = useRef(null);

  // useEffect(() => {
  //   startScrolling();
  //   return () => stopScrolling();
  // }, []);

  // const startScrolling = () => {
  //   let scrollAmount = tickerRef.current?.scrollTop || 0;
  //   intervalRef.current = setInterval(() => {
  //     if (tickerRef.current) {
  //       scrollAmount += 1;
  //       tickerRef.current.scrollTop = scrollAmount;
  //       if (scrollAmount >= tickerRef.current.scrollHeight - tickerRef.current.clientHeight) {
  //         scrollAmount = 0;
  //       }
  //     }
  //   }, 30);
  // };

  // const stopScrolling = () => {
  //   clearInterval(intervalRef.current);
  // };

  return (
    <> 
    <SearchBar />
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
        {/* العمود الأيمن */}
      <div className="w-full md:w-2/3 space-y-6">
        {/* أنشطة وفعاليات */}
        <div className="border-2 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-4 px-4 py-4">
            <h2 className="text-2xl font-bold text-right mb-1  pb-1">أخبار وبرامج الجمعية</h2>
            <Link to={"/programms"}><button type="submit" className="bg-[rgb(31,171,232)]  w-32 text-white px-12 py-2 rounded hover:bg-[#4CAF50] ">
           المزيد...
              </button>
            </Link>
          </div>
         

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 px-8 text-center">
  {activities.map((act, i ) => (
    <motion.div
      key={i}
      className="text-sm text-right shadow-md p-1 cursor-pointer bg-white rounded"
      whileTap={{ y: -8 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={act.img}
        alt={`activity-${i}`}
        className="mb-2 w-full h-40 object-cover rounded"
      />
      <p className="text-blue-700 font-bold mb-1">{act.title}</p>
      <p>
        {act.desc}
        <Link to={`/programs/${act.slug}`} className="text-gray-800 font-bold hover:text-[#5a2f00]">
                    أكمل القراءة...
                  </Link>
      </p>
    </motion.div>
  ))}
</div>

        </div>

        {/* جديد مشاريعنا */}
        <div className="border-2 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-4 px-4 py-4 item-center">
            <h2 className="text-3xl font-semibold text-right">مدرسة بيسان الخاصة</h2>
             <Link to={"/PhotoAlbum"}><button type="submit" className="bg-[rgb(31,171,232)]  w-32 text-white px-12 py-2 rounded hover:bg-[#4CAF50] ">
           المزيد...
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-right  p-8">
            {projects.map((proj, i) => (
              <div key={i} className="border-2 border-gray-200 p-2" >
                <h3 className="text-blue-700 text-center font-bold mb-3">{proj.title}</h3>
                <p>{proj.desc}
                  <Link
                    to={`/album/${i}`}
                    className="text-blue-400  p-2 font-semibold hover:underline "
                  >
                    أكمل القراءة...
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ألبوم الصور */}
        <div className="border-2 border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-4 px-4 py-4">
            <h2 className="text-2xl font-bold text-right mb-1  pb-1">ألبوم الصور</h2>
            <Link to={"/PhotoAlbum"}><button type="submit" className="bg-[rgb(31,171,232)]  w-32 text-white px-12 py-2 rounded hover:bg-[#4CAF50] ">
           المزيد...
              </button>
            </Link>
          </div>
         

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-8 text-center">
  {newsList.map((act, id) => (
    <motion.div
      key={id}
      className="text-sm text-right shadow-md p-1 cursor-pointer bg-white rounded"
      whileTap={{ y: -8 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={act.image}
        alt={`activity-${id}`}
        className="mb-2 w-full h-40 object-cover rounded"
      />
      <p className="text-blue-700 font-bold mb-1">{act.title}</p>
      <p>
        {act.desc}
        <Link
                    to={`/album/${id}`}
                    className="text-blue-400  p-2 font-semibold hover:underline "
                  >
                    ألبوم الصور...
                  </Link>
      </p>
    </motion.div>
  ))}
</div>

        </div>

       {/* <div className="w-full">
      <h2 className="text-3xl font-bold text-right mb-3  pb-1">ألبوم الصور</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl bg-white text-[rgb(31,171,232)] bg-opacity-70 rounded-full px-2 py-1 shadow z-10"
        >
          ›
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll px-10 scroll-smooth scrollbar-hide"
        >
          {galleryImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`gallery-${idx}`}
              className="h-32 w-48 object-cover rounded flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-[rgb(31,171,232)] bg-white bg-opacity-70 rounded-full px-2 py-1 shadow z-10"
        >
          ‹
        </button>
      </div>
    </div> */}

      </div>
  
<SideBar/>
    
    </section>
    </>
  );
};

export default MainSection;

