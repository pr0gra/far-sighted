"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./AccordeonSection.module.css";
import BrandStrategy from "../assets/images/brand-strategy.svg";
import VisualIdentification from "../assets/images/visual-identification.svg";
import VerbalIdentification from "../assets/images/verbal-identification.svg";
import EvlolutionAndSupport from "../assets/images/evolution-and-support.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
export function AccordeonSection() {
  const [isBrandStrategyOpen, setIsBrandStrategyOpen] = useState(false);
  const [brandStrategyText, setBrandStrategyOpenText] = useState(
    <p className="">БРЕНД СТРАТЕГИЯ</p>
  );

  const [isVerbalIdentificationOpen, setVerbalIdentificationOpen] =
    useState(false);
  const [verbalIdentificationText, setVerbalIdentificationText] = useState(
    <p className="">ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ</p>
  );

  const [isVisualIdentificationOpen, setVisualIdentificationOpen] =
    useState(false);
  const [visualIdentificationText, setVisualIdentificationText] = useState(
    <p className="">ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ</p>
  );

  const [isEvlolutionAndSupportOpen, setEvlolutionAndSupportOpen] =
    useState(false);
  const [isEvlolutionAndSupportText, setEvlolutionAndSupportText] = useState(
    <p className="">РАЗВИТИЕ И ПОДДЕРЖКА</p>
  );

  const scrollToElement = () => {
    const element = document.getElementById("email");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="text-black li   text-[28px] leading-[32px] bg-white pt-[232px] ">
      <div className="w-[1225px] my-0 mx-auto">
        <div className=" border-black border-t-[3px] relative">
          <button
            onClick={() => {
              setIsBrandStrategyOpen((prev) => !prev);
              setBrandStrategyOpenText(
                isBrandStrategyOpen ? (
                  <p className="">БРЕНД СТРАТЕГИЯ</p>
                ) : (
                  <div
                    // style={{
                    //   visibility: isBrandStrategyOpen ? "visible" : "hidden",
                    // }}
                    className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
                  >
                    <div className={styles.content0}>
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                    </div>
                    <div className={styles.content1}>
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                    </div>
                    <div className={styles.content2}>
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}
                      БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД СТРАТЕГИЯ{"<->"}БРЕНД
                      СТРАТЕГИЯ
                      {"<->"}
                    </div>
                  </div>
                )
              );
            }}
            className="w-[100%] font-[bakemonoTextMedium] text-left   py-[53px]"
          >
            {brandStrategyText}
          </button>
          <div
            style={{
              maxHeight: isBrandStrategyOpen ? `1033px` : "0px",
              marginBottom: isBrandStrategyOpen ? "53px" : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular]`}
          >
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
                  className="mt-[19px] pb-[24px] px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-black border-t-[3px] relative">
          <button
            onClick={() => {
              setVerbalIdentificationOpen((prev) => !prev);
              setVerbalIdentificationText(
                isVerbalIdentificationOpen ? (
                  <p className="">ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ</p>
                ) : (
                  <p className="font-[bakemonoTextLight] text-[20px]">
                    ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ //
                  </p>
                )
              );
            }}
            className="w-[100%] font-[bakemonoTextMedium] text-left py-[53px] "
          >
            {verbalIdentificationText}
          </button>
          <div
            style={{
              maxHeight: isVerbalIdentificationOpen ? `1033px` : "0px",
              marginBottom: isVerbalIdentificationOpen ? "53px" : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular]`}
          >
            <div
              style={{
                visibility: isVerbalIdentificationOpen ? "visible" : "hidden",
              }}
              className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
            >
              <div className={styles.content3}>
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
              <div className={styles.content4}>
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
              <div className={styles.content5}>
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
            </div>
            <Image
              className="mr-[127px] mb-[83px] float-right"
              src={VerbalIdentification}
              alt="image"
            />
            <div className="clear-right flex font-[400] justify-between ">
              <div className="w-[576px] text-[28px]">
                <p className=" ">
                  Создаем собственный язык общения бренда с аудиторией, который
                  вызовет эмоции и запомнится.
                </p>
              </div>
              <div className="flex text-[28px] w-[365px] flex-col gap-[57px]">
                <p>Нейминг</p>

                <p>Дескриптор</p>

                <p>Слоган</p>

                <p>Речевой портрет</p>

                <button
                  onClick={scrollToElement}
                  className="mt-[19px] pb-[24px] px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-black border-t-[3px] relative">
          <button
            onClick={() => {
              setVisualIdentificationOpen((prev) => !prev);
              setVisualIdentificationText(
                isVisualIdentificationOpen ? (
                  <p className="">ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ</p>
                ) : (
                  <p className="font-[bakemonoTextLight] text-[20px]">
                    ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ //
                  </p>
                )
              );
            }}
            className="w-[100%] font-[bakemonoTextMedium] text-left py-[53px] "
          >
            {visualIdentificationText}
          </button>
          <div
            style={{
              maxHeight: isVisualIdentificationOpen ? `1230px` : "0px",
              marginBottom: isVisualIdentificationOpen ? "53px" : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular]`}
          >
            <div
              style={{
                visibility: isVisualIdentificationOpen ? "visible" : "hidden",
              }}
              className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
            >
              <div className={styles.content6}>
                ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
              <div className={styles.content7}>
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
              <div className={styles.content8}>
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{"<->"}
                ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                {"<->"}
              </div>
            </div>
            <Image
              className="mr-[127px] mb-[83px] float-right"
              src={VisualIdentification}
              alt="image"
            />
            <div className="clear-right flex font-[400] justify-between ">
              <div className="w-[576px] flex flex-col gap-5 text-[28px]">
                <p className=" ">
                  Создаем комплексный визуальный образ бренда, транслирующий
                  эмоциональные и рациональные ценности.{" "}
                </p>
                <p>
                  Даем подробное руководство по использованию во всех ситуациях
                  и прорабатываем все элементы стиля.
                </p>
              </div>
              <div className="flex text-[28px] w-[365px] flex-col gap-[30px]">
                <p>Логотип</p>
                <p>Цветовая гамма</p>
                <p>Шрифты и основа типографики </p>
                <p>Фон, паттерн, орнамент</p>
                <p>Графические элементы</p>
                <p>Инфографика, условные обозначения</p>
                <p>Стилистика иллюстраций/фотографий</p>

                <button
                  onClick={scrollToElement}
                  className="mt-[19px]  px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-black border-t-[3px] relative">
          <button
            onClick={() => {
              setEvlolutionAndSupportOpen((prev) => !prev);
              setEvlolutionAndSupportText(
                isEvlolutionAndSupportOpen ? (
                  <p className="">РАЗВИТИЕ И ПОДДЕРЖКА</p>
                ) : (
                  <p className="font-[bakemonoTextLight] text-[20px]">
                    РАЗВИТИЕ И ПОДДЕРЖКА //
                  </p>
                )
              );
            }}
            className="w-[100%] font-[bakemonoTextMedium] text-left py-[53px] "
          >
            {isEvlolutionAndSupportText}
          </button>
          <div
            style={{
              maxHeight: isEvlolutionAndSupportOpen ? `1230px` : "0px",
              paddingBottom: isEvlolutionAndSupportOpen ? "53px" : "0px",
            }}
            className={`${styles.accordeonBody} font-[bakemonoStereoRegular] border-b-[3px] border-black`}
          >
            <div
              style={{
                visibility: isEvlolutionAndSupportOpen ? "visible" : "hidden",
              }}
              className={`${styles.marquee} font-[bakemonoStereoBold] font-[48]`}
            >
              <div className={styles.content6}>
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
              </div>
              <div className={styles.content7}>
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
              </div>
              <div className={styles.content8}>
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}РАЗВИТИЕ И ПОДДЕРЖКА{"<->"}
                РАЗВИТИЕ И ПОДДЕРЖКА
                {"<->"}
              </div>
            </div>
            <Image
              className="mr-[127px] mb-[83px] float-right"
              src={EvlolutionAndSupport}
              alt="image"
            />
            <div className="clear-right flex font-[400] justify-between ">
              <div className="w-[576px] flex flex-col gap-5 text-[28px]">
                <p className=" ">
                  Продвигаем и поддерживаем проекты, которые создавали.
                </p>
              </div>
              <div className="flex text-[28px] w-[365px] flex-col gap-[30px]">
                <p>Коммуникационная стратегия</p>
                <p>Рекламная компания</p>
                <p>Разработка сайта</p>
                <p>Имеджевое, рекламное, презентационное видео</p>
                <p>Оформление презентаций</p>
                <button
                  onClick={scrollToElement}
                  className="mt-[19px]  px-[40px] text-white bg-black py-[19px]"
                >
                  Обсудить задачу
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
