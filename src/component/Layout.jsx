// import React from "react";
// import { useLocation } from "react-router-dom";
// import ConstantSection from "./ConstantSection";
// import AdminDashboard from "./AdminDashboard";

// const Layout = ({ children }) => {
//   const location = useLocation();
//   const excludedPaths = ["/","/AdminDashboard"];
//   const hideConstantSection = excludedPaths.includes(location.pathname);
//   return (
//     <>
//       {!hideConstantSection && <ConstantSection />}
      
//       <main>{children}</main>
//     </>
//   );
// };

// export default Layout;
import React from "react";
import { useLocation } from "react-router-dom";
import ConstantSection from "./ConstantSection";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  // تحقق من أن المسار لا يبدأ بـ /admin أو يطابق الصفحة الرئيسية
  const isAdminRoute = path.startsWith("/admin");
  const isHome = path === "/";

  return (
    <>
      {/* إظهار الهيدر والكونستانت فقط إذا لم يكن داخل لوحة التحكم */}
      {!isHome && !isAdminRoute && <Header />}
      {!isHome && !isAdminRoute && <ConstantSection />}

      <main>{children}</main>

      {/* إظهار الفوتر فقط إذا لم يكن داخل لوحة التحكم */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default Layout;

