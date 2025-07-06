// import React from "react";
// // import contact from './Images/contact.png';
// import SideBar from "./SideBar";

//  function ContactInfo() {
//   return (
//     <section className="w-full flex flex-col  md:flex-row gap-8 py-6 container mx-auto">
//    <div className="bg-white min-h-screen py-10 px-4 md:px-20 font-sans w-[70%]">
//       <div className="flex flex-col flex-wrap md:flex-row gap-2 mb-2 mx-auto">
//         {/* Address Section */}
//         <div className="bg-gradient-to-b from-white to-gray-400 rounded-2xl shadow p-8 w-full md:w-1/3 h-full">
//           <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">العنوان</h2>
//           <ul className="text-right text-sm space-y-3">
//             <li> - فلسطين </li>
//             <li> - قطاع غزة</li>
//             <li> - النصيرات</li>
//             <li> - مخيم 1</li>
//             <li>- شارع العيادة</li>
//           </ul>
//         </div>

//         {/* Email Section */}
//         <div className="bg-gradient-to-b from-white to-gray-400 rounded-2xl shadow p-6 w-1/2 mr-8 md:w-1/3">
//           <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">البريد الإلكتروني</h2>
//           <ul className="text-right text-sm space-y-3">
//             <li>
//               - الإدارة والاستعلامات<br />
//               <a href="mailto:info@twasol.ps" className="text-blue-600">nrsta.ps</a><br />
//               <a href="mailto:tawasol93@hotmail.com" className="text-blue-600">nrsta91@gmail.com</a>
//             </li>
//             <li>
//               - دائرة الإعلام<br />
//               <a href="mailto:press@twasol.ps" className="text-blue-600">press@nrsta.ps</a>
//             </li>
//             <li>
//               - دائرة الحسابات<br />
//               <a href="mailto:fin@twasol.ps" className="text-blue-600">fin@nrsta.ps</a>
//             </li>
//             <li>
//               - برنامج اللاجئين<br />
//               <a href="mailto:refugee@twasol.ps" className="text-blue-600">refugee@nrsta.ps</a>
//             </li>
//             <li>
//               - روضة مرح<br />
//               <a href="mailto:marah@twasol.ps" className="text-blue-600">besan@nrsta.ps</a>
//             </li>
//           </ul>
//         </div>

//         {/* Phone Numbers Section */}
//         <div className="bg-gradient-to-b from-white to-gray-400 rounded-2xl shadow p-6 w-full md:w-1/3">
//           <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">أرقام الهواتف</h2>
//           <ul className="text-right text-sm space-y-3">
//             <li>+970 08 2551940 / جوال</li>
//             <li>+970 08 2561940 / فاكس</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <SideBar />
//     </section>
//   );
// }
// export default ContactInfo;
import React from "react";
import SideBar from "./SideBar";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ContactInfo() {
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
        className="w-full flex flex-col  md:flex-row gap-8 py-6 container mx-auto"
      >
    {/* // <section className="w-full flex flex-col  md:flex-row gap-8 py-6 container mx-auto"> */}
      {/* Main Info Container */}
      <div className="bg-white min-h-screen py-10 px-4 md:px-10 font-sans w-full md:w-[70%] rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-8 text-center border-b pb-2">اتصل بنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-lg font-bold text-blue-600 mb-4 text-center">العنوان</h2>
            <ul className="text-right text-sm space-y-2 text-gray-700">
              <li>فلسطين</li>
              <li>قطاع غزة</li>
              <li>النصيرات</li>
              <li>مخيم 1</li>
              <li>شارع العيادة</li>
            </ul>
          </div>

          {/* Email Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-lg font-bold text-blue-600 mb-4 text-center">البريد الإلكتروني</h2>
            <ul className="text-right text-sm space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">الإدارة والاستعلامات:</span><br />
                <a href="mailto:nrsta.ps" className="text-blue-600 hover:underline">nrsta.ps</a><br />
                <a href="mailto:nrsta91@gmail.com" className="text-blue-600 hover:underline">nrsta91@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold">دائرة الإعلام:</span><br />
                <a href="mailto:press@nrsta.ps" className="text-blue-600 hover:underline">press@nrsta.ps</a>
              </li>
              <li>
                <span className="font-semibold">دائرة الحسابات:</span><br />
                <a href="mailto:fin@nrsta.ps" className="text-blue-600 hover:underline">fin@nrsta.ps</a>
              </li>
              <li>
                <span className="font-semibold">برنامج اللاجئين:</span><br />
                <a href="mailto:refugee@nrsta.ps" className="text-blue-600 hover:underline">refugee@nrsta.ps</a>
              </li>
              <li>
                <span className="font-semibold">روضة مرح:</span><br />
                <a href="mailto:besan@nrsta.ps" className="text-blue-600 hover:underline">besan@nrsta.ps</a>
              </li>
            </ul>
          </div>

          {/* Phone Numbers Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-lg font-bold text-blue-600 mb-4 text-center">أرقام الهواتف</h2>
            <ul className="text-right text-sm space-y-3 text-gray-700">
              <li><span className="font-semibold">جوال:</span> +970 08 2551940</li>
              <li><span className="font-semibold">فاكس:</span> +970 08 2561940</li>
            </ul>
          </div>
        </div>
      </div>
      <SideBar/>
      </motion.div>
    
  );
}

export default ContactInfo;
