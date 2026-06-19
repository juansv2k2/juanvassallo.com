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
      </div>
      <p className="footText">© 2026 Juan Sebastian Vassallo</p>
    </div>
  );
}

export default Footer;
