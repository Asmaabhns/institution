// import News from "./News";
// import AddForm from "./AddForm";
// import Home from "./Home";

// function AdminDashboard() {
//   return (
//     <Router>
//       <SrolltoTopPages/>
//       <Routes>
//         <Route path="*" element={
//           // <Layout>
//             <div className="font-sans container mx-auto w-[70%]">
//               <Header />
//               <Routes>
//                 {/* <Route path="/admin" element={<AdminDashboard />} /> */}
//                   <Route path="/admin/news" element={<News />} />
//                 <Route path="/admin/addForm" element={<AddForm />} />
                
//               </Routes>
//               <ScrollToTopButton />
//               <Footer />
//             </div>
//           // </Layout>
//         }/>
//       </Routes>
//     </Router>
//   );
// }

// export default AdminDashboard;
import React, { useState } from "react";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
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
  FaCog,
} from "react-icons/fa";
import News from "./News";
import AddForm from "./AddForm";
import Settings from "./AdminSettingsPage";

// import Programm from "./Programm";

const items = [
  { title: "الرئيسية", icon: <FaHome />, key: { name: "home" } },
  { title: "إضافة خبر", icon: <FaNewspaper />, key: { name: "addForm" } },
  { title: "كل الأخبار", icon: <FaProjectDiagram />, key: { name: "news", category: "الكل" } },
  { title: "برامج الجمعية", icon: <FaHandsHelping />, key: { name: "news", category: "برامج الجمعية" } },
  { title: "مدرسة بيسان الخاصة", icon: <FaChild />, key: { name: "news", category: "مدرسة بيسان الخاصة" } },
  { title: "شهادات", icon: <FaCertificate />, key: { name: "news", category: "شهادات" } },
  { title: "دراسات ومقالات", icon: <FaBookOpen />, key: { name: "news", category: "دراسات و مقالات" } },
  { title: "فيديو", icon: <FaVideo />, key: { name: "news", category: "فيديو" } },
  { title: "صور", icon: <FaImage />, key: { name: "news", category: "صور" } },
  { title: "تقارير سنوية", icon: <FaRegChartBar />, key: { name: "news", category: "ملفات" } },
  { title: "الإعدادات", icon: <FaCog />, key: { name: "settings" } },
];

function AdminDashboard() {
  // const [currentPage, setCurrentPage] = useState({ name: "home" });

  const location = useLocation();
const [currentPage, setCurrentPage] = useState({ name: "home" });

useEffect(() => {
  if (location.state?.page) {
    setCurrentPage(location.state.page);
  }
}, [location.state]);


  const renderContent = () => {
    switch (currentPage.name) {
      case "news":
        return <News filterCategory={currentPage.category} />;
      case "addForm":
        return <AddForm />;
        case "settings":
        return <Settings />;
      // case "program":
      //   return <Programm />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex flex-row-reverse min-h-screen bg-gray-100" dir="rtl">
      <main className="flex-1 p-8">
        <div className="my-4">{renderContent()}</div>
      </main>

      {/* الشريط الجانبي */}
      <aside className="w-64 bg-[rgb(31,171,232)] text-white flex flex-col py-6 px-4">
        <h1 className="text-2xl font-bold mb-8 tracking-wider">لوحة التحكم</h1>
        <nav className="flex flex-col gap-4 text-sm">
          {items.map((item, index) => {
            const isActive =
              currentPage.name === item.key?.name &&
              currentPage.category === item.key?.category;

            return (
              <button
                key={index}
                onClick={() => item.key && setCurrentPage(item.key)}
                className={`flex items-center justify-start gap-3 p-2 rounded text-start transition ${
                  isActive
                    ? "bg-white text-black font-bold shadow"
                    : "text-white hover:text-black"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg">{item.title}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </div>
  );
}

const DashboardHome = () => (
  <>
    <Home />
  </>
);

export default AdminDashboard;
