import React from "react";
import photo1 from '.././Images/photo1.jpg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewsCard = ({ image, title, date,id }) => {

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
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">{date}</p>
          <Link
            to={`/album/${id}`}
            className="text-white bg-blue-400 p-2 font-semibold hover:underline block"
          >
            ألبوم الصور...
          </Link>
        </div>
      </div>
    </motion.div>
  );
};


const PhotoAlbum = () => {
  const newsList = [
    {
      id: 1,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    },
    {
      id: 2,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    },
     {
      id: 3,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 4,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 5,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 6,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 7,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 8,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }, {
      id: 9,
      image: {photo1}, // ضع صورة هنا أو رابط خارجي
      title: "《تأهيل النصيرات تُطلق مبادرة أيام فرح بمناسبة عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    }
    // كرّر أو اجلب من API لاحقًا
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {newsList.map((news) => (
        <NewsCard
          key={news.id}
          id={news.id}
        //   image={news.image}
        image={photo1}
          title={news.title}
        //   description={news.description}
          date={news.date}
        />
      ))}
    </div>
  );
};

export default PhotoAlbum;
