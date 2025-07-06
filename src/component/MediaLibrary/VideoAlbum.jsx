import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import video1 from "../Images/video.mp4"; 


const NewsCard = ({ video, title, date, id }) => {
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
      <video
        src={video}
        controls
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">{date}</p>
          <Link
            to={`/Video/${id}`}
            className="text-white bg-blue-400 p-2 font-semibold hover:underline block"
          >
            ألبوم الصور...
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// مكون الألبوم الرئيسي
const VideoAlbum = () => {
  const newsList = [
    {
      id: 1,
      video: video1,
      title: "《فيديو: مبادرة أيام الفرح في عيد الأضحى المبارك》",
      date: "25 يونيو 2025",
    },
    {
      id: 2,
      video: video1,
      title: "《فيديو: جلسات توعية مجتمعية للأطفال》",
      date: "24 يونيو 2025",
    },
    {
      id: 3,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 4,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 5,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 6,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 7,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 8,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    {
      id: 9,
      video: video1,
      title: "《تغطية إعلامية للأنشطة الصيفية》",
      date: "23 يونيو 2025",
    },
    // أضف المزيد إن أردت
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {newsList.map((news) => (
        <NewsCard
          key={news.id}
          id={news.id}
          video={news.video}
          title={news.title}
          date={news.date}
        />
      ))}
    </div>
  );
};

export default VideoAlbum;
