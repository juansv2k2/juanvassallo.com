import React from "react";

import { FaFacebookF, FaInstagram, FaBandcamp } from "react-icons/fa";
import { RiSoundcloudFill, RiSpotifyLine } from "react-icons/ri";

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a
                    href={"https://www.facebook.com/juansebastian.vassallo"}
                    target="_blank"
                >
                    <FaFacebookF />{" "}
                </a>

                <a
                    href={"https://www.instagram.com/juanvassallo.arg/"}
                    target="_blank"
                >
                    <FaInstagram />
                </a>
                <a href={"https://juanvassallo.bandcamp.com/"} target="_blank">
                    <FaBandcamp />
                </a>
                <a
                    href={
                        "https://open.spotify.com/artist/5gVC35dknIoSGHUk4yRmR7"
                    }
                    target="_blank"
                >
                    <RiSpotifyLine />
                </a>
            </div>
            <p className="footText">© 2022 Juan Sebastian Vassallo</p>
        </div>
    );
}

export default Footer;
