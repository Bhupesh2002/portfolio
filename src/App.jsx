import React, { useEffect, useState } from "react";
// import { Button } from "flowbite-react";  
import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactSection from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./components/AboutPageSection";
import Loader from "./components/animations/LottieLoader";


function App(){

  const [loading,setLoading] = useState(true);

  useEffect( ()=>{
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  },[]);

  if(loading) return <Loader/>
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:projectId" element={ <ProjectDetail/> }/>
        <Route path="/contact" element={<ContactSection/>}/>
      </Routes>
    </Router>
    </>  
  )
}

export default App;