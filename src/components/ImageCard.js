import React from "react";
import "./ImageCard.css";


function ImageCard({ data }) {
  return (
    <div className="card">
      <img src={data.url} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.desc}</p>
    </div>
  );
}




export default ImageCard;