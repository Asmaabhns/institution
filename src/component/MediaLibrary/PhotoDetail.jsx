// src/pages/AlbumDetail.jsx
import { useParams } from "react-router-dom";
import photo1 from "../Images/photo1.jpg";
import SideBar from "../SideBar";
import photo2 from "../Images/photo2.jpg";
import photo3 from "../Images/photo3.jpg";
import photo4 from "../Images/photo4.jpg";
import photo5 from "../Images/photo5.jpg";
import photo6 from "../Images/photo6.jpg";
import { useRef } from "react";


  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
    ,photo6
  ];

 
const fakeData = [
  {
    id: "1",
    image: photo1,
    title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
    date: "7 يونيو 2025",
    content: `أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان "أيام فرح" بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي، وقد انطلق النشاط من منطقة مخيم 5 شمال النصيرات، أمام بيت الطفل الشهيد/ محمد شحادة، الذي اهديه هذا النشاط لروحه، وروح أطفال شهداء المخيم.
وقد شمل الفعالية مجموعة من الأنشطة الترفيهية المتنوعة والمتميزة، التي ساهمت بشكل كبير في رسم الابتسامة على وجوه الأطفال في أيام العيد، رغم الظروف الصعبة التي يعيشها الاطفال في واقع الحرب المدمرة في قطاع غزة.
بدوره أعرب سكان المخيم( مخيم 5) عن سعادتهم الكبيرة لهذا النشاط الذي حقق جزء مهم وكبير لترفيه الاطفال وتنشيطهم ورسم الابتسامة على وجوههم، والتي اعتبروها ايضا رسالة تحدي للواقع وتبديل الألم بالأمل والنور، والدعوة للحياة على الموت، كون أطفالنا يرفضون الموت ويبحثون عن مستقبل آمن مطمئن عزيز كريم لهم.
من جانب أكدت جمعية التأهيل عن استكمال هذه المبادرة لتستهدف مناطق جغرافية متعددة، ليكونو الفرح شامل ويصل إلى أطفالنا ما استطعنا إلى ذلك سبيلا.`,
  },
  {
    id: "2",
    image: photo1,
    title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
    date: "7 يونيو 2025",
    content: `أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان "أيام فرح" بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي، وقد انطلق النشاط من منطقة مخيم 5 شمال النصيرات، أمام بيت الطفل الشهيد/ محمد شحادة، الذي اهديه هذا النشاط لروحه، وروح أطفال شهداء المخيم.
وقد شمل الفعالية مجموعة من الأنشطة الترفيهية المتنوعة والمتميزة، التي ساهمت بشكل كبير في رسم الابتسامة على وجوه الأطفال في أيام العيد، رغم الظروف الصعبة التي يعيشها الاطفال في واقع الحرب المدمرة في قطاع غزة.
بدوره أعرب سكان المخيم( مخيم 5) عن سعادتهم الكبيرة لهذا النشاط الذي حقق جزء مهم وكبير لترفيه الاطفال وتنشيطهم ورسم الابتسامة على وجوههم، والتي اعتبروها ايضا رسالة تحدي للواقع وتبديل الألم بالأمل والنور، والدعوة للحياة على الموت، كون أطفالنا يرفضون الموت ويبحثون عن مستقبل آمن مطمئن عزيز كريم لهم.
من جانب أكدت جمعية التأهيل عن استكمال هذه المبادرة لتستهدف مناطق جغرافية متعددة، ليكونو الفرح شامل ويصل إلى أطفالنا ما استطعنا إلى ذلك سبيلا.`,
  },
  {
    id: "3",
    image: photo1,
    title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
    date: "7 يونيو 2025",
    content: `أطلقت جمعية التأهيل والتدريب الاجتماعي - النصيرات، صباح اليوم السبت 7 يونيو، ثاني أيام عيد الأضحى المبارك، مبادرة ترفيه وتنشيط للأطفال والتي جاءت تحت عنوان "أيام فرح" بمتابعة وتنسيق قسم الدعم النفسي الاجتماعي، وقد انطلق النشاط من منطقة مخيم 5 شمال النصيرات، أمام بيت الطفل الشهيد/ محمد شحادة، الذي اهديه هذا النشاط لروحه، وروح أطفال شهداء المخيم.
وقد شمل الفعالية مجموعة من الأنشطة الترفيهية المتنوعة والمتميزة، التي ساهمت بشكل كبير في رسم الابتسامة على وجوه الأطفال في أيام العيد، رغم الظروف الصعبة التي يعيشها الاطفال في واقع الحرب المدمرة في قطاع غزة.
بدوره أعرب سكان المخيم( مخيم 5) عن سعادتهم الكبيرة لهذا النشاط الذي حقق جزء مهم وكبير لترفيه الاطفال وتنشيطهم ورسم الابتسامة على وجوههم، والتي اعتبروها ايضا رسالة تحدي للواقع وتبديل الألم بالأمل والنور، والدعوة للحياة على الموت، كون أطفالنا يرفضون الموت ويبحثون عن مستقبل آمن مطمئن عزيز كريم لهم.
من جانب أكدت جمعية التأهيل عن استكمال هذه المبادرة لتستهدف مناطق جغرافية متعددة، ليكونو الفرح شامل ويصل إلى أطفالنا ما استطعنا إلى ذلك سبيلا.`,
  },
  // أضف المزيد إذا أردت
];

const PhotoDetail = () => {
  const { id } = useParams();
  const album = fakeData.find((item) => item.id === id);
  const scrollRef = useRef(null);

     const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  if (!album) {
    return <div className="text-center mt-10 text-red-600">لا يوجد ألبوم مطابق</div>;
  }

  return (
    <>
    <section className="w-full flex flex-col md:flex-row gap-6 py-8 container mx-auto">
    <div className="max-w-2xl  p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{album.title}</h1>
      <img src={album.image} alt={album.title} className="w-full h-96 object-cover rounded-lg mb-6" />
      <p className="text-sm text-gray-500 mb-1">{album.date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{album.content}</p>
    </div>
    <SideBar/>
    </section>
    
         {/* ألبوم الصور */}
       <div className="w-full my-12">
      <h2 className="text-3xl font-bold text-right mb-3  pb-1">ألبوم الصور</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 bg-opacity-70 rounded-full px-2 py-1 shadow z-10"
        >
          ◀
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4  overflow-x-scroll px-10 scroll-smooth scrollbar-hide"
        >
          {images.map((src, idx) => (
            <div className="min-w-[220px] h-56 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
            <img
              key={idx}
              src={src}
              alt={`gallery-${idx}`}
            //   className="h-40 w-48 object-cover rounded flex-shrink-0"
            className="w-full h-full object-cover"
            /></div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow z-10 "
        >
          ▶
        </button>
      </div>
    </div>
    </>
  );
};

export default PhotoDetail;
