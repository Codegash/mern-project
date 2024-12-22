import React, { useEffect } from "react";
//  // Import three.js (required dependency)

const section2 = () => {
  // useEffect(() => {
  //   VANTA.CLOUDS({
  //     el: "#cloudSlide",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 100.0,
  //     minWidth: 200.0,
  //     skyColor: 0x2d48cd,
  //   });
  // }, []);

  return (
    <section id="page-body">
      <div className="spacer spacer-big"></div>

      <div className="wrapper">
        {/* First Row */}
        <div className="clearfix column-section spaced-normal">
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/SEO1.gif"
            title="SEO"
            description="Enhance your website's visibility on search engines and improve organic traffic. Our SEO experts employ white-hat techniques to optimize your site, boost your rankings, and increase your online visibility."
          />
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/Social-media1.gif"
            title="Social Media Marketing"
            description="Engage, interact, and build strong relationships with your audience across various social media platforms. We create and implement social media strategies to boost brand awareness and drive customer engagement."
          />
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/Email.gif"
            title="Email Marketing"
            description="Nurture your leads and keep your customers informed with personalized, high-converting email campaigns. We design and execute email marketing strategies that foster customer loyalty and drive sales."
          />
        </div>

        {/* Second Row */}
        <div className="clearfix column-section spaced-normal">
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/PPC.gif"
            title="Pay-Per-Click(PPC)"
            description="Maximize your return on investment with data-driven, strategic PPC campaigns. We create and manage ad campaigns that target the right audience, ensuring your ad spend delivers results."
          />
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/content.gif"
            title="Content Marketing"
            description="Create valuable and relevant content that not only captures your audience's attention but also establishes your brand as an authority in your industry. Our content marketing strategies include blog posts, infographics, videos, and more."
          />
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/Online.gif"
            title="Online Advertising"
            description="Beyond PPC, we offer a range of online advertising services, including display advertising, remarketing, and video advertising to capture the attention of potential customers at different stages of the buying journey."
          />
        </div>

        {/* Third Row */}
        <div className="clearfix column-section spaced-normal">
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/Mobile-Marketing.gif"
            title="Mobile Marketing"
            description="With the rise of mobile device usage, we develop mobile-specific strategies to ensure that your business reaches users on their smartphones and tablets effectively."
          />
          <ServiceColumn
            imgSrc="https://www.bluedigital.co.in/files/uploads/icon/Influncer.gif"
            title="Influencer Marketing"
            description="Leverage the reach and influence of online personalities and influencers to connect with your target audience authentically and build brand credibility."
          />
        </div>

        <p className="serviceP">
          Our digital marketing services are fully customizable to meet your
          unique business needs. Whether you're a small startup or a large
          corporation, we're dedicated to helping you achieve your digital
          marketing goals and drive growth. Get in touch with us today to start
          your journey towards online success.
        </p>
      </div>

      <div className="spacer spacer-big"></div>

      {/* Vanta Clouds Section */}
      <div className="fullwidth-section text-dark clouds" id="cloudSlide">
        <div
          className="fullwidth-content"
          style={{ paddingTop: "100px", paddingBottom: "100px" }}
        >
          <div className="wrapper">
            <div className="clearfix column-section spaced-normal">
              <div className="column one-full last-col">
                <div className="owl-slidere content-sliders">
                  <blockquote className="align-center">
                    <p>
                      "In today's market, it's no longer about the best product;
                      it's about who tells the best story."
                    </p>
                    <p>
                      <cite>David Ogilvy</cite>
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer spacer-big"></div>

      {/* Contact Section */}
      <div className="wrapper-small">
        <div className="clearfix column-section spaced-normal">
          <div className="column one-full last-col">
            <h3 className="align-center" style={{ textAlign: "center" }}>
              Want to start a project?
            </h3>
            <p style={{ textAlign: "center" }}>
              <a
                href="https://www.bluedigital.co.in/contact"
                className="sr-button style-1 button-big"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="spacer spacer-big"></div>
    </section>
  );
};

const ServiceColumn = ({ imgSrc, title, description }) => (
  <div className="column one-third">
    <p style={{ textAlign: "center" }}>
      <img src={imgSrc} alt={title} className="service-gif" />
    </p>
    <h3 style={{ textAlign: "center" }}>{title}</h3>
    <p style={{ textAlign: "center" }}>{description}</p>
  </div>
);

export default section2;
