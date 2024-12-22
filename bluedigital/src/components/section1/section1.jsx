import React, { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min"; // Import the specific Vanta effect
import * as THREE from "three"; // Vanta requires THREE.js

const Section1 = () => {
  const heroRef = useRef(null); // Create a reference for the hero section

  useEffect(() => {
    let vantaEffect;

    // Initialize the Vanta effect
    if (heroRef.current) {
      vantaEffect = WAVES({
        el: heroRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        THREE: THREE, // Pass the THREE.js instance
      });
    }

    // Cleanup the Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="hero-big text-dark fullwidth-section"
      ref={heroRef} // Attach the ref to the section
    >
      <div
        id="page-title"
        className="wrapper title-center align-left"
        style={{ zIndex: 1 }}
      >
        <h1 style={{ color: "#f0f0f0" }}>
          Marketing{" "}
          <strong>
            <em className="emt">Services.</em>
          </strong>
        </h1>
        <div className="spacer-small"></div>
        <h5 className="title-alt" style={{ color: "#f0f0f0" }}>
          In today's digital age, having a strong online presence is essential
          for businesses looking to thrive and grow. Our comprehensive digital
          marketing services are designed to help you harness the power of the
          digital landscape, connect with your target audience, and achieve your
          business goals.
        </h5>
      </div>
    </section>
  );
};

export default Section1;
