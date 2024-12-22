import React, { useState } from "react";
import "./submenu.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <div>
      <div className="middalhd">
        <div className="submenu">
          <div className="logo">
            <a href="https://www.bluedigital.co.in/">
              <img
                id="dark-logo"
                src="https://www.bluedigital.co.in/files/uploads/blue_white.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="togl">
            <span
              style={{ cursor: "pointer" }}
              className="click"
              onClick={openNav}
            >
              &#9776;
            </span>
          </div>

          {/* Corrected className syntax */}
          <div id="myNav" className={`overlay ${isOpen ? "open" : ""}`}>
            <a className="header_img" href="https://www.bluedigital.co.in/">
              <img
                id="dark-logo"
                src="https://www.bluedigital.co.in/files/uploads/blue_white.png"
                alt="Logo"
              />
            </a>
            <button className="closebtn" onClick={closeNav}>
              <img
                src="https://www.bluedigital.co.in/files/uploads/noun-cross.png"
                alt="Close"
              />
            </button>

            <div className="overlay-content">
              <ul>
                <li>
                  <a href="https://www.bluedigital.co.in/marketing-services">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/technology-services">
                    Technology
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/design-services">
                    Design
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/training-services">
                    Training
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/consulting-services">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/data-analytics">
                    Data Analytics
                  </a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/about">About Us</a>
                </li>
                <li>
                  <a href="https://www.bluedigital.co.in/contact">Contact Us</a>
                </li>
              </ul>
              <div className="social">
                <a
                  href="https://www.linkedin.com/company/1159048/admin/feed/posts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
