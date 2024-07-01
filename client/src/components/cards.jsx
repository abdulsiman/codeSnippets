import React from "react";
import { SlSpeedometer } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { MdNetworkWifi } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Cards() {
  useGSAP(() => {
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".cards-div",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        // markers: true,
        scrub: 2,
      },
      y: 100,
      opacity: 0,
      duration: 5,
      stagger: 3,
    });
  });

  return (
    <div>
      <div className="cards-div">
        <div className="card">
          <div className="card-logo-div">
            <SlSpeedometer size={45} color="#03e9f4" />
            <h4>AMAZING SPEED</h4>
          </div>
          <div className="card-logo-content">
            <p>
              <span>300</span>
              <span id="mbps">mbps</span>
            </p>
            <p>Compiling speed</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo-div">
            <BiSolidLike size={45} color="#03e9f4" />
            <h4>APPROVED</h4>
          </div>
          <div className="card-logo-content">
            <p>
              <span>4.9</span>
              <span id="mbps">⭐</span>
            </p>
            <p>Customer ratings</p>
          </div>
        </div>

        <div className="card">
          <div className="card-logo-div">
            <MdNetworkWifi size={45} color="#03e9f4" />
            <h4>NETWORK</h4>
          </div>
          <div className="card-logo-content">
            <p>
              <span>247</span>
            </p>
            <p>Services in all Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
