import React from "react";
import ReactImageGallery from "react-image-gallery";

const images = [
    {
        original: "img/4D341F2C-D185-42AD-B598-6D8CA85FAE58_1_105_c.jpeg",
        thumbnail: "img/4D341F2C-D185-42AD-B598-6D8CA85FAE58_1_105_c.jpeg",
    },
    {
        original: "img/5B1AED04-17D4-4ADE-B85F-2F0D3E650C12_1_105_c.jpeg",
        thumbnail: "img/5B1AED04-17D4-4ADE-B85F-2F0D3E650C12_1_105_c.jpeg",
    },
    {
        original: "img/DFA08A2C-9916-41B1-A111-8384CA888F3C_1_105_c.jpeg",
        thumbnail: "img/DFA08A2C-9916-41B1-A111-8384CA888F3C_1_105_c.jpeg",
    },
    {
        original: "img/50AA24F0-602A-496A-89B2-4A385E4695D3_1_105_c.jpeg",
        thumbnail: "img/50AA24F0-602A-496A-89B2-4A385E4695D3_1_105_c.jpeg",
    },
    {
        original: "img/248E0274-38B9-4727-B024-71566C2F2190_1_105_c.jpeg",
        thumbnail: "img/248E0274-38B9-4727-B024-71566C2F2190_1_105_c.jpeg",
    },
    {
        original: "img/juan_edited_edited.jpg",
        thumbnail: "img/juan_edited_edited.jpg",
    },
];

function Home() {
    return (
        <div className="secondaryWrapper whenSubComponent">
            <div className="galleryWrapper">
                <ReactImageGallery items={images} />
            </div>
        </div>
    );
}

export default Home;
