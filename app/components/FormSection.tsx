import { useState } from "react";
import styles from "./FormSection.module.css";
import SpinningStaerEmailBlock from "../assets/images/spinnig-star-email-block.gif";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";

export function FormSection() {
  const [showErrors, setShowErrors] = useState(false);
  const basicSchema = yup.object().shape({
    name: yup.string().required("Это обязательное поле"),
    email: yup
      .string()
      .email("Введите корректный Email")
      .required("Это обязательное поле"),
    theme: yup.string().required("Это обязательное поле"),
    text: yup
      .string()
      .min(5, "Должно быть минимум 5 символов")
      .required("Это обязательное поле"),
    phoneNumber: yup.string().required("Это обязательное поле"),
  });
  function handleSubmitForm(e: any) {
    e.preventDefault();
    const serviceId = "service_gvxf5xq";
    const templateId = "template_5lx2vn6";
    const publicKey = "m1AHA8wE_ngCDOw9q";

    const templateParams = {
      name,
      theme,
      phoneNumber,
      email,
      text,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("ok", response);
        setName("");
        setTheme("");
        setPhoneNumber("");
        setEmail("");
        setText("");
      })
      .catch((e) => console.log(e));
  }

  const { values, errors, touched, isSubmitting, handleChange } = useFormik({
    initialValues: {
      name: "",
      email: "",
      theme: "",
      text: "",
      phoneNumber: "",
    },
    validationSchema: basicSchema,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowErrors(true);
  };
  // console.log(values, errors, showErrors);
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  return (
    <section className="pb-[100px] font-[bakemonoStereoRegular]  pt-[200px] text-black bg-white flex">
      <div className="w-[1225px] my-0 mx-auto ">
        <div className="grid grid-cols-[auto_745px]">
          <div id="email">
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
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col text-[28px] gap-[64px]`}
              action=""
            >
              <div>
                <input
                  onChange={handleChange}
                  className="w-[100%] py-[10px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                  placeholder="/как к вам обращаться?"
                  type="text"
                  id="name"
                  value={values.name}
                />
                <div className="text-[#C62068]">
                  <p>{showErrors && errors.name}</p>
                </div>
              </div>
              <div>
                <input
                  onChange={handleChange}
                  className="py-[10px] w-[100%] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                  placeholder="/тема разговора"
                  type="text"
                  id="theme"
                  value={values.theme}
                />
                <div className="text-[#C62068]">
                  <p>{showErrors && errors.theme}</p>
                </div>
              </div>
              <div>
                <input
                  onChange={handleChange}
                  className="py-[10px] w-[100%] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                  placeholder="/телефон"
                  type="phoneNumber"
                  id="phoneNumber"
                  value={values.phoneNumber}
                />
                <div className="text-[#C62068]">
                  <p>{showErrors && errors.phoneNumber}</p>
                </div>
              </div>
              <div>
                <input
                  onChange={handleChange}
                  className="py-[10px] w-[100%] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                  placeholder="/почта"
                  type="text"
                  id="email"
                />
                <div className="text-[#C62068]">
                  <p>{showErrors && errors.email}</p>
                </div>
              </div>
              <div>
                <textarea
                  className="py-[10px] w-[100%] px-[19px] h-[221px] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
                  placeholder="/расскажите о вашей задаче"
                  id="text"
                  typeof="text"
                  onChange={handleChange}
                ></textarea>
                <div className="text-[#C62068]">
                  <p>{showErrors && errors.text}</p>
                </div>
              </div>
              <button
                type="submit"
                className="py-[10px] font-[bakemonoStereoMedium] bg-[var(--adaptive-white-to-black)] placeholder-[var(--adaptive-black-to-white)] text-[var(--adaptive-black-to-white)] px-[19px] border-[2px] border-[var(--adaptive-black-to-white)] rounded-[13px]"
              >
                отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
