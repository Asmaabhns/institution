import { Link } from "react-router-dom";
import React from 'react';
import {
  FaHome,
  FaNewspaper,
  FaProjectDiagram,
  FaHandsHelping,
  FaCertificate,
  FaBookOpen,
  FaVideo,
  FaImage,
  FaRegChartBar,
  FaChild,
  FaTags,
  FaCog
} from "react-icons/fa";

const items = [
  { title: "الرئيسية", icon: <FaHome /> },
  { title: "أخبار", icon: <FaNewspaper /> },
  { title: "مشاريع", icon: <FaProjectDiagram /> },
  { title: "برامج الجمعية", icon: <FaHandsHelping /> },
  { title: "شهادات", icon: <FaCertificate /> },
  { title: "دراسات ومقالات", icon: <FaBookOpen /> },
  { title: "فيديو", icon: <FaVideo /> },
  { title: "صور", icon: <FaImage /> },
  { title: "تقارير سنوية", icon: <FaRegChartBar /> },
  { title: "روضة بيسان", icon: <FaChild /> },
  { title: "تصنيفات", icon: <FaTags /> },
  { title: "الإعدادات", icon: <FaCog /> },
];
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", views: 20000, sales: 15000 },
  { month: "Feb", views: 8000, sales: 9000 },
  { month: "Mar", views: 16000, sales: 14000 },
  { month: "Apr", views: 15000, sales: 16000 },
  { month: "May", views: 18000, sales: 14000 },
  { month: "Jun", views: 10000, sales: 22000 },
];


const AdminDashboard = () => {
  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-100" dir="rtl">      
      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-[rgb(31,171,232)]">الرئيسية</h2>
          <div className="flex items-center gap-4">
            <img src="https://i.pravatar.cc/32" alt="avatar" className="rounded-full w-8 h-8" />
          </div>
        </header>

        {/* البطاقات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="عدد الأخبار" value="246" change="-13.8%" color="text-red-500" />
          <StatCard title="مشاريع" value="53" change="+13.8%" color="text-green-500" />
          <StatCard title="صور" value="39" change="-13.8%" color="text-red-500" />
          <StatCard title="فيديو" value="38" change="-13.8%" color="text-red-500" />
          <StatCard title="شهادات" value="124" change="+13.8%" color="text-green-500" />
          <StatCard title="برامج الجمعية" value="1" change="-13.8%" color="text-red-500" />
          <StatCard title="دراسات ومقالات" value="45" change="+13.8%" color="text-green-500" />
          <StatCard title="روضة بيسان" value="1" change="+13.8%" color="text-green-500" />
          <StatCard title="تقارير سنوية" value="58" change="-13.8%" color="text-red-500" />
        </div>

        {/* رسم بياني مؤقت */}
        <div className="w-full h-96 bg-white mb-6 rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-4">الإحصائيات</h2>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month"/>            
              <YAxis
                tick={({ x, y, payload }) => (
                  <text x={x} y={y} dy={6} fill="#000" fontSize={15} textAnchor="start">
                    <tspan x={x} dy="0.1em">{payload.value}</tspan>
                  </text>
                    )}
                  />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#38bdf8"
                fillOpacity={1}
                fill="url(#colorViews)"
                name="Total Views"
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#a78bfa"
                fillOpacity={1}
                fill="url(#colorSales)"
                name="Products Sold"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        
      </main>

      {/* الشريط الجانبي */}
      <aside className="w-64 bg-[rgb(31,171,232)] text-white flex flex-col py-6 px-4">
        <h1 className="text-2xl font-bold mb-8 tracking-wider ">لوحة التحكم</h1>
        <nav className="flex flex-col gap-4 text-sm">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center justify-start gap-3 p-1.5 hover:text-black transition"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.title}</span>
          </a>
        ))}
      </nav>

      </aside>
    </div>
  );
};

const StatCard = ({ title, value, change, color }) => (
  <div className="bg-white p-6 rounded-xl shadow text-center">
    <p className="text-lg font-bold text-[rgb(31,171,232)] mb-2">{title}</p>
    <h3 className="text-md font-bold">{value}</h3>
    <p className={`text-sm mt-1 text-left ${color}`}>{change}</p>
  </div>
);

export default AdminDashboard;
