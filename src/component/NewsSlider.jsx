import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
import slider1 from "./Images/slider1.jpg";
import slider2 from "./Images/slider2.jpg";

const newsData = [
  {
    id: 1,
    title: "إطلاق جلسات توعية بمركز الحماية",
    excerpt:
      "تلبيـة الاحتياجات الإنسـانية وتعزيـز ظـروف الحمـاية و المسـاهمة فـي بنـاء صمـود المجتمعات الأكثـر ضعفـاً...",
    image: slider1,
    slug: "civil-engineer",
  },
  {
    id: 2,
    title: "شراكة مع شركة PALPAY",
    excerpt:
      "تم عقد شراكة استراتيجية جديدة لتعزيز الخدمات المالية المقدمة للمواطنين...",
    image: slider2,
    slug: "civil-engineer",
  },
   {
    id: 3,
    title: "إطلاق جلسات توعية بمركز الحماية",
    excerpt:
      "تلبيـة الاحتياجات الإنسـانية وتعزيـز ظـروف الحمـاية و المسـاهمة فـي بنـاء صمـود المجتمعات الأكثـر ضعفـاً...",
    image: slider1,
    slug: "civil-engineer",
  },
  {
    id: 4,
    title: "شراكة مع شركة PALPAY",
    excerpt:
      "تم عقد شراكة استراتيجية جديدة لتعزيز الخدمات المالية المقدمة للمواطنين...",
    image: slider2,
    slug: "civil-engineer",
  },
];

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Slider {...settings}>
        {newsData.map((item) => (
          <div key={item.id} className="relative">
            {/* صورة الخلفية */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[28rem] object-cover rounded-lg"
            />

            {/* طبقة تعتيم + المحتوى */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
                textAlign: "center",
                borderRadius: "0.5rem",
              }}
            >
              <h3 className="text-2xl font-bold my-4">{item.title}</h3>
              <p className="text-sm md:text-base mb-4 max-w-2xl">{item.excerpt}</p>
              <Link
                to={`/programs/${item.slug}`}
                className="text-blue-400 hover:text-blue-600 px-4 py-2 rounded font-bold  transition"
              >
                ...أكمل القراءة
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;


// import React from "react";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import slider1 from "./Images/slider1.jpg";
// import slider2 from "./Images/slider2.jpg";

// const newsData = [
//   {
//     id: 1,
//     title: "إطلاق جلسات توعية بمركز الحماية",
//     excerpt: "تلبيـة الاحتياجات الإنسـانية وتعزيـز ظـروف الحمـاية...",
//     image: slider1,
//     slug: "civil-engineer",
//   },
//   {
//     id: 2,
//     title: "شراكة مع شركة PALPAY",
//     excerpt: "تم عقد شراكة استراتيجية جديدة لتعزيز الخدمات المالية...",
//     image: slider2,
//     slug: "palpay-partnership",
//   },
// ];

// const NewsSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//   };

//   return (
//     <div style={{ width: "100%", maxWidth: "80rem", margin: "0 auto", padding: "1rem" }}>
//       <Slider {...settings}>
//         {newsData.map((item) => (
//           <div key={item.id} style={{ position: "relative" }}>
//             {/* الصورة */}
//             <img
//               src={item.image}
//               alt={item.title}
//               style={{
//                 width: "100%",
//                 height: "28rem",
//                 objectFit: "cover",
//                 borderRadius: "0.5rem",
//               }}
//             />

//             {/* طبقة التعتيم + المحتوى */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 backgroundColor: "rgba(0, 0, 0, 0.4)",
//                 color: "white",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "2rem",
//                 textAlign: "center",
//                 borderRadius: "0.5rem",
//               }}
//             >
//               <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "1rem" }}>
//                 {item.title}
//               </h3>
//               <p style={{ fontSize: "1rem", maxWidth: "700px", marginBottom: "1rem" }}>
//                 {item.excerpt}
//               </p>
//               <Link
//                 to={`/programs/${item.slug}`}
//                 style={{
//                   backgroundColor: "#1fabe8",
//                   color: "white",
//                   padding: "0.5rem 1rem",
//                   borderRadius: "6px",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                 }}
//               >
//                 أكمل القراءة...
//               </Link>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default NewsSlider;
