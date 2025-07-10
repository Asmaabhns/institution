import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsProvider } from './component/DashBoard/NewsContext.jsx';


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <NewsProvider>
    <App />
    </NewsProvider>
  </StrictMode>
  ,
)
