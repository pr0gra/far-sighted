"use client";
import cx from "classnames";
import styles from "./Carousel.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Expo, Quint } from "gsap"; // Assuming you have GSAP installed
import ImageTest from "../assets/images/heroDaria1.jpg";
import Image from "next/image";
interface Document {
  onmousewheel: ((this: Document, ev: Event) => any) | null;
}
export function Carousel() {
  const dragContainer = useRef(null);
  const spinContainer = useRef(null);
  const musicContainer = useRef(null);
  const groundRef = useRef(null);
  

  useEffect(() => {
   // You can change global variables here:
    var radius = 240; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 120; // width of images (unit: px)
    var imgHeight = 170; // height of images (unit: px)

    var bgMusicURL =
      "https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a";
    var bgMusicControls = true; // Show UI music control

    setTimeout(init, 1000);

    var odrag: any = dragContainer.current;
    var ospin: any = spinContainer.current;
    if(ospin === null){
      return
    }
    var aImg = ospin?.getElementsByTagName("img");
    var aVid = ospin?.getElementsByTagName("video");
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground:any = groundRef.current
    if(ground === null){
      return
    }
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    function init(delayTime:any) {
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

    function applyTranform(obj:any) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
    }

    function playSpin(yes:any) {
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

    // setup events
    document.onpointerdown = function (e) {
      if(odrag === null){
        return
      }
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
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

      this.onpointerup = function (e) {
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
    document.onmousewheel = function (e:any) {
      e = e || window.event;
      var d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };
  }, []);

  return (
    <>
      <div ref={dragContainer} className={styles["drag-container"]}>
        <div ref={spinContainer} className={styles["spin-container"]}>
          <Image src={ImageTest} alt="" />
          <Image src={ImageTest} alt="" />
          <Image src={ImageTest} alt="" />
          <Image src={ImageTest} alt="" />
          <Image src={ImageTest} alt="" />
          <Image src={ImageTest} alt="" />
        </div>
        <div ref={groundRef} className={styles["ground"]}></div>
      </div>
      <div ref={musicContainer} className={styles["music-container"]} id=""></div>
    </>
  );
}
