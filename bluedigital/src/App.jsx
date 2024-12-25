import React from "react";
import Navbar from "./components/submenu/submenu";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import "./App.css";
const App = () => {
  return (
    <>
      <body>
        {/* <!-- PAGE LOADER --> */}
        <div id="page-loader" className="pulsing">
          <div className="loader-name">
            {/* <img
              src="files/uploads/blue.png"
              srcSet="https://www.bluedigital.co.in/files/uploads/blue.png 1x, https://www.bluedigital.co.in/files/uploads/blue.png 2x"
              alt="Loader Logo"
            /> */}
          </div>
          <div className="loader-circle">
            {/* <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 253.4 253.4"
              style="enable-background:new 0 0 253.4 253.4;"
              xmlSpace="preserve"
            >
              <circle cx="126.7" cy="126.7" r="124.2" />
            </svg> */}
          </div>
        </div>
        {/* <!-- PAGE CONTENT --> */}
        <div id="page-content">
          <header id="topheader" style={{ display: "none" }}>
            <div className="clearfix header-inner">
              <div className="submenu">
                <div id="logo">
                  <a href="index.html">
                    {/* <img
                      id="dark-logo"
                      src="files/uploads/blue_white.png"
                      alt=""
                    /> */}
                  </a>
                </div>
                <div className="togl">
                  <span
                    style={{ cursor: "pointer" }}
                    className="click"
                    onClick={() => openNav()}
                  >
                    &#9776;
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div id="middalhd">
            <div className="submenu">
              <div id="logo">
                <a href="index.html">
                  {/* <img
                    id="dark-logo"
                    src="files/uploads/blue_white.png"
                    alt=""
                  /> */}
                </a>
              </div>
              <div className="togl">
                <span
                  style={{ cursor: "pointer" }}
                  className="click"
                  onClick={() => openNav()}
                >
                  &#9776;
                </span>
              </div>
              <div id="myNav" className="overlay">
                <a href="#" className="header_img">
                  {/* <img
                    id="dark-logo"
                    src="files/uploads/blue_white.png"
                    alt=""
                  /> */}
                </a>
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={() => closeNav()}
                >
                  {/* <img src="files/uploads/noun-cross.png" alt="" /> */}
                </a>

                <div className="overlay-content" id="nID">
                  <ul className="m-0 list-unstyled">
                    <li>
                      <a href="marketing-services.html">Marketing</a>
                    </li>
                    <li>
                      <a href="technology-services.html">Technology</a>
                    </li>
                    <li>
                      <a href="design-services.html">Design</a>
                    </li>
                    <li>
                      <a href="training-services.html">Training</a>
                    </li>
                    <li>
                      <a href="consulting-services.html">Consulting</a>
                    </li>
                    <li>
                      <a href="data-analytics.html">Data Analytics</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                  <div className="socail">
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

          <div className="videio-bg">
            <div
              className="video-wrapper img_section"
              onClick={() => playVideo()}
            >
              {/* <img src="files/uploads/cover2.jpg" alt="Video Thumbnail" /> */}
            </div>

            <div className="video-wrapper vdo_section">
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                id="video"
              >
                <source src="files/video/Blue-story.mp4" type="video/mp4" />
                <source src="files/video/Blue-story.mp4" type="video/ogg" />
              </video>
            </div>
          </div>
        </div>

        {/* <!-- PAGEBODY --> */}
        <section id="page-body">
          <div
            id="smartscroll"
            className="smartscroll-grid portfolio-container portfolio-animation"
            data-columns="3"
          >
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/Click2-Confirm/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img
                    src="files/uploads/Arkaenergy/Click2COVER2.jpg"
                    alt="SEO"
                  /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/Arkaenergy-AB-Sweden/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/Arkaenergy/Cover2.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/IIT-Abu-Dhabi/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/Educanada/dubai.png" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a href="Case-Study/philips/index.html" className="thumb-hover">
                  {/* <img src="files/uploads/portfolio-home/1.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/westford/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/portfolio-home/2.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/all-india-radio/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/portfolio-home/3.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/online-education/index.html"
                  className="thumb-hover text-dark"
                >
                  {/* <img src="files/uploads/portfolio-home/4.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/max-skillfirst/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/portfolio-home/5.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/ISB-Business-Plan-Submission/index.html"
                  className="thumb-hover"
                >
                  <img src="files/uploads/portfolio-home/6.jpg" alt="SEO" />
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/explainer-videos/index.html"
                  className="thumb-hover text-light"
                >
                  {/* <img src="files/uploads/portfolio-home/7.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>

            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/documentary-and-training-videos/index.html"
                  className="thumb-hover"
                >
                  {/* <img src="files/uploads/portfolio-home/8.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/2D-3D-animation-videos/index.html"
                  className="thumb-hover"
                >
                  {/* <img src="files/uploads/portfolio-home/8a.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/other-conceptual-videos/index.html"
                  className="thumb-hover"
                >
                  {/* <img src="files/uploads/portfolio-home/8b.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/tv-and-web-commercials/index.html"
                  className="thumb-hover"
                >
                  {/* <img src="files/uploads/portfolio-home/8c.jpg" alt="SEO" /> */}
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/National-Geographic-Samsung-Mobile-Launch/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img src="files/uploads/portfolio-home/9.jpg" alt="SEO" /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/GLEN-360-Digital-Marketing/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img src="files/uploads/portfolio-home/10.jpg" alt="SEO" /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
            {/* <!--  --> */}
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/EDU-Canada-MBA/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img src="files/uploads/portfolio-home/11.jpg" alt="SEO" /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
            {/* <!-- Case-Study/Shiv-Nadar-School-Teachers-Recruitment-Campaign --> */}
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                <a
                  href="Case-Study/Western-University/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img
                      src="files/uploads/portfolio-home/western.png"
                      alt="SEO"
                    /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                {/* <!--  --> */}
                <a
                  href="Case-Study/Vedic-Cosmeceuticals/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img
                      src="files/uploads/portfolio-home/vedic.png"
                      alt="SEO"
                    /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
            <div className="smartscroll-item portfolio-item portfolio-smart-item">
              <div className="portfolio-item-inner item-inner">
                {/* <!-- Case-Study/Crown-Rice-Social-Awareness-Campaign --> */}
                <a
                  href="Case-Study/Anonet/index.html"
                  className="thumb-hover text-light"
                >
                  <div className="overlay-media">
                    {/* <img
                      src="files/uploads/portfolio-home/anonet.png"
                      alt="SEO"
                    /> */}
                  </div>
                  <div className="overlay-caption bottom align-left"></div>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- END .smart-scroll --> */}
        </section>
        {/* <!-- PAGEBODY --> */}

        {/* <!-- FOOTER --> */}
        <div className="loader" style={{ display: "none" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden" style={{ textAlign: "center" }}>
              {/* <img src="files/video/loader.gif" style="width:25%;" /> */}
            </span>
          </div>
        </div>
        {/* <style type="text/css">
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      span.pdf-error {
        color: red;
        font-weight: 600;
      }

      span.pdf-success {
        color: green;
        font-weight: 600;
      }

      .pdf-error {
        color: red;
        font-weight: 600;
      }

      .pdf-success {
        color: green;
        font-weight: 600;
      }

      a.nav_link.event.active {
        color: #a50b02;
        font-weight: 600;
      }

      a.nav_link.active {
        color: #a50b02;
        font-weight: 600;
      }

      span.visually-hidden {
        margin-left: 35%;
        margin-right: 35%
      }
      
    </style> */}
        <div className="loader" style={{ display: "none" }}>
          <div className="spinner-border text-primary" role="status">
            {/* <span className="visually-hidden" style="text-align: center;"> */}
            {/* <img src="files/video/loader.gif" style="width:25%;" /> */}
            {/* </span> */}
          </div>
        </div>
        {/* <style type="text/css">
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      span.pdf-error {
        color: red;
        font-weight: 600;
      }

      span.pdf-success {
        color: green;
        font-weight: 600;
      }

      .pdf-error {
        color: red;
        font-weight: 600;
      }

      .pdf-success {
        color: green;
        font-weight: 600;
      }

      a.nav_link.event.active {
        color: #a50b02;
        font-weight: 600;
      }

      a.nav_link.active {
        color: #a50b02;
        font-weight: 600;
      }

      span.visually-hidden {
        margin-left: 35%;
        margin-right: 35%
      }
      
    </style> */}
        <footer id="footer">
          <div className="footer-inner">
            <div className="clearfix column-section">
              <div className="column one-third">
                <div className="widget widget_text">
                  <p>
                    {/* <img
                      src="files/uploads/Untitled-2.svg"
                      srcSet="https://www.bluedigital.co.in/files/uploads/Untitled-2.svg 1x, https://www.bluedigital.co.in/files/uploads/Untitled-2.svg 2x"
                      alt="Logo Dark"
                      style=""
                    /> */}
                  </p>
                  {/* <!-- <p className="cp">Blue is an uncommon, aggressive, calculative,<br> and high-in-demand digital solutions provider.</p> --> */}
                </div>
              </div>
              <div className="column one-third ftext">
                <div className="widget">
                  <p
                    className="cp tcp"
                    style={{
                      color: "black",
                      fontWeight: 540,
                      textAlign: "center",
                    }}
                  >
                    Blue is an uncommon, aggressive, calculative, <br />
                    and high-in-demand digital solutions provider.
                  </p>
                </div>
              </div>
              <div className="column one-third last-col">
                <div className="widget widget_dribbble">
                  <div
                    className="dribbble-widget col-4 f4"
                    data-user="Aditya-Chhatrala"
                    data-count="8"
                  >
                    <p
                      className="align-right cp"
                      style={{ color: "black", fontWeight: 540 }}
                    >
                      © 2024 Blue Digital Media
                    </p>
                    <p style={{ marginTop: "0px" }}>
                      {" "}
                      <a href="mailto:nimesh@bluedigital.co.in">
                        <i className="fa fa-envelope"></i>{" "}
                        <strong>nimesh@bluedigital.co.in</strong>
                      </a>{" "}
                      |{" "}
                      <a href="tel:+91-9319542893">
                        <i className="fa fa-phone"></i>{" "}
                        <strong>+91-9319542893</strong>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a id="backtotop" href="#"></a>
        </footer>
        {/* <!-- PAGE CONTENT End --> */}
        {/*  <style>
       #cloudSlide {
        backgroundColor: 0xffffff;
        skyColor:0x2d48cd;
        cloudColor:0xadc1de;
        cloudShadowColor:0x183550;
        sunColor: 0xff9919;
        sunGlareColor: 0xff6633;
        sunlightColor: 0xff9933;
        speed;1;
      } 
    </style> */}
        {/* scripts */}
      </body>
    </>
  );
};

export default App;
