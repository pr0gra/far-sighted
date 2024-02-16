"use client";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "./AccordeonSection.module.css";
import BrandStrategy from "../assets/images/brand-strategy.svg";
import VisualIdentification from "../assets/images/visual-identification.svg";
import VerbalIdentification from "../assets/images/verbal-identification.svg";
import EvlolutionAndSupport from "../assets/images/evolution-and-support.svg";

export function AccordeonSection() {
  const [isBrandStrategyOpen, setIsBrandStrategyOpen] = useState(false);
  const [brandStrategyHeight, setBrandStrategyHeight] = useState(0);

  const scrollToElement = () => {
    const element = document.getElementById("email");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="text-black  text-[28px] bg-white pt-[232px] px-[213px]">
      <div className="w-[1225px] my-0 mx-auto">
        <div className="  border-b-[3px] border-black border-t-[3px] relative">
          <button
            className="w-[100%]"
            onClick={() => {
              setIsBrandStrategyOpen((prev) => !prev);
            }}
          >
            <div className=" w-[100%]   text-left    py-[53px] ">
              <button className="font-[bakemonoTextMedium]">
                БРЕНД СТРАТЕГИЯ
              </button>
            </div>{" "}
          </button>
          <div
            style={{
              maxHeight: isBrandStrategyOpen ? `1033px` : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular]`}
          >
            <div
              style={{ display: isBrandStrategyOpen ? "" : "none" }}
              className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
            >
                <div className={styles.content0}>
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
           
              </div>
              <div className={styles.content1}>
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
             
              </div>
              <div className={styles.content2}>
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
           
              </div>
            </div>
            <Image
              className="mr-[127px] mb-[83px] float-right"
              src={BrandStrategy}
              alt="image"
            />
            <div className="clear-right flex font-[400] justify-between ">
              <div className="w-[576px] text-[28px]">
                <p className=" ">
                  Создаем целостное видение по развитию вашего бренда с учетом
                  сильных сторон компании/продукта, рыночной ситуации,
                  потребительских инсайтов и конкурентной среды.
                </p>
              </div>
              <div className="flex text-[28px] w-[365px] flex-col gap-[57px]">
                <p>Анализ конкурентов и рынка</p>
                <p>Исследования</p>
                <p>Платформа бренда</p>
                <p>Позиционирование бренда</p>
                <button
                  onClick={scrollToElement}
                  className="mt-[19px] px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="  border-b-[3px] border-black border-t-[3px] relative">
          <button
            className="w-[100%]"
            onClick={() => {
              setIsBrandStrategyOpen((prev) => !prev);
            }}
          >
            <div className=" w-[100%]   text-left    py-[53px] ">
              <button className="font-[bakemonoTextMedium]">
                БРЕНД СТРАТЕГИЯ
              </button>
            </div>{" "}
          </button>
          <div
            style={{
              maxHeight: isBrandStrategyOpen ? `1033px` : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular]`}
          >
            <div
              style={{ visibility: isBrandStrategyOpen ? "" : "hidden" }}
              className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
            >
              <div className={styles.content1}>
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ
              </div>
              <div className={styles.content2}>
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ
                {"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ{"<->"}
                БРЕНД СТРАТЕГИЯ
              </div>
            </div>
            <Image
              className="mr-[127px] mb-[83px] float-right"
              src={BrandStrategy}
              alt="image"
            />
            <div className="clear-right flex font-[400] justify-between ">
              <div className="w-[576px] text-[28px]">
                <p className=" ">
                  Создаем целостное видение по развитию вашего бренда с учетом
                  сильных сторон компании/продукта, рыночной ситуации,
                  потребительских инсайтов и конкурентной среды.
                </p>
              </div>
              <div className="flex text-[28px] w-[365px] flex-col gap-[57px]">
                <p>Анализ конкурентов и рынка</p>
                <p>Исследования</p>
                <p>Платформа бренда</p>
                <p>Позиционирование бренда</p>
                <button
                  onClick={scrollToElement}
                  className="mt-[19px] px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
    */}

        {/*   <div className="border-t-[3px]  py-[53px] border-black">
        <p className="font-[bakemonoTextMedium]">
          ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
        </p>
      </div>
      <Image
        className="mr-[127px] mb-[19px] float-right"
        src={VerbalIdentification}
        alt="image"
      />
      <p className="clear-right mb-[44px] text-[15px] font-[300] font-[bakemonoTextLight]">
        ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ //
      </p>
      <div className="clear-right font-[bakemonoStereoRegular] flex font-[400] justify-between ">
        <div className="w-[576px] text-[28px]">
          <p className=" ">
            Создаем собственный язык общения бренда с аудиторией, который
            вызовет эмоции и запомнится.
          </p>
        </div>
        <div className="flex font-bold text-[28px] w-[365px] flex-col gap-[57px]">
          <p>Нейминг</p>
          <p>Дескриптор</p>
          <p>Слоган</p>
          <p>Речевой портрет</p>
          <button className="mt-[19px] px-[40px] text-white bg-black py-[19px]">
            Обсудить задачу
          </button>
        </div>
      </div>
      <div className="border-t-[3px] font-[bakemonoTextMedium] py-[53px] border-black">
        <p>ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ</p>
      </div>
      <Image
        className="mr-[127px] mb-[19px] float-right"
        src={VisualIdentification}
        alt="image"
      />
      <p className="clear-right mb-[44px] text-[15px] font-[300] font-[bakemonoTextLight]">
        ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ //
      </p>
      <div className="clear-right font-[bakemonoStereoRegular] flex font-[400] justify-between ">
        <div className="w-[576px] text-[28px]">
          <p className=" ">
            Создаем комплексный визуальный образ бренда, транслирующий
            эмоциональные и рациональные ценности.
          </p>
          <p>
            Даем подробное руководство по использованию во всех ситуациях и
            прорабатываем все элементы стиля.
          </p>
        </div>
        <div className="flex text-[28px] font-bold w-[365px] flex-col gap-[57px]">
          <p>Логотип</p>
          <p>Цветовая гамма</p>
          <p>Шрифты и основа типографики </p>
          <p>Фон, паттерн, орнамент</p>
          <p>Графические элементы</p>
          <p>Инфографика, условные обозначения</p>
          <p>Стилистика иллюстраций/фотографий</p>
          <button className="mt-[19px] px-[40px] text-white bg-black py-[19px]">
            Обсудить задачу
          </button>
        </div>
      </div>
      
      <div className="border-t-[3px] font-[bakemonoTextMedium]  py-[53px] border-black">
        <p>РАЗВИТИЕ И ПОДДЕРЖКА</p>
      </div>
      <Image
        className="mr-[127px] mb-[19px] float-right"
        src={EvlolutionAndSupport}
        alt="image"
      />
      <p className="clear-right mb-[44px] text-[15px] font-[300] font-[bakemonoTextLight]">
        РАЗВИТИЕ И ПОДДЕРЖКА //
      </p>
      <div className="clear-right font-[bakemonoStereoRegular] flex font-[400] justify-between ">
        <div className="w-[576px] text-[28px]">
          <p className=" ">
            Продвигаем и поддерживаем проекты, которые создавали.
          </p>
        </div>
        <div className="flex text-[28px] font-bold w-[365px] flex-col gap-[57px]">
          <p>Коммуникационная стратегия</p>
          <p>Рекламная компания</p>
          <p>Разработка сайта</p>
          <p>Имеджевое, рекламное, презентационное видео</p>
          <p>Оформление презентаций</p>
          <button className="mt-[19px] px-[40px] text-white bg-black py-[19px]">
            Обсудить задачу
          </button>
        </div>
      </div> */}
      </div>
    </section>
  );
}
