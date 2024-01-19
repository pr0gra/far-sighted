import cx from "classnames";
import styles from "./Carousel.module.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TweenMax, Expo, Quint } from "gsap"; // Assuming you have GSAP installed
import $ from 'jquery';

export function Carousel() {
  const contentContainer = useRef(null);
  const carouselItem = useRef(null);
  const carouselItemInner = useRef(null);
  const carouselContainer = useRef(null)

//   useEffect(() => {
//     // set and cache variables
// 		var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
// 		var mouseX = 0;
// 		var mouseY = 0;
// 		var mouseZ = 0;
// 		var addX = 0;
		
		
// 		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// 		// no need to create my own :)
// 		var fps_counter = {
			
// 			tick: function () 
// 			{
// 				// this has to clone the array every tick so that
// 				// separate instances won't share state 
// 				this.times = this.times.concat(+new Date());
// 				var seconds, times = this.times;
        
// 				if (times.length > this.span + 1) 
// 				{
// 					times.shift(); // ditch the oldest time
// 					seconds = (times[times.length - 1] - times[0]) / 1000;
// 					return Math.round(this.span / seconds);
// 				} 
// 				else return null;
// 			},
 
// 			times: [],
// 			span: 20
// 		};
// 		var counter = Object.create(fps_counter);
		
		
		
// 		$(document).ready( init )
		
// 		function init()
// 		{
// 			w = $(window);
// 			container = $( '#contentContainer' );
// 			carousel = $( '#carouselContainer' );
// 			item = $( '.carouselItem' );
// 			itemLength = $( '.carouselItem' ).length;
// 			fps = $('#fps');
// 			rY = 360 / itemLength;
// 			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );
			
// 			// set container 3d props
// 			TweenMax.set(container, {perspective:600})
// 			TweenMax.set(carousel, {z:-(radius)})
			
// 			// create carousel item props
			
// 			for ( var i = 0; i < itemLength; i++ )
// 			{
// 				var $item = item.eq(i);
// 				var $block = $item.find('.carouselItemInner');
				
//         //thanks @chrisgannon!        
//         TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});
				
// 				animateIn( $item, $block )						
// 			}
			
// 			// set mouse x and y props and looper ticker
// 			window.addEventListener( "mousemove", onMouseMove, false );
// 			ticker = setInterval( looper, 1000/60 );			
// 		}
		
// 		function animateIn( $item, $block )
// 		{
// 			var $nrX = 360 * getRandomInt(2);
// 			var $nrY = 360 * getRandomInt(2);
				
// 			var $nx = -(2000) + getRandomInt( 4000 )
// 			var $ny = -(2000) + getRandomInt( 4000 )
// 			var $nz = -4000 +  getRandomInt( 4000 )
				
// 			var $s = 1.5 + (getRandomInt( 10 ) * .1)
// 			var $d = 1 - (getRandomInt( 8 ) * .1)
			
// 			TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
// 			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
// 			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
// 			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
// 		}
		
// 		function onMouseMove(event)
// 		{
// 			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
// 			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
// 			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
// 		}
		
// 		// loops and sets the carousel 3d properties
// 		function looper()
// 		{
// 			addX += mouseX
// 			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
// 			TweenMax.set( carousel, {z:mouseZ } )
// 			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )	
// 		}
		
// 		function getRandomInt( $n )
// 		{
// 			return Math.floor((Math.random()*$n)+1);	
// 		}
// }, [])


//   const [mouseX, setMouseX] = useState(0);
//   const [mouseY, setMouseY] = useState(0);
//   const [mouseZ, setMouseZ] = useState(0);
//   const [addX, setAddX] = useState(0);

//   useEffect(() => {
//     const w = window;
//     const container = document.getElementById("contentContainer");
//     const carousel = document.getElementById("carouselContainer");
//     const items = document.querySelectorAll(".carouselItem");
//     const itemLength = items.length;
//     let radius = 0;

//     const init = () => {
//       const rY = 360 / itemLength;
//       radius = Math.round(250 / Math.tan(Math.PI / itemLength));

//       gsap.set(container, { perspective: 600 });
//       gsap.set(carousel, { z: -radius });

//       items.forEach((item, i) => {
//         const block = item.querySelector(".carouselItemInner");

//         gsap.set(item, {
//           rotationY: rY * i,
//           z: radius,
//           transformOrigin: `50% 50% ${-radius}px`,
//         });

//         animateIn(item, block);
//       });

//       w.addEventListener("mousemove", onMouseMove, false);
//       setInterval(looper, 1000 / 60);
//     };

//     const animateIn = (item, block) => {
//       const nrX = 360 * getRandomInt(2);
//       const nrY = 360 * getRandomInt(2);
//       const nx = -2000 + getRandomInt(4000);
//       const ny = -2000 + getRandomInt(4000);
//       const nz = -4000 + getRandomInt(4000);
//       const s = 1.5 + getRandomInt(10) * 0.1;
//       const d = 1 - getRandomInt(8) * 0.1;

//       gsap.set(item, { autoAlpha: 1, delay: d });
//       gsap.set(block, {
//         z: nz,
//         rotationY: nrY,
//         rotationX: nrX,
//         x: nx,
//         y: ny,
//         autoAlpha: 0,
//       });
//       gsap.to(block, s, {
//         delay: d,
//         rotationY: 0,
//         rotationX: 0,
//         z: 0,
//         ease: Expo.easeInOut,
//       });
//       gsap.to(block, s - 0.5, {
//         delay: d,
//         x: 0,
//         y: 0,
//         autoAlpha: 1,
//         ease: Expo.easeInOut,
//       });
//     };

//     const onMouseMove = (event) => {
//       setMouseX(-(w.innerWidth * 0.5 - event.pageX) * 0.0025);
//       setMouseY(-(w.innerHeight * 0.5 - event.pageY) * 0.01);
//       setMouseZ(-radius - (Math.abs(w.innerHeight * 0.5 - event.pageY) - 200));
//     };

//     const looper = () => {
//       setAddX((prevAddX) => prevAddX + mouseX);
//       gsap.to(carousel, 1, {
//         rotationY: addX,
//         rotationX: mouseY,
//         ease: Quint.easeOut,
//       });
//       gsap.set(carousel, { z: mouseZ });
//       // Assuming you have a state variable to store the framerate
//       // setFps(`Framerate: ${counter.tick()}/60 FPS`);
//     };

//     const getRandomInt = (n) => {
//       return Math.floor(Math.random() * n + 1);
//     };

//     init();

//     // Cleanup function
//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       clearInterval(looper);
//     };
//   }, [addX, mouseX, mouseY, mouseZ]);

  return (
    <div ref={contentContainer} id="contentContainer" className={cx(styles.contentContainer, styles.trans3d)}>
      <section
        ref={carouselContainer}
        id="carouselContainer"
        className={cx(styles.carouselContainer, styles.trans3d)}
      >
        <figure
          ref={carouselItem}
          id="item1"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            1
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item2"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            2
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item3"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            3
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item4"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            4
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item5"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            5
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item6"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            6
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item7"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            7
          </div>
        </figure>
        <figure
          ref={carouselItem}
          id="item8"
          className={cx(styles.carouselItem, styles.trans3d)}
        >
          <div
            ref={carouselItemInner}
            className={cx(styles.carouselItemInner, styles.trans3d)}
          >
            8
          </div>
        </figure>
      </section>
    </div>
  );
}
