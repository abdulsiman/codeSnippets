import React from "react";
import beachImg from "/beach.jpeg";
import satImg from "/satellit.jpeg";
import hackImg from "/hacker.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Body() {
  useGSAP(() => {
    gsap.from("#body-container1", {
      scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 10%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
      scale: 0.8,
      y: 200,
      opacity: 0,
      duration: 0.5,
    });
    gsap.from("#body-container2", {
      scrollTrigger: {
        trigger: "#body-container2",
        scroller: "body",
        start: "top 80%",
        // markers: true,
        end: "top 40%",
        // markers: true,
        // end: "top 50%",
        // pin: true,
        scrub: 2,
      },
      scale: 0.8,
      x: 350,
      opacity: 0,
      duration: 0.5,
    });
    gsap.from("#body-container3", {
      scrollTrigger: {
        trigger: "#body-container3",
        scroller: "body",
        start: "top 80%",
        // markers: true,
        end: "top 40%",
        // pin: true,
        scrub: 2,
      },
      scale: 0.8,
      x: -350,
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div>
      <div className="body-container" id="body-container1">
        <div className="body-content1">
          <p className="content-heading">OUR MISSION</p>
          <h1>Coding On A Remote Island?</h1>
          <p id="para1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at
            vitae assumenda facilis dolores. Culpa facere similique dicta
            sapiente laudantium, id dolorem tempore dolor.
          </p>
          <button className="get-started">EXPLORE</button>
        </div>
        <div className="body-img1">
          <img src={beachImg} alt="image" />
        </div>
      </div>
      <div className="body-container" id="body-container2">
        <div className="body-img1">
          <img src={satImg} alt="image" />
        </div>
        <div className="body-content1">
          <p className="content-heading">OUR CAPABLITIES</p>
          <h1>Futuristic Innovation in Snippets.</h1>
          <p id="para1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at
            vitae assumenda facilis dolores. Culpa facere similique dicta
            sapiente laudantium, id dolorem tempore dolor.
          </p>
          <button className="get-started">LEARN MORE</button>
        </div>
      </div>
      <div className="body-container" id="body-container3">
        <div className="body-content1">
          <p className="content-heading">OUR PROMISE</p>
          <h1>SECURITY IS IMPORTANT!</h1>
          <p id="para1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit at
            vitae assumenda facilis dolores. Culpa facere similique dicta
            sapiente laudantium, id dolorem tempore dolor.
          </p>
          <button className="get-started">LEARN MORE</button>
        </div>
        <div className="body-img1">
          <img src={hackImg} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Body;
