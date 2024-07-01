import React, { forwardRef } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { WiMeteor } from "react-icons/wi";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);
import mercuryImg from "/mercury.jpeg";
import venusImg from "/venus.png";
import earthImg from "/earth.png";
import marsImg from "/mars.png";
import jupiterImg from "/jupiter.png";
import saturnImg from "/saturn.png";
import cometImg from "/comet.png";
import { Timeline } from "gsap/gsap-core";

function Solar() {
  const timeline2 = gsap.timeline();
  const headingRef = useRef();
  const heroParaRef = useRef();
  const meteorRef = useRef();
  const mercuryRef = useRef();
  const venusRef = useRef();
  const earthRef = useRef();
  const marsRef = useRef();
  const jupiterRef = useRef();
  const saturnRef = useRef();
  const neptuneRef = useRef();
  useGSAP(() => {
    timeline2.from(headingRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 5.5,
      x: -60,
    });
    timeline2.from(heroParaRef.current, {
      opacity: 0,
      duration: 0.5,
      // scale: 0,
      // delay: 6,
      x: -100,
    });
    timeline2.from(".get-started", {
      opacity: 0,
      // delay: 6,
      duration: 0.5,
      y: 100,
    });
    timeline2.from(".solar-system", {
      opacity: 0,
      scale: 0,
      duration: 1,
      // scale: 0,
      // delay: 6.5,
      x: 500,
    });

    //** PLANETS:::: */

    gsap.to(mercuryRef.current, {
      motionPath: {
        path: ".mercuryPath",
        align: ".mercuryPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 2,
      repeat: -1,
      ease: "linear",
      // yoyo: 1,
    });
    gsap.to(venusRef.current, {
      motionPath: {
        path: ".venusPath",
        align: ".venusPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 2.5,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(earthRef.current, {
      motionPath: {
        path: ".earthPath",
        align: ".earthPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 3,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(marsRef.current, {
      motionPath: {
        path: ".marsPath",
        align: ".marsPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(jupiterRef.current, {
      motionPath: {
        path: ".jupiterPath",
        align: ".jupiterPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 7,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(saturnRef.current, {
      motionPath: {
        path: ".saturnPath",
        align: ".saturnPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 20,
      repeat: -1,
      ease: "linear",
    });
    gsap.from(meteorRef.current, {
      motionPath: {
        path: ".meteorPath",
        align: ".meteorPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        // start: 0.9,
      },
      duration: 200,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(neptuneRef.current, {
      motionPath: {
        path: ".meteorPath",
        align: ".meteorPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        // start: 0.9,
      },
      duration: 40,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <div>
      <div id="solar">
        <div className="hero">
          <h1 ref={headingRef}>
            Cosmic Snippets From <span>space.</span>
          </h1>
          <p ref={heroParaRef}>
            Speedcode is developing innovative solutions to provide
            high-efficiency code snippets for all programming languages in the
            world, so you can increase your efficiency as a devoloper.
          </p>
          {/* <p ref={heroParaRef}>
            LightSpeed is developing innovative solutions to provide low-cost
            hgh-speed internet to everywhere in the world, even for the most
            remote and secluded locations.
          </p> */}
          <button className="get-started">GET STARTED</button>
        </div>
        <div className="solar-system">
          <svg id="solar-system-svg">
            <path
              className="mercuryPath"
              d="M 266 259 A 20 20 0 1 1 336 259 A 20 20 0 1 1 266 259 "
              stroke="aqua"
              opacity={0.4}
              fill="transparent"
            />
            <path
              className="venusPath"
              d="M 252 259 A 50 50 0 1 1 352 259 A 50 50 0 1 1 252 259 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              className="earthPath"
              d="M 232 259 A 70 70 0 1 1 372 259 A 70 70 0 1 1 232 259 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              className="marsPath"
              d="M 202 259 A 100 100 0 1 1 402 259 A 100 100 0 1 1 202 259 "
              //M 230 260: Move to the starting point (230, 260).
              // A 100 100 0 1 1 630 260: Draw the first arc with a radius of 100 units, ending at (630, 260).
              // A 100 100 0 1 1 230 260: Draw the second arc with the same radius, ending back at (230, 260).
              // Z: Close the path.
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              className="jupiterPath"
              d="M 128 259 A 160 160 0 1 1 478 259 A 160 160 0 1 1 128 259 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              className="saturnPath"
              d="M 75 259 A 230 230 0 1 1 535 259 A 230 230 0 1 1 75 259 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              d="M 35 259 A 260 260 0 1 1 565 259 A 260 260 0 1 1 35 259 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
            <path
              className="meteorPath"
              d="M 105 39 A 200 80 -20 1 1 492 399 A 200 80 -20 1 1 105 39 "
              stroke="aqua"
              fill="transparent"
              opacity={0.4}
            />
          </svg>
          <div ref={meteorRef} className="meteor-div">
            {/* <WiMeteor size={20} id="meteor" /> */}
            <img src={cometImg} className="comet" />
          </div>
          {/* <div className="sun"></div> */}
          <div className="mercury" ref={mercuryRef}>
            <img src={mercuryImg} className="planet-img" alt="mer" />
          </div>
          <div className="venus" ref={venusRef}>
            <img src={venusImg} className="planet-img" alt="venus" />
          </div>
          <div className="earth" ref={earthRef}>
            <img src={earthImg} className="planet-img" alt="earth" />
          </div>
          <div className="mars" ref={marsRef}>
            <img src={marsImg} className="planet-img" alt="earth" />
          </div>
          <div className="jupiter" ref={jupiterRef}>
            <img src={jupiterImg} className="planet-img" alt="earth" />
          </div>
          <div className="saturn" ref={saturnRef}>
            <img src={saturnImg} className="planet-img" alt="earth" />
          </div>
          <div className="neptune" ref={neptuneRef}></div>
        </div>
      </div>
    </div>
  );
}

export default Solar;
