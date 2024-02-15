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
import BrandStrategy from "./assets/images/brand-strategy.svg";
import VisualIdentification from "./assets/images/visual-identification.svg";
import VerbalIdentification from "./assets/images/verbal-identification.svg";
import EvlolutionAndSupport from "./assets/images/evolution-and-support.svg";
import SpinningStaerEmailBlock from "./assets/images/spinnig-star-email-block.gif";

import styles from "./page.module.css";

import { useEffect, useRef, useState } from "react";
import { ModelDesignWorkingElement } from "./components/ModelDesignWorkingElement";
import { Carousel } from "./components/Carousel";
import Link from "next/link";

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
  const [isLight, setIsLight] = useState(false);
  const modelDesignWorkingScrollRef = useRef(null);
  const [isBrandStrategyOpen, setIsBrandStrategyOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState({
    img: Hero1,
    name: (
      <>
        Дарья <br /> менеджер проекта
      </>
    ),
    text: "// Миссия — инициировать уникальные дизайн-проекты с проактивной позицией положительного социального воздействия",
  });
  useEffect(() => {
    const operatingSystemThemeDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    if (typeof window !== "undefined") {
      const storedTheme = window.localStorage.getItem("prefered-theme") || "";

      if (document.querySelector("html")?.classList.value === "") {
        if (operatingSystemThemeDark.matches) {
          document.querySelector("html")?.classList.add("dark");
          window.localStorage.setItem("prefered-theme", "dark");
          document.querySelector("html")?.classList.remove("light");
          document.querySelector("html")?.classList.add("dark");
        } else {
          document.querySelector("html")?.classList.remove("dark");
          document.querySelector("html")?.classList.add("light");
          window.localStorage.setItem("prefered-theme", "light");
        }
      }

      if (storedTheme === "") {
        window.localStorage.setItem("prefered-theme", "light");
        setIsLight(true);
      }
      if (storedTheme === "light") {
        setIsLight(true);
      }
      if (storedTheme === "dark") {
        setIsLight(false);
      }
    }
  }, []);

  useEffect(() => {
    let count = 1;
    const backgroundsList = [
      {
        img: Hero1,
        name: (
          <>
            Дарья <br /> менеджер проекта
          </>
        ),
        text: "// Миссия — инициировать уникальные дизайн-проекты с проактивной позицией положительного социального воздействия",
      },
      {
        img: Hero2,
        name: (
          <>
            Анна <br /> старший дизайнер
          </>
        ),
        text: "// Концепция — Привлекая внимание общественности и выявляя актуальные проектные проблемы, предлагать заказчикам готовые системы работы/дизайн-концепции",
      },

      {
        img: Hero3,
        name: (
          <>
            Анастасия <br /> дизайн-разведчик
          </>
        ),
        text: "// К нам можно обращаться за креативными идеями решения проблемы, где уже кажется нет способов что-то придумать",
      },
      {
        img: Hero4,
        name: (
          <>
            Мария <br /> дизайнер
          </>
        ),
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
  const scroll = (scrollOffset: number) => {
    if (!modelDesignWorkingScrollRef || !modelDesignWorkingScrollRef.current) {
      return;
    }
    const scrollRef = modelDesignWorkingScrollRef.current as HTMLElement;
    scrollRef.scrollLeft += scrollOffset;
  };
  return (
    <main className="bg-[var(--adaptive-white-to-black)] text-white font-[bakemonoStereoBold]">
      <section
        className="h-[100vh] px-16 bg-cover"
        style={{ backgroundImage: `url(${currentHero?.img?.src})` }}
      >
        <button
          style={{
            width: "100px",
            height: "100px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "yellow",
          }}
          onClick={() => {
            if (window.localStorage.getItem("prefered-theme") === "light") {
              window.localStorage.setItem("prefered-theme", "dark");
              document.querySelector("html")?.classList.remove("light");
              document.querySelector("html")?.classList.add("dark");
              setIsLight(false);
            } else {
              window.localStorage.setItem("prefered-theme", "light");
              document.querySelector("html")?.classList.remove("dark");
              document.querySelector("html")?.classList.add("light");
              setIsLight(true);
            }
          }}
        >
          123
        </button>
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
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                  width="11"
                  height="25"
                  viewBox="0 0 11 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <li
                className="cursor-pointer"
                onClick={() => {
                  if (
                    window.localStorage.getItem("prefered-theme") === "light"
                  ) {
                    window.localStorage.setItem("prefered-theme", "dark");
                    document.querySelector("html")?.classList.remove("light");
                    document.querySelector("html")?.classList.add("dark");
                    setIsLight(false);
                  } else {
                    window.localStorage.setItem("prefered-theme", "light");
                    document.querySelector("html")?.classList.remove("dark");
                    document.querySelector("html")?.classList.add("light");
                    setIsLight(true);
                  }
                }}
              >
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
        <div className="flex justify-between flex-col pb-[120px] h-[100%]">
          <Image src={HeroAnimatedLogo} alt="Дальновидно" />
          <div
            className={`grid grid-cols-[auto_744px] items-center justify-between ${styles["hero__text-block--wrap-mobile"]}`}
          >
            <div className="row-span-2 self-end font-bakemonoTextExtralight">
              <p className="text-[24px] ">{currentHero.name}</p>
            </div>
            <div className="flex border-t-2 text-[20px] border-[white] font-bakemonoTextExtralight justify-between mb-6 flex-wrap">
              <p
                className={`${styles["hero__text-block--margin-right-mobile"]}`}
              >
                22/05/2022 вс
              </p>
              <p>дизайн-агентство инициатив</p>
            </div>
            <div className="w-[640px] my-0 mr-0 ml-[auto]">
              <p className="text-right text-[27px]  font-bakemonoStereoRegular">
                {currentHero.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="h-[600px] flex">
          {" "}
          <Carousel />
        </div>
        <p
          className={`pl-[50px] text-[24px] text-left font-bakemonoStereoRegular text-[var(--adaptive-black-to-white)] ${styles["padding-h-mobile-25"]}`}
        >
          Мы подбираем под каждый проект самую дальновидную <br /> команду из
          профессионалов в своих направлениях, чтобы <br /> прийти к
          комплексному решению засчет <br /> междисциплинарного подхода
        </p>
      </section>

      {/* <section></section> */}
      <section className="pb-[227px] pt-[100px]">
        <p
          className={`text-[34px] pl-[215px] font-bakemonoStereoRegular text-[var(--adaptive-black-to-white)] ${styles["padding-left-50-mobile"]}`}
        >
          {`// Модель работы агентства
          дизайн-инициатив`}
        </p>
        <div
          ref={modelDesignWorkingScrollRef}
          className=" flex gap-[93px] overflow-hidden scroll-smooth items-center h-[550px] pb-[70px]  px-[85px]"
        >
          {modelDesignAgentWorkingImages.map((sliderElem, id) => {
            return (
              <ModelDesignWorkingElement key={id} sliderElem={sliderElem} />
            );
          })}
        </div>
        <div className="pr-[115px] mt-[40px]  flex justify-end gap-[38px]">
          <button onClick={() => scroll(-372)}>
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9146 -1.86074e-06C10.9146 6.02529 6.02008 10.8932 1.95337e-06 10.8932L10.9146 -1.86074e-06Z"
                fill="#C62068"
              />
              <path
                d="M10.9146 -1.86074e-06C10.9146 6.02529 6.02008 10.8932 1.95337e-06 10.8932"
                stroke="#C62068"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M10.9146 31.233C10.9146 25.2077 6.02008 20.3398 0 20.3398L10.9146 31.233Z"
                fill="#C62068"
              />
              <path
                d="M10.9146 31.233C10.9146 25.2077 6.02008 20.3398 0 20.3398"
                stroke="#C62068"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M28.3577 13.7227L0.0644531 13.7227L0.0644538 17.5229L28.3577 17.5229L28.3577 13.7227Z"
                fill="#C62068"
              />
            </svg>
          </button>
          <button onClick={() => scroll(372)}>
            <svg
              width="29"
              height="32"
              viewBox="0 0 29 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6528 31.2324C17.6528 25.2071 22.5473 20.3392 28.5674 20.3392L17.6528 31.2324Z"
                fill="#C62068"
              />
              <path
                d="M17.6528 31.2324C17.6528 25.2071 22.5473 20.3392 28.5674 20.3392"
                stroke="#C62068"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M17.6528 -0.000598907C17.6528 6.02469 22.5473 10.8926 28.5674 10.8926L17.6528 -0.000598907Z"
                fill="#C62068"
              />
              <path
                d="M17.6528 -0.000598907C17.6528 6.02469 22.5473 10.8926 28.5674 10.8926"
                stroke="#C62068"
                strokeWidth="5"
                strokeMiterlimit="10"
              />
              <path
                d="M0.209723 17.5098L28.5029 17.5098V13.7096L0.209723 13.7096V17.5098Z"
                fill="#C62068"
              />
            </svg>
          </button>
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
            stroke="var(--adaptive-black-to-white)"
            strokeWidth="2"
            strokeLinecap="round"
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
            stroke="var(--adaptive-black-to-white)"
            strokeWidth="2"
            strokeLinecap="round"
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
            stroke="var(--adaptive-black-to-white)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <section
        className={`text-[var(--adaptive-black-to-white)] text-[28px] bg-[var(adaptive-white-to-black)] pt-[106px] px-[213px] pb-[106px] ${styles["padding-h-mobile-25"]}`}
      >
        <div className="w-[100%] my-0 mx-auto">
          <div className="relative">
            <button
              className="w-[100%]"
              onClick={() => {
                setIsBrandStrategyOpen((prev) => !prev);
              }}
            >
              <div
                className={`${isBrandStrategyOpen && styles.animateTest} 
                
                 w-[100%] border-t-[3px] text-left  border-b-[3px] py-[53px] border-[var(--adaptive-black-to-white)]`}
              >
                <p
                  className={`font-[bakemonoTextMedium] ${styles["text-align-center-mobile"]}`}
                >
                  БРЕНД СТРАТЕГИЯ
                </p>
              </div>
              <div
                style={{
                  visibility: isBrandStrategyOpen ? "visible" : "hidden",
                }}
                className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
              >
                <div className={styles.content1}>
                  БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                  {"<->"}
                  БРЕНД СТРАТЕГИЯ{"<->"}
                  БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                  {"<->"}
                  БРЕНД СТРАТЕГИЯ
                </div>
                <div className={styles.content2}>
                  БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                  {"<->"}
                  БРЕНД СТРАТЕГИЯ{"<->"}
                  БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                  {"<->"}
                  БРЕНД СТРАТЕГИЯ
                </div>
              </div>
            </button>

            {isBrandStrategyOpen && (
              <div className="font-[bakemonoStereoRegular]">
                <Image
                  className={`mr-[127px] mb-[19px] float-right ${styles["margin-0-mobile"]}`}
                  src={BrandStrategy}
                  alt="image"
                />
                <p className="clear-right mb-[44px] text-[15px] font-[300] font-[bakemonoTextLight]">
                  БРЕНД СТРАТЕГИЯ //
                </p>
                <div
                  className={`clear-right flex font-[400] justify-between ${styles["direction-column-mobile"]}`}
                >
                  <div
                    className={`w-[576px] text-[28px] ${styles["width-100-mobile"]}`}
                  >
                    <p className="text-[var(--adaptive-black-to-white)]">
                      Создаем целостное видение по развитию вашего бренда с
                      учетом сильных сторон компании/продукта, рыночной
                      ситуации, потребительских инсайтов и конкурентной среды.
                    </p>
                  </div>
                  <div
                    className={`flex text-[28px] font-bold w-[365px] flex-col gap-[57px] ${styles["width-100-mobile"]} ${styles["gap-20-mobile"]}`}
                  >
                    <p className="text-[var(--adaptive-black-to-white)]">
                      Анализ конкурентов и рынка
                    </p>
                    <p className="text-[var(--adaptive-black-to-white)]">
                      Исследования
                    </p>
                    <p className="text-[var(--adaptive-black-to-white)]">
                      Платформа бренда
                    </p>
                    <p className="text-[var(--adaptive-black-to-white)]">
                      Позиционирование бренда
                    </p>
                    <button className="mt-[19px] px-[40px] text-white bg-black py-[19px]">
                      Обсудить задачу
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        className={`pb-[100px] font-[bakemonoStereoRegular] px-[213px] pt-[200px] text-[var(--adaptive-white-to-black)] bg-[var(--adaptive-black-to-white)] flex ${styles["padding-mobile-0"]} ${styles["form-margin-mobile"]}`}
      >
        <div
          className={`w-[1225px] my-0 mx-auto flex ${styles["mobile-form"]} ${styles["width-100-mobile"]}`}
        >
          <div>
            <p
              className={`text-[45px] font-[600] ${styles["text-align-center-mobile"]} text-[var(--adaptive-white-to-black)]`}
            >
              Обсудить с нами{" "}
            </p>{" "}
            <div
              className={`flex mb-[140px] gap-[27px] ${styles["justify-center-mobile"]} ${styles["margin-0-mobile"]}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="43"
                viewBox="0 0 39 43"
                fill="none"
              >
                <path
                  d="M23.673 42.2461C23.673 34.096 30.2935 27.5115 38.4365 27.5115"
                  stroke="#1155CC"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M23.673 -0.000182152C23.673 8.14987 30.2935 14.7344 38.4365 14.7344"
                  stroke="#1155CC"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M0.0790634 23.6836L38.3496 23.6836V18.5433L0.0790634 18.5433V23.6836Z"
                  fill="#1155CC"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="43"
                viewBox="0 0 39 43"
                fill="none"
              >
                <path
                  d="M23.673 42.2461C23.673 34.096 30.2935 27.5115 38.4365 27.5115"
                  stroke="#1155CC"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M23.673 -0.000182152C23.673 8.14987 30.2935 14.7344 38.4365 14.7344"
                  stroke="#1155CC"
                  strokeWidth="5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M0.0790634 23.6836L38.3496 23.6836V18.5433L0.0790634 18.5433V23.6836Z"
                  fill="#1155CC"
                />
              </svg>
            </div>
            <Image src={SpinningStaerEmailBlock} alt="" />
          </div>
          <div
            className={`bg-[var(--adaptive-white-to-black)] p-[100px] text-[var(--adaptive-black-to-white)]  ${styles["padding-h-mobile-25"]}`}
          >
            <form className={`flex flex-col text-[28px] gap-[64px]`} action="">
              <input
                className="py-[10px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                placeholder="/как к вам обращаться?"
                type="text"
              />
              <input
                className="py-[10px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                placeholder="/тема разговора"
                type="text"
              />
              <input
                className="py-[10px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                placeholder="/телефон"
                type="text"
              />
              <input
                className="py-[10px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                placeholder="/почта"
                type="text"
              />
              <textarea
                className="py-[10px] px-[19px] h-[221px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                placeholder="/расскажите о вашей задаче"
                name=""
                id=""
              ></textarea>
            </form>
          </div>
        </div>
      </section>
      <footer
        className={`bg-[var(--adaptive-black-to-white)] py-[107px] font-[bakemonoStereoRegular] px-[86px] ${styles["padding-h-mobile-25"]} ${styles["padding-v-mobile-25"]}`}
      >
        <div
          className={`flex items-center gap-[50px] mb-[32px] ${styles["hero__text-block--wrap-mobile"]} ${styles["gap-20-mobile"]}`}
        >
          <div
            className={`flex items-center gap-[6px] ${styles["justify-center-mobile"]}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M7.9827 12.8116C7.37655 13.0957 6.79858 13.2236 6.24881 13.2236C5.4453 13.2236 4.79685 12.9679 4.31756 12.4706C3.83828 11.9734 3.59863 11.2489 3.59863 10.3113C3.59863 9.28842 3.86647 8.40762 4.40214 7.65469C5.13517 7.55524 6.07965 7.49842 7.23558 7.49842C7.9968 7.49842 8.71573 7.51263 9.40647 7.55525V7.20009C9.40647 6.57501 9.30779 6.13461 9.09634 5.86469C8.88489 5.59477 8.50428 5.4527 7.94041 5.4527C7.51751 5.4527 6.99593 5.50953 6.36158 5.62318C5.72723 5.73683 5.12108 5.8931 4.54311 6.1204L4.07792 4.07469C5.62856 3.47802 7.03823 3.17969 8.27873 3.17969C9.08225 3.17969 9.75889 3.27913 10.2664 3.47802C10.7879 3.67691 11.1967 4.03207 11.4787 4.5435C11.7747 5.05493 11.9157 5.77945 11.9157 6.71707V10.7233L12.9306 10.6096C12.9588 11.1068 12.9729 11.4904 12.9729 11.7745C12.9729 12.0445 12.9588 12.428 12.9306 12.9252C12.4232 12.9963 11.8452 13.0389 11.2108 13.0389C10.6752 13.0389 10.1959 13.0105 9.80118 12.9679L9.51924 11.8029C9.11044 12.2007 8.58886 12.5275 7.9827 12.8116ZM7.10871 11.1921C7.46113 11.1921 7.84174 11.1352 8.25054 11.0074C8.67344 10.8795 9.05405 10.7091 9.39237 10.496V9.11795C8.72983 9.07533 8.10957 9.06112 7.5598 9.06112C7.08051 9.06112 6.62942 9.07533 6.20652 9.11795C6.05146 9.35945 5.98097 9.70041 5.98097 10.1124C5.99507 10.8227 6.37568 11.1921 7.10871 11.1921Z"
                fill="#1155CC"
              />
              <rect
                x="10.5459"
                y="10.6289"
                width="5.52414"
                height="2.34357"
                fill="#1155CC"
              />
              <rect width="16.0702" height="2.34357" fill="#1155CC" />
              <rect
                y="14.2285"
                width="8.70471"
                height="2.34357"
                fill="#1155CC"
              />
              <rect
                x="13.9775"
                width="2.09248"
                height="12.8897"
                fill="#1155CC"
              />
              <rect width="2.09248" height="15.9865" fill="#1155CC" />
            </svg>{" "}
            <p className="text-[#15C] text-[26px] font-[600]">
              СВЯЗАТЬСЯ С НАМИ
            </p>{" "}
          </div>
          <p className="text-[15px] font-[400] text-[var(--adaptive-white-to-black)]">
            DALNOVIDNO@GMAIL.COM
          </p>{" "}
        </div>
        <div
          className={`border-[var(--adaptive-white-to-black)] mb-[100px] py-[17px] flex items-center justify-between border-b-[2px] border-t-[2px] ${styles["footer-mobile"]} ${styles["margin-bottom-20-mobile"]}`}
        >
          <div
            className={`flex gap-[30px] ${styles["block-flex-wrap-mobile"]}`}
          >
            <Link href="" className="text-[var(--adaptive-white-to-black)]">
              ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
            </Link>
            <p className="text-[var(--adaptive-white-to-black)]">{`//`}</p>{" "}
            <Link href="" className="text-[var(--adaptive-white-to-black)]">
              ХОЧУ В КОМАНДУ
            </Link>{" "}
            <p className="text-[var(--adaptive-white-to-black)]">{`//`}</p>{" "}
            <Link href="" className="text-[var(--adaptive-white-to-black)]">
              ОДНОВРЕМЕННО ВЕЗДЕ
            </Link>
          </div>
          <div className="flex items-center gap-[91px]">
            <p className="text-[var(--adaptive-white-to-black)]">Следить</p>{" "}
            <div className="flex gap-[20px] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M17 8.3246C17 12.9259 13.1983 16.6492 8.5 16.6492C3.80174 16.6492 0 12.9259 0 8.3246C0 3.72329 3.80174 0 8.5 0C13.1983 0 17 3.7344 17 8.3246Z"
                  fill="var(--adaptive-white-to-black)"
                />
                <path
                  d="M4.50473 8.75765H6.29779C6.69499 8.75765 7.37589 8.92436 7.37589 9.66902C7.37589 10.058 7.05814 10.5137 6.66094 10.5137H4.50473V8.75765ZM10.2471 5.25665H13.47V6.31251H10.2471V5.25665ZM13.0388 8.75765H10.6669C10.7464 8.13525 11.223 7.71291 11.8585 7.71291C12.4714 7.71291 12.9366 8.14636 13.0388 8.75765ZM10.5989 9.46896H14.5368C14.5368 9.41339 14.5368 9.34671 14.5368 9.29114C14.5368 7.83517 13.47 6.66816 11.8585 6.66816C10.2357 6.66816 9.16895 7.84628 9.16895 9.29114C9.16895 10.7582 10.2357 11.9252 11.8585 11.9252C13.47 11.9252 14.2417 11.025 14.4914 9.8135H13.0388C12.9026 10.4248 12.5281 10.8694 11.8585 10.8694C11.1776 10.8694 10.6443 10.2581 10.5989 9.46896ZM8.8058 9.8135C8.8058 9.04662 8.28377 8.39088 7.59152 8.15748C8.1022 7.84628 8.44265 7.29056 8.44265 6.66816C8.44265 5.69011 7.63691 4.91211 6.6496 4.91211H3.06348V11.9363H6.6496C7.82984 11.9252 8.8058 10.9805 8.8058 9.8135ZM6.28644 7.71291H4.49339V6.30139H6.28644C6.68364 6.30139 7.01274 6.62371 7.01274 7.00159C7.01274 7.37948 6.68364 7.71291 6.28644 7.71291Z"
                  fill="var(--adaptive-black-to-white)"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M8.5 16.6492C13.1944 16.6492 17 12.9221 17 8.3246C17 3.72705 13.1944 0 8.5 0C3.80558 0 0 3.72705 0 8.3246C0 12.9221 3.80558 16.6492 8.5 16.6492Z"
                  fill="var(--adaptive-white-to-black)"
                />
                <path
                  d="M11.5858 3.38965H5.41227C4.33416 3.38965 3.47168 4.24545 3.47168 5.29019V7.30188V8.04653V11.3475C3.47168 12.4033 4.34551 13.248 5.41227 13.248H11.5858C12.6639 13.248 13.5378 12.3922 13.5378 11.3475V8.05765V7.31299V5.30131C13.5378 4.24545 12.6639 3.38965 11.5858 3.38965ZM12.1533 4.53442H12.3802V4.7567V6.21267H10.678L10.6666 4.54553L12.1533 4.53442ZM7.06914 7.31299C7.3869 6.87953 7.92028 6.59056 8.5104 6.59056C9.10052 6.59056 9.62255 6.87953 9.95165 7.31299C9.9857 7.36856 10.0197 7.42413 10.0538 7.4797C10.2013 7.73533 10.2808 8.0243 10.2808 8.32439C10.2808 9.28022 9.48636 10.0582 8.5104 10.0582C7.53443 10.0582 6.74004 9.28022 6.74004 8.32439C6.74004 8.01319 6.81948 7.72422 6.96701 7.4797C6.9897 7.42413 7.02375 7.36856 7.06914 7.31299ZM12.5618 11.3475C12.5618 11.8698 12.1306 12.2922 11.5972 12.2922H5.42361C4.89024 12.2922 4.45899 11.8698 4.45899 11.3475V7.82425V7.31299H5.95699C5.92295 7.4019 5.8889 7.49082 5.85486 7.59085C5.78677 7.82424 5.75272 8.06876 5.75272 8.32439C5.75272 9.8137 6.9897 11.0252 8.5104 11.0252C10.0311 11.0252 11.2681 9.8137 11.2681 8.32439C11.2681 8.06876 11.234 7.82424 11.1659 7.59085C11.1432 7.49082 11.1092 7.4019 11.0638 7.31299H12.5731V7.82425V11.3475H12.5618Z"
                  fill="var(--adaptive-black-to-white)"
                />
              </svg>
              <svg
                width="40"
                height="41"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 17C13.1944 17 17 13.1944 17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 13.1944 3.80558 17 8.5 17Z"
                  fill="var(--adaptive-white-to-black)"
                />
                <path
                  d="M11.875 7.43684C11.875 8.31848 11.5664 9.12434 11.0066 9.70676C10.484 10.2493 9.77539 10.5618 9.0625 10.5618C8.36406 10.5618 7.89766 10.3329 7.60039 10.0931L7.1793 11.8833C7.16318 11.9519 7.12435 12.0131 7.06911 12.0568C7.01387 12.1006 6.94547 12.1244 6.875 12.1243C6.85081 12.1243 6.8267 12.1216 6.80313 12.1161C6.76302 12.1069 6.72512 12.0899 6.69162 12.066C6.65811 12.0421 6.62965 12.0118 6.60788 11.9769C6.5861 11.942 6.57143 11.9031 6.56472 11.8625C6.558 11.8219 6.55937 11.7804 6.56875 11.7404L7.81875 6.42785C7.83771 6.34715 7.88795 6.27728 7.95842 6.23362C8.0289 6.18996 8.11383 6.17608 8.19453 6.19504C8.27524 6.214 8.3451 6.26424 8.38876 6.33472C8.43243 6.40519 8.4463 6.49012 8.42734 6.57082L7.76719 9.37551C7.89062 9.54621 8.25391 9.93684 9.0625 9.93684C10.1379 9.93684 11.25 9.00168 11.25 7.43684C11.2498 7.00554 11.1505 6.58005 10.9596 6.19328C10.7687 5.80651 10.4915 5.46882 10.1492 5.20632C9.80702 4.94382 9.40901 4.76355 8.98599 4.67943C8.56296 4.59532 8.12626 4.60963 7.70965 4.72125C7.29304 4.83286 6.90769 5.0388 6.58338 5.32313C6.25907 5.60747 6.0045 5.96258 5.83935 6.36101C5.6742 6.75945 5.6029 7.19052 5.63096 7.62091C5.65902 8.0513 5.78569 8.46947 6.00117 8.84309C6.04004 8.91467 6.04943 8.9986 6.02733 9.077C6.00523 9.1554 5.95339 9.22207 5.88285 9.26282C5.81232 9.30356 5.72866 9.31515 5.64971 9.29512C5.57076 9.27509 5.50274 9.22503 5.46016 9.15559C5.19665 8.69895 5.04171 8.18783 5.00732 7.66174C4.97293 7.13565 5.06001 6.6087 5.26182 6.12165C5.46363 5.63459 5.77477 5.20049 6.17117 4.8529C6.56757 4.50531 7.03861 4.25356 7.54786 4.11712C8.05711 3.98067 8.59092 3.96319 9.108 4.06603C9.62508 4.16886 10.1116 4.38925 10.5299 4.71016C10.9482 5.03107 11.287 5.44389 11.5203 5.9167C11.7535 6.38951 11.8749 6.90963 11.875 7.43684Z"
                  fill="var(--adaptive-white-to-black)"
                  stroke="var(--adaptive-black-to-white)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <svg
          className="my-[0] mx-[auto] "
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="24"
          viewBox="0 0 101 24"
          fill="none"
        >
          <path
            d="M61.9842 3.40423C62.9242 3.40423 63.6862 2.64217 63.6862 1.70211C63.6862 0.762061 62.9242 0 61.9842 0C61.0442 0 60.2822 0.762061 60.2822 1.70211C60.2822 2.64217 61.0442 3.40423 61.9842 3.40423Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M48.9246 22.8476C49.8646 22.8476 50.6266 22.0855 50.6266 21.1455C50.6266 20.2054 49.8646 19.4434 48.9246 19.4434C47.9847 19.4434 47.2227 20.2054 47.2227 21.1455C47.2227 22.0855 47.9847 22.8476 48.9246 22.8476Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M46.2229 7.84325H42.8015V11.7859H40.127V1.89453H42.8015V5.39429H46.2229V1.89453H48.8974V11.7859H46.2229V7.84325Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M1.23308 9.11932C1.47622 8.85879 1.6412 8.22484 1.74541 7.21747C1.84961 6.21009 1.90171 4.49929 1.91908 2.09375H9.59541V9.52748H10.6201V14.4341H8.1713L8.35366 11.9851H2.26643L2.44879 14.4341H0V9.52748H0.0173683C0.590488 9.51879 0.998619 9.37985 1.23308 9.11932ZM6.94691 9.52748V4.54271H4.3505C4.33313 5.80193 4.28971 6.81799 4.22024 7.59958C4.15077 8.38116 4.01184 9.02379 3.82948 9.52748H6.94691Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M30.3135 4.54271H27.4392C27.4131 6.49667 27.2655 8.00774 27.005 9.0759C26.7445 10.1441 26.3016 10.9083 25.6677 11.3772C25.0338 11.8462 24.122 12.0893 22.915 12.098L22.75 9.64906C23.4447 9.59695 23.9223 9.43195 24.1915 9.14537C24.452 8.86747 24.6257 8.2422 24.7125 7.28693C24.7993 6.33167 24.8514 4.59482 24.8601 2.09375H32.9793V11.9851H30.3048V4.54271H30.3135Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M30.2803 2.11914H32.9548V4.88942H35.1431C36.4283 4.88942 37.4182 5.18469 38.1216 5.78391C38.8163 6.38312 39.1636 7.26891 39.1636 8.44997C39.1636 9.55287 38.8423 10.4126 38.1997 11.0553C37.5572 11.6892 36.5499 12.0105 35.1865 12.0105H30.2803V2.11914ZM34.9868 9.83945C35.4731 9.83945 35.8465 9.72656 36.1157 9.4834C36.3849 9.24893 36.5151 8.90155 36.5151 8.44997C36.5151 7.96365 36.3849 7.61628 36.1157 7.40786C35.8465 7.19075 35.4557 7.08655 34.9521 7.08655H32.9635V9.83945H34.9868Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M16.5163 11.8022C15.891 12.0887 15.3006 12.2277 14.7274 12.2277C13.8938 12.2277 13.2252 11.9758 12.7302 11.4635C12.2352 10.9511 11.9834 10.2129 11.9834 9.24899C11.9834 8.19819 12.2613 7.29503 12.817 6.53081C13.5725 6.4266 14.5451 6.37449 15.7347 6.37449C16.5163 6.37449 17.2631 6.39186 17.9838 6.43529V6.07923C17.9838 5.44528 17.8796 4.98501 17.6625 4.70712C17.4541 4.42922 17.0546 4.29027 16.4728 4.29027C16.0387 4.29027 15.4916 4.35106 14.8403 4.45527C14.189 4.56817 13.5725 4.73317 12.9733 4.95896L12.4957 2.87474C14.1022 2.26684 15.5437 1.96289 16.8289 1.96289C17.6625 1.96289 18.3485 2.05842 18.8869 2.25816C19.4253 2.4579 19.8421 2.82263 20.1373 3.35237C20.4326 3.88211 20.5802 4.62027 20.5802 5.57554V9.66583L21.6309 9.54425C21.657 10.0479 21.6743 10.4474 21.6743 10.734C21.6743 11.0119 21.657 11.4027 21.6309 11.9064C21.1012 11.9845 20.5107 12.028 19.8595 12.028C19.3037 12.028 18.8174 12.0019 18.4093 11.9498L18.1141 10.76C17.6712 11.1682 17.1328 11.5156 16.5163 11.8022ZM15.6218 10.1348C15.9779 10.1348 16.3773 10.074 16.8028 9.94373C17.237 9.82215 17.6278 9.63977 17.9838 9.41398V8.00714C17.2978 7.96371 16.6639 7.94635 16.0994 7.94635C15.6132 7.94635 15.1442 7.96371 14.7101 8.00714C14.5538 8.25898 14.4756 8.59766 14.4756 9.02319C14.4669 9.77004 14.849 10.1348 15.6218 10.1348Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M52.6573 6.89627C52.6573 5.48074 53.8035 4.34311 55.2103 4.34311C56.287 4.34311 57.2075 5.0118 57.5809 5.9497L59.1439 3.63967C58.2061 2.51072 56.7907 1.78125 55.2016 1.78125C52.3794 1.78125 50.0869 4.07389 50.0869 6.89627C50.0869 9.17155 51.5718 11.0995 53.6298 11.7595L55.1929 9.44945C53.7948 9.44945 52.6573 8.31181 52.6573 6.89627Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M69.0002 20.7468V14.7981L64.8581 20.7468H62.5049V10.8555H65.1013V16.8302L69.2434 10.8555H71.5966V20.7468H69.0002Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M73.9069 17.881C74.1501 17.6205 74.315 16.9866 74.4192 15.9792C74.5234 14.9718 74.5755 13.261 74.5929 10.8555H82.2692V18.2892H83.2939V23.1958H80.8451L81.0275 20.7468H74.9403L75.1226 23.1958H72.6738V18.2892H72.6912C73.2556 18.2805 73.6638 18.1416 73.9069 17.881ZM79.6121 18.2892V13.3044H77.0156C76.9983 14.5636 76.9549 15.5797 76.8854 16.3613C76.8159 17.1429 76.677 17.7855 76.4946 18.2892H79.6121Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M86.8543 16.8042H82.2781V20.7468H79.6035V10.8555H82.2781V14.3552H86.8543V10.8555H89.5289V20.7468H86.8543V16.8042Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M101.001 15.8318C101.001 18.6542 98.7083 20.9469 95.8861 20.9469C93.064 20.9469 90.7715 18.6542 90.7715 15.8318C90.7715 13.0094 93.064 10.7168 95.8861 10.7168C98.7083 10.7168 101.001 13.0094 101.001 15.8318ZM98.4478 15.8318C98.4478 14.4163 97.3016 13.2787 95.8948 13.2787C94.4794 13.2787 93.3418 14.425 93.3418 15.8318C93.3418 17.2474 94.4881 18.385 95.8948 18.385C97.3016 18.385 98.4478 17.2387 98.4478 15.8318Z"
            fill="var(--adaptive-white-to-black)"
          />
          <path
            d="M59.6406 15.1368C60.2745 14.5636 60.5872 13.9036 60.5872 13.1655C60.5872 12.4447 60.3093 11.8715 59.7622 11.4634C59.2325 11.0726 58.4336 10.8642 57.3655 10.8555L56.0022 12.8615H56.8619C57.2787 12.8615 57.5913 12.9397 57.8171 13.096C58.0342 13.2523 58.1471 13.4781 58.1471 13.7907C58.1471 14.1121 57.9907 14.4421 57.6868 14.7721H57.4871H55.0557V14.2597L52.5635 17.9331V20.7382H57.4089C58.7896 20.7382 59.7969 20.4603 60.4482 19.9131C61.0908 19.366 61.4121 18.6366 61.4121 17.7421C61.4121 17.1081 61.2645 16.5784 60.9605 16.1355C60.6566 15.7013 60.2138 15.3626 59.6406 15.1368ZM58.4076 18.4455C58.1905 18.6366 57.8518 18.7408 57.3916 18.7408H55.0557V16.6305H57.3482C58.2686 16.6305 58.7375 16.9692 58.7375 17.6552C58.7375 17.9852 58.6247 18.2458 58.4076 18.4455Z"
            fill="var(--adaptive-white-to-black)"
          />
        </svg>
      </footer>
    </main>
  );
}
