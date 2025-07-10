import { Link } from 'react-router-dom';
import Logo from './Images/logo.jpg';
import mainImage from './Images/main.jpg';
import { motion } from "framer-motion";

function ConstantSection() {

      const items = [
    {
      title: "برامج الجمعية",
      text: "اضغط هنا للوصول إلى برامجنا",
      path:"/programms"
    },
    {
      title: "مدرسة بيسان الخاصة",
      text: "اضغط هنا للوصول إلى صفحة مدرسة بيسان الخاصة",
      path:"/publications/besan"
    },
    {
      title: "مشروع التدريبات والدورات",
      text: "اضغط هنا لزيارة الصفحة",
      path:"/publications/bulletins"
    },
  ];

  return (
    <main className='mt-16 w-[75%] mx-auto'>
    <div className="bg-white text-black py-4  px-4 flex flex-col  md:flex-row justify-between items-center">
      <div className="text-center flex  items-center gap-2">
        <Link to="/"><img src={Logo} alt="Zajil" className="h-20  mx-auto mt-2 cursor-pointer" /></Link>
        <div><Link to="/"><h1   className="text-4xl font-bold  text-gray-600 cursor-pointer">جمعية التأهيل والتدريب الاجتماعي</h1>
        {/* <h2 className="text-xl font-bold cursor-pointer">والتدريب الاجتماعي</h2> */}
        </Link>
        </div>
      </div>
      <div className="items-center">
        {/* <div className="flex  my-2">
        <button className="bg-blue-400 text-white px-3 py-1 text-sm">شارك</button>
         <input
          type="email"
          placeholder="ادخل بريدك الإلكتروني هنا"
          className="shadow-md px-2 py-1 text-sm w-60"
        /></div> */}
        <div>
        <button className="bg-[#4CAF50] text-white px-3 py-1 text-sm">بحث</button>
         <input
          type="text"
          className="shadow-md px-2 py-1 text-sm w-60"
        />
      </div>
      </div>

    </div>
  

  <div className="w-full p-4 flex flex-col   md:flex-row gap-6">
      {/* <div className="md:w-2/3"> */}
      <div className="md:w-full"> 
        <img
          src={mainImage}
          alt="Main Visual"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        
      </div>

      
      <div className="md:w-1/3 flex flex-col items-end justify-center gap-2">
  {items.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }} // ← تأخير متدرج
      className=""
    >
      <Link
        to={item.path}
        className="bg-[rgb(31,171,232)] text-white p-4 rounded shadow text-center w-85 cursor-pointer block"
      >
        <h2 className="text-lg font-bold mb-1">{item.title}</h2>
        <p className="text-sm">{item.text}</p>
      </Link>
    </motion.div>
  ))}
</div>

    </div>

</main>
  );
}
export default ConstantSection;
