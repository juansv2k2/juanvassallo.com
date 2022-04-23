import ImageGallery from "react-image-gallery";
import mainWrapper from "../mainWrapper";
import { Component } from "react";

const images = [
    {
        original: "img/31955481_10155222962441046_251916440548933632_o.jpg",
        thumbnail: "img/31955481_10155222962441046_251916440548933632_o.jpg",
    },
    {
        original: "img/31224930_952206774948132_5286944826858668032_n.jpg",
        thumbnail: "img/31224930_952206774948132_5286944826858668032_n.jpg",
    },
    {
        original: "img/juan_edited_edited.jpg",
        thumbnail: "img/juan_edited_edited.jpg",
    },
    {
        original: "img/2EF32D7C-68D2-4EC5-9C2C-63E078C7D95E.jpg",
        thumbnail: "img/2EF32D7C-68D2-4EC5-9C2C-63E078C7D95E.jpg",
    },
    {
        original: "img/DSC_0308.jpg",
        thumbnail: "img/DSC_0308.jpg",
    },
];

function Home() {
    return (
        <div className="mainWrapper">
            <div className="secondaryWrapper"></div>
        </div>
    );
}

export default Home;
