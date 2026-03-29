import React from "react";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import "./App.css";




function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
         
      </div>
      <div id="gallery">
         <ImageGallery />
      </div>
      <div id="about">
         <Footer /> 
      </div>
    </div>
  );
}
export default App;