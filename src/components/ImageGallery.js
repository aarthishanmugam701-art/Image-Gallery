import React from "react";
import ImageCard from "./ImageCard";
import "./ImageCard.css";
import "./ImgeGallery.css"; // add gallery layout styles

// Import images properly
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpg";
import img16 from "../assets/16.jpg";

const images = [
  {
    url: img1,
    title: "Modern Minimal Wall",
    desc: "Clean and simple design with a modern aesthetic touch."
  },
  {
    url: img2,
    title: "Classic Wooden Wall",
    desc: "Elegant wooden panels giving a timeless classic look."
  },
  {
    url: img3,
    title: "Luxury Marble Finish",
    desc: "Premium marble texture for a rich and stylish interior."
  },
  
    
  {
    url: img5,
    title: "Geometric Pattern Wall",
    desc: "Creative shapes and patterns for a trendy vibe."
  },
  {
    url: img6,
    title: "Brick Style Wall",
    desc: "Rustic brick finish for a vintage feel."
  },
  {
    url: img7,
    title: "Nature Inspired Wall",
    desc: "Green and earthy tones bringing natural freshness."
  },
  {
    url: img8,
    title: "Abstract Art Wall",
    desc: "Bold artistic patterns for a creative space."
  },
  {
    url: img9,
    title: "3D Panel Wall",
    desc: "Stylish 3D panels creating a modern illusion effect."
  },
  {
    url: img10,
    title: "Pastel Theme Wall",
    desc: "Soft pastel colors for a calm and cozy ambiance."
  },
  {
    url: img11,
    title: "Industrial Concrete Wall",
    desc: "Raw concrete finish for an urban industrial look."
  },
  {
    url: img12,
    title: "Wallpaper Design Wall",
    desc: "Decorative wallpapers with unique patterns."
  },
  {
    url: img13,
    title: "LED Light Wall",
    desc: "Integrated lighting to enhance the wall aesthetics."
  },
  {
    url: img14,
    title: "Mirror Panel Wall",
    desc: "Reflective mirrors to create a spacious feel."
  },
  {
    url: img15,
    title: "Art Gallery Wall",
    desc: "A collection of frames showcasing creative artworks."
  },
  {
    url: img16,
    title: "Elegant Design Wall",
    desc: "Classic floral patterns for a nostalgic ambiance."
  }
];


function ImageGallery() {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <ImageCard key={index} data={img} />
      ))}
    </div>
  );
}



export default ImageGallery;

