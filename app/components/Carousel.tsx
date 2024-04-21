"use client";
import cx from "classnames";
import styles from "./Carousel.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Expo, Quint } from "gsap"; // Assuming you have GSAP installed
import Image from "next/image";

import CarouselCard1 from "../assets/images/carouselCard1.svg";
import CarouselCard2 from "../assets/images/carouselCard2.svg";
import CarouselCard3 from "../assets/images/carouselCard3.svg";
import CarouselCard4 from "../assets/images/carouselCard4.svg";
import CarouselCard5 from "../assets/images/carouselCard5.svg";
import CarouselCard6 from "../assets/images/carouselCard6.svg";
import CarouselCard7 from "../assets/images/carouselCard7.svg";
import CarouselCard8 from "../assets/images/carouselCard8.svg";
import CarouselCard9 from "../assets/images/carouselCard9.svg";
import CarouselCard10 from "../assets/images/carouselCard10.svg";
import CarouselCard11 from "../assets/images/carouselCard11.svg";
import CarouselCard12 from "../assets/images/carouselCard12.svg";
import CarouselCard13 from "../assets/images/carouselCard13.svg";
import CarouselCard14 from "../assets/images/carouselCard14.svg";
import CarouselCard15 from "../assets/images/carouselCard15.svg";

interface Document {
  onmousewheel: ((this: Document, ev: Event) => any) | null;
}
export function Carousel() {
  const dragContainer: any = useRef(null);
  const spinContainer = useRef(null);
  const musicContainer = useRef(null);
  const groundRef = useRef(null);
  const [inIntersection, setInIntersection] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    if (!dragContainer) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        setInIntersection(entries[0].isIntersecting);
      },
      {
        threshold: 0.8,
      }
    );
    observer.observe(dragContainer.current);
  }, [dragContainer]);
  useEffect(() => {
    if (!inIntersection) {
      return;
    }
    // You can change global variables here:
    var radius = isMobile ? 180 : 440; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = isMobile ? 110 : 250; // width of images (unit: px)
    var imgHeight = isMobile ? 60 : 180; // height of images (unit: px)

    var bgMusicURL =
      "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    var bgMusicControls = true; // Show UI music control

    setTimeout(init, 1000);

    var odrag: any = dragContainer.current;
    var ospin: any = spinContainer.current;
    if (ospin === null) {
      return;
    }
    var aImg = ospin?.getElementsByTagName("img");
    var aVid = ospin?.getElementsByTagName("video");
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground: any = groundRef.current;
    if (ground === null) {
      return;
    }
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime: any) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform =
          "rotateY(" +
          i * (360 / aEle.length) +
          "deg) translateZ(" +
          radius +
          "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTranform(obj: any) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes: any) {
      ospin.style.animationPlayState = yes ? "running" : "paused";
    }

    var sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }
    if (dragContainer.current === null) {
      return;
    }
    // setup events
    dragContainer.current.onpointerdown = function (e: any) {
      if (odrag === null) {
        return;
      }
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e: any) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e: any) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    //   dragContainer.current.onmousewheel = function (e: any) {
    //     e = e || window.event;
    //     var d = e.wheelDelta / 20 || -e.detail;
    //     radius += d;
    //     init(1);
    //   };
  }, [inIntersection]);

  return (
    <>
      <div ref={dragContainer} className={styles["drag-container"]}>
        <div ref={spinContainer} className={styles["spin-container"]}>
          <Image src={CarouselCard1} alt="" />
          <Image src={CarouselCard2} alt="" />
          <Image src={CarouselCard3} alt="" />
          <Image src={CarouselCard4} alt="" />
          <Image src={CarouselCard5} alt="" />
          <Image src={CarouselCard6} alt="" />
          <Image src={CarouselCard7} alt="" />
          <Image src={CarouselCard8} alt="" />
          <Image src={CarouselCard9} alt="" />
          <Image src={CarouselCard10} alt="" />
          {/* <Image src={CarouselCard11} alt="" />
          <Image src={CarouselCard12} alt="" />
          <Image src={CarouselCard13} alt="" />
          <Image src={CarouselCard14} alt="" />
          <Image src={CarouselCard15} alt="" /> */}
        </div>
        <div ref={groundRef} className={styles["ground"]}></div>
      </div>
      <div
        ref={musicContainer}
        className={styles["music-container"]}
        id=""
      ></div>
    </>
  );
}
