import React from "react";
import ReactImageGallery from "react-image-gallery";
import News from "../News";

function Home() {
  return (
    <div className="mainWrapper">
      <div className="secondaryWrapper whenSubComponent">
        <h1 className="neonText">news</h1>
        <News />
      </div>
    </div>
  );
}

export default Home;
