import React from "react";
import ReactImageGallery from "react-image-gallery";

const images = [
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

    {
        original: "img/2EF32D7C-68D2-4EC5-9C2C-63E078C7D95E.jpg",
        thumbnail: "img/2EF32D7C-68D2-4EC5-9C2C-63E078C7D95E.jpg",
    },
];

function Home() {
    return (
        <div className="secondaryWrapper whenSubComponent">
            {/* <div className="galleryWrapper">
                <ReactImageGallery items={images} />
            </div> */}
        </div>
    );
}

export default Home;
