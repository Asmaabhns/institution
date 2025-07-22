

// import { Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import JobApplicationForm from "./component/JobApplicationForm";
import ContactInfo from "./component/ContactInfo";
import MessageSection from "./component/Home/MessageSection";
import CertificatesSection from "./component/CertificatesSection";
import CertificateDetails from "./component/CertificateDetails";
import ScrollToTopButton from "./component/ScrollToTopButton";
import PhotoAlbum from "./component/MediaLibrary/PhotoAlbum";
import PhotoDetail from "./component/MediaLibrary/PhotoDetail";
import Programms from "./component/Programms";
import ProgrammsDetails from "./component/ProgrammsDetails";
import ArticlesDetails from "./component/ArticlesDetails";
import ArticlesSection from "./component/ArticlesSection";
import Layout from "./component/Layout";
import MainSection from "./component/MainSection";
import AdminDashboard from "./component/DashBoard/AdminDashboard";
import SrolltoTopPages from "./component/SrolltoTopPages";
import Goals from "./component/Home/Goals";
import StrategicPlan from "./component/Home/StrategicPlan";
import Principles from "./component/Home/Principles";
import Regulation from "./component/Home/Regulations";
import Partners from "./component/Home/Partners";
import Board from "./component/Home/Board";
import AnnualReports from "./component/Home/AnnualReports";
import VideoAlbum from "./component/MediaLibrary/VideoAlbum";
import VideoDetail from "./component/MediaLibrary/VideoDetail";
import AddForm from "./component/DashBoard/AddForm";
import News from "./component/DashBoard/News";
// import Home from "./component/DashBoard/Home";
import Login from "./component/DashBoard/Login";
// const basename = "/finalInstitution";


function App() {
  return (
    <Router>
      <SrolltoTopPages/>
      <Routes>
        {/* صفحة الهوم بدون ConstantSection */}
        <Route path="/" element={
          <div className="font-sans container mx-auto w-[75%]">
            {/* <AdminDashboard/> */}
            <Header />
            <MainSection />
            <ScrollToTopButton />
            <Footer /> 
          </div>
           
        }/>
        
       <Route path="/admin" element={
    <div className="font-sans">
      <AdminDashboard />
    </div>
  } />
        
        <Route path="/login" element={
          <div className="font-sans   ">
            <Login/>
          </div>
}/>

        {/* باقي الصفحات بداخل Layout */}
        <Route path="*" element={
          <Layout>
            <div className="font-sans container mx-auto w-[70%]">
              <Header />
              <Routes>
                <Route path="/job" element={<JobApplicationForm />} />
                <Route path="/contact" element={<ContactInfo />} />
                <Route path="/home/message" element={<MessageSection />} />
                <Route path="/home/goals" element={<Goals />} />
                <Route path="/home/strategicPlan" element={<StrategicPlan />} />
                <Route path="/home/regulation" element={<Regulation />} />
                <Route path="/home/principles" element={<Principles />} />
                <Route path="/home/partners" element={<Partners />} />
                <Route path="/home/board" element={<Board />} />
                <Route path="/home/reports" element={<AnnualReports />} />
                <Route path="/certificates" element={<CertificatesSection />} />
                <Route path="/certificate/:slug" element={<CertificateDetails />} />
                <Route path="/PhotoAlbum" element={<PhotoAlbum />} />
                <Route path="/album/:id" element={<PhotoDetail />} />
                <Route path="/VideoAlbum" element={<VideoAlbum />} />
                <Route path="/Video/:id" element={<VideoDetail />} />
                <Route path="/Programms" element={<Programms />} />
                <Route path="/programs/:slug" element={<ProgrammsDetails />} />
                <Route path="/articles" element={<ArticlesSection />} />
                <Route path="/articles/:id" element={<ArticlesDetails />} />
                <Route path="/publications/programms" element={<Programms />} />
                <Route path="/publications/besan" element={<PhotoAlbum />} />
                <Route path="/publications/bulletins" element={<PhotoAlbum />} />
                {/* <Route path="/admin" element={<AdminDashboard />} /> */}
                  {/* <Route path="/admin/news" element={<News />} />
                <Route path="/admin/addForm" element={<AddForm />} /> */}
                
              </Routes>
              <ScrollToTopButton />
              {/* <Footer /> */}
            </div>
          </Layout>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
