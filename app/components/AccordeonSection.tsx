"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./AccordeonSection.module.css";
import BrandStrategy from "../assets/images/brand-strategy.svg";
import VisualIdentification from "../assets/images/visual-identification.svg";
import VerbalIdentification from "../assets/images/verbal-identification.svg";
import EvlolutionAndSupport from "../assets/images/evolution-and-support.svg";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Marquee from "react-fast-marquee";
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
        <div className="w-[900px] my-0 ml-auto mr-0">
          <div className=" border-black border-t-[3px] relative">
            <button
              onClick={() => {
                setIsBrandStrategyOpen((prev) => !prev);
                setBrandStrategyOpenText(
                  isBrandStrategyOpen ? (
                    <p className="">БРЕНД СТРАТЕГИЯ</p>
                  ) : (
                    <>
                      <Marquee speed={200}>
                        <p className="font-[bakemonoStereoBold]">
                          БРЕНД СТРАТЕГИЯ{`<->`}БРЕНД СТРАТЕГИЯ
                          {`<->`}БРЕНД СТРАТЕГИЯ{`<->`}БРЕНД СТРАТЕГИЯ БРЕНД
                          СТРАТЕГИЯ
                          {`<->`}
                        </p>
                      </Marquee>
                    </>
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
              <div className="clear-right leading-[32px] flex font-[400] justify-between ">
                <div className="w-[500px] text-[22px]">
                  <p className=" ">
                    Создаем целостное видение <br /> по развитию вашего бренда с учетом
                    сильных сторон компании/продукта, рыночной ситуации,
                    потребительских инсайтов и конкурентной среды.
                  </p>
                </div>
                <div className="flex font-[bakemonoStereoMedium] text-[22px] w-[365px] flex-col gap-[25px]">
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
                    <p className="font-[bakemonoStereoBold]">
                      <Marquee speed={200}>
                        ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{`<->`}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                        {`<->`}ВЕРБАЛЬНАЯ ИДЕНТИФИКАЦИЯ{`<->`}ВЕРБАЛЬНАЯ
                        ИДЕНТИФИКАЦИЯ
                        {`<->`}
                      </Marquee>
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
              ></div>
              <Image
                className="mr-[127px] mb-[83px] float-right"
                src={VerbalIdentification}
                alt="image"
              />
              <div className="clear-right leading-[32px] flex font-[400] justify-between ">
                <div className="w-[500px] text-[22px]">
                  <p className=" ">
                    Создаем собственный язык общения бренда с аудиторией,
                    который вызовет эмоции <br /> и запомнится.
                  </p>
                </div>
                <div className="flex text-[22px] font-[bakemonoStereoMedium] w-[365px] flex-col gap-[25px]">
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
                    <p className="font-[bakemonoStereoBold]">
                      <Marquee speed={200}>
                        ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{`<->`}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ
                        {`<->`}ВИЗУАЛЬНАЯ ИДЕНТИФИКАЦИЯ{`<->`}ВИЗУАЛЬНАЯ
                        ИДЕНТИФИКАЦИЯ
                        {`<->`}
                      </Marquee>
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
              <Image
                className="mr-[127px] mb-[83px] float-right"
                src={VisualIdentification}
                alt="image"
              />
              <div className="clear-right flex font-[400] justify-between ">
                <div className="w-[500px] leading-[32px] flex flex-col gap-5 text-[22px]">
                  <p className=" ">
                    Создаем комплексный визуальный образ бренда, транслирующий
                    эмоциональные <br /> и рациональные ценности.{" "}
                  </p>
                  <p>
                    Даем подробное руководство <br /> по использованию во всех
                    ситуациях <br /> и прорабатываем все элементы стиля.
                  </p>
                </div>
                <div className="flex text-[22px] font-[bakemonoStereoMedium] w-[365px] flex-col gap-[25px]">
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
                    <p className="font-[bakemonoStereoBold]">
                      <Marquee speed={200}>
                        РАЗВИТИЕ И ПОДДЕРЖКА{`<->`}РАЗВИТИЕ И ПОДДЕРЖКА
                        {`<->`}РАЗВИТИЕ И ПОДДЕРЖКА{`<->`}РАЗВИТИЕ И ПОДДЕРЖКА
                        {`<->`}
                      </Marquee>
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
              <Image
                className="mr-[127px] mb-[83px] float-right"
                src={EvlolutionAndSupport}
                alt="image"
              />
              <div className="clear-right flex font-[400] justify-between ">
                <div className="w-[500px] leading-[32px] flex flex-col gap-5 text-[22px]">
                  <p className=" ">
                    Продвигаем и поддерживаем проекты, которые создавали.
                  </p>
                </div>
                <div className="flex text-[22px] font-[bakemonoStereoMedium] w-[365px] flex-col gap-[30px]">
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
      </div>
    </section>
  );
}
