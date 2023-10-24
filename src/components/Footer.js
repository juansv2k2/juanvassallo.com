import React from "react";

import { FaFacebookF, FaInstagram, FaBandcamp } from "react-icons/fa";
import { RiSpotifyLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a
          href={"https://www.facebook.com/juansebastian.vassallo"}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />{" "}
        </a>

        <a
          href={"https://www.instagram.com/juanvassallo.arg/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href={"https://juanvassallo.bandcamp.com/"}
          target="_blank"
          rel="noreferrer"
        >
          <FaBandcamp />
        </a>
        <a
          href={"https://open.spotify.com/artist/5gVC35dknIoSGHUk4yRmR7"}
          target="_blank"
          rel="noreferrer"
        >
          <RiSpotifyLine />
        </a>
      </div>
      <p className="footText">© 2023 Juan Sebastian Vassallo</p>
    </div>
  );
}

export default Footer;
