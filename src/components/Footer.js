import React from "react";

import { FaFacebookF, FaInstagram, FaBandcamp } from "react-icons/fa";
import { RiSoundcloudFill, RiSpotifyLine } from "react-icons/ri";

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href={"https://www.facebook.com/juansebastian.vassallo"}>
                    <FaFacebookF />{" "}
                </a>

                <a href={"https://www.instagram.com/juanvassallo.arg/"}>
                    <FaInstagram />
                </a>
                <a href={"https://juanvassallo.bandcamp.com/"}>
                    <FaBandcamp />
                </a>
                <RiSpotifyLine />
            </div>
            <p>© 2021 Juan Sebastian Vassallo</p>
        </div>
    );
}

export default Footer;
