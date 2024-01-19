"use client";
import Image from "next/image";
import HeroAnimatedLogo from "./assets/images/hero-animated-logo.gif";
import Hero1 from "./assets/images/heroDaria1.jpg";
import Hero2 from "./assets/images/heroAnna2.jpg";
import Hero3 from "./assets/images/heroAnastasia3.jpg";
import Hero4 from "./assets/images/heroMaria5.jpg";
import SliderCover1 from "./assets/images/social-platform-1.svg";
import SliderImage1 from "./assets/images/social-platform-2.svg";
import SliderCover2 from "./assets/images/design-intelligence-1.svg";
import SliderImage2 from "./assets/images/design-intelligence-2.svg";
import SliderCover3 from "./assets/images/instruments-1.svg";
import SliderImage3 from "./assets/images/instruments-2.svg";
import SliderCover4 from "./assets/images/conversation-1.svg";
import SliderImage4 from "./assets/images/conversation-2.svg";
import SliderCover5 from "./assets/images/result-1.svg";
import SliderImage5 from "./assets/images/result-2.svg";

import { useEffect, useState } from "react";
import { ModelDesignWorkingElement } from "./components/ModelDesignWorkingElement";
import { Carousel } from "./components/Carousel";

interface BackgroundsList {
  img: any;
  name: string;
  test: string;
}



const modelDesignAgentWorkingImages = [
  {
    cover: SliderCover1,
    image: SliderImage1,
  },
  {
    cover: SliderCover2,
    image: SliderImage2,
  },
  {
    cover: SliderCover3,
    image: SliderImage3,
  },
  {
    cover: SliderCover4,
    image: SliderImage4,
  },
  {
    cover: SliderCover5,
    image: SliderImage5,
  },
];

export default function Home() {
  const [currentHero, setCurrentHero] = useState({
    img: Hero1,
    name: "Дарья менеджер проекта",
    text: "// Миссия — инициировать уникальные дизайн-проекты с проактивной позицией положительного социального воздействия",
  });

  useEffect(() => {
    let count = 1;
    const backgroundsList = [
      {
        img: Hero1,
        name: "Дарья менеджер проекта",
        text: "// Миссия — инициировать уникальные дизайн-проекты с проактивной позицией положительного социального воздействия",
      },
      {
        img: Hero2,
        name: "Анна старший дизайнер",
        text: "// Концепция — Привлекая внимание общественности и выявляя актуальные проектные проблемы, предлагать заказчикам готовые системы работы/дизайн-концепции",
      },

      {
        img: Hero3,
        name: "Анастасия дизайн-разведчик",
        text: "// К нам можно обращаться за креативными идеями решения проблемы, где уже кажется нет способов что-то придумать",
      },
      {
        img: Hero4,
        name: "Мария дизайнер",
        text: "// Миссия — инициировать уникальные дизайн-проекты с проактивной позицией положительного социального воздействия",
      },
    ];
    setInterval(() => {
      if (count >= 4) {
        count = 0;
      }
      count++;
      setCurrentHero(() => backgroundsList[count - 1]);
    }, 6000);
  }, []);

  return (
    <main className="bg-black">
      <section
        className="h-[758px] px-16 bg-cover"
        style={{ backgroundImage: `url(${currentHero?.img?.src})` }}
      >
        <header className="pt-11">
          <nav>
            <ul className="list-none gap-9 flex justify-end">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="26"
                  viewBox="0 0 55 26"
                  fill="none"
                >
                  <path
                    d="M0 0.162109H9.34744V3.22854H3.5701V20.8865H9.34744V23.9529H0V0.162109Z"
                    fill="white"
                  />
                  <path
                    d="M11.2441 23.5834L23.7765 0L26.7837 1.45174L14.2661 25.0351L11.2441 23.5834Z"
                    fill="white"
                  />
                  <path
                    d="M28.1318 23.5834L40.6642 0L43.6714 1.45174L31.139 25.0351L28.1318 23.5834Z"
                    fill="white"
                  />
                  <path
                    d="M45.4629 23.9677V20.9013H51.2402V3.24336H45.4629V0.162109H54.8103V23.9677H45.4629Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                >
                  <path
                    d="M29.7872 24H24.3241L25.0336 8.84211H29.0777L29.7872 24ZM30 2.5985C30 3.39248 29.7399 4.01805 29.2196 4.47519C28.6756 4.95639 27.9425 5.19699 27.0202 5.19699C26.1215 5.19699 25.412 4.95639 24.8917 4.47519C24.3714 4.01805 24.1113 3.39248 24.1113 2.5985C24.1113 1.80451 24.3714 1.16692 24.8917 0.685715C25.412 0.228573 26.1215 0 27.0202 0C27.9425 0 28.6756 0.228573 29.2196 0.685715C29.7399 1.16692 30 1.80451 30 2.5985Z"
                    fill="white"
                  />
                  <path
                    d="M17.7315 24H12.2685L12.978 8.84211H17.022L17.7315 24ZM17.9444 2.5985C17.9444 3.39248 17.6842 4.01805 17.1639 4.47519C16.62 4.95639 15.8869 5.19699 14.9645 5.19699C14.0658 5.19699 13.3564 4.95639 12.8361 4.47519C12.3158 4.01805 12.0557 3.39248 12.0557 2.5985C12.0557 1.80451 12.3158 1.16692 12.8361 0.685715C13.3564 0.228573 14.0658 0 14.9645 0C15.8869 0 16.62 0.228573 17.1639 0.685715C17.6842 1.16692 17.9444 1.80451 17.9444 2.5985Z"
                    fill="white"
                  />
                  <path
                    d="M5.67586 24H0.212845L0.922327 8.84211H4.96637L5.67586 24ZM5.8887 2.5985C5.8887 3.39248 5.62856 4.01805 5.10827 4.47519C4.56433 4.95639 3.8312 5.19699 2.90888 5.19699C2.0102 5.19699 1.30072 4.95639 0.780432 4.47519C0.260143 4.01805 0 3.39248 0 2.5985C0 1.80451 0.260143 1.16692 0.780432 0.685715C1.30072 0.228573 2.0102 0 2.90888 0C3.8312 0 4.56433 0.228573 5.10827 0.685715C5.62856 1.16692 5.8887 1.80451 5.8887 2.5985Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="24"
                  viewBox="0 0 31 24"
                  fill="none"
                >
                  <path
                    d="M6.13995 21.05L5.5019 21.7965L5.12534 22.2389L4.75924 22.6629L4.36177 23.1237L4.01659 23.52L3.76555 23.8149L3.5982 23.9992H0.721734H0L0.44978 23.4831L0.700813 23.1882C0.89955 22.9486 0.972773 22.8748 0.972773 22.8748L1.16105 22.6536L1.34933 22.4324L1.61082 22.1283L2.10244 21.5661L2.26979 21.3634L3.47268 19.9717L3.68188 19.7321L5.62742 17.4648H9.24653"
                    fill="white"
                  />
                  <path
                    d="M30.8217 13.8789H0.0136719V17.704H30.8217V13.8789Z"
                    fill="white"
                  />
                  <path
                    d="M30.8217 0H0.0136719V3.82511H30.8217V0Z"
                    fill="white"
                  />
                  <path
                    d="M30.8228 7.08398H12.1943V10.9091H30.8228V7.08398Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="25"
                  viewBox="0 0 11 25"
                  fill="none"
                >
                  <path
                    d="M4.86324 8.54313C5.59922 7.87931 5.97442 7.17219 5.97442 6.42178C5.97442 5.61365 5.4982 4.96425 4.56019 4.44474C3.60774 3.92522 2.09249 3.66547 0 3.6366L0.173172 0C3.27583 0.014431 5.71466 0.562808 7.48967 1.6307C9.26468 2.69859 10.1594 4.18498 10.1594 6.1043C10.1594 7.3165 9.76977 8.39882 8.97606 9.35127C8.18236 10.3037 7.30207 11.083 6.30633 11.6747C5.32503 12.2663 4.12726 12.9013 2.72745 13.5507L1.50082 10.7944C3.00164 9.95737 4.11283 9.20696 4.86324 8.54313ZM1.83273 20.3044C2.2368 19.9003 2.82847 19.6983 3.57888 19.6983C4.286 19.6983 4.84881 19.9003 5.2673 20.3044C5.67137 20.7084 5.88784 21.2568 5.88784 21.9495C5.88784 22.6278 5.6858 23.1617 5.2673 23.5658C4.84881 23.9698 4.30043 24.1719 3.57888 24.1719C2.8429 24.1719 2.28009 23.9698 1.84716 23.5658C1.42867 23.1617 1.2122 22.6278 1.2122 21.9495C1.22663 21.2568 1.42867 20.7084 1.83273 20.3044Z"
                    fill="white"
                  />
                  <path
                    d="M6.89809 13.248H2.72754V16.394H6.89809V13.248Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                >
                  <path
                    d="M20.7558 0L14.8837 0.0434783L0 17.0725H5.84302L20.7558 0Z"
                    fill="white"
                  />
                  <path
                    d="M26 6.92773L20.1279 6.95672L5.24414 24.0002H11.0872L26 6.92773Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </header>
        <Image src={HeroAnimatedLogo} alt="Дальновидно" />
        <div className="pb-20 grid grid-cols-[auto_744px] items-center justify-between">
          <div className="row-span-2">
            <p>{currentHero.name}</p>
          </div>
          <div className="flex border-t-2 border-white justify-between mb-6">
            <p>22/05/2022 вс</p>
            <p>дизайн-агентство инициатив</p>
          </div>
          <div>
            <p className="text-right">{currentHero.text}</p>
          </div>
        </div>
      </section>

      <section className="pb-[227px] pt-[100px]">
         <p className="pl-[215px] mb-[115px]">
          {`// Модель работы агентства 
          дизайн-инициатив`}
        </p>
        <div className="overflow-x-auto flex gap-[93px]  pl-[85px]">
          {modelDesignAgentWorkingImages.map((sliderElem, id) => {
            return (
              <ModelDesignWorkingElement key={id} sliderElem={sliderElem} />
            );
          })}
        </div>
      </section>
      <div className="flex gap-[32px] justify-center pb-[238px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="353"
          height="2"
          viewBox="0 0 353 2"
          fill="none"
        >
          <path
            d="M1 1H352"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="874"
          height="2"
          viewBox="0 0 874 2"
          fill="none"
        >
          <path
            d="M1 1H873"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="225"
          height="2"
          viewBox="0 0 225 2"
          fill="none"
        >
          <path
            d="M1 1L224 0.999981"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </main>
  );
}
