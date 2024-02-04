"useclient";
import Image from "next/image";
import { useState } from "react";

import styles from "./ModelDesignWorkingElement.module.css";

interface props {
  sliderElem: any;
}

type sliderElem = { cover: any; image: any };

export function ModelDesignWorkingElement({ sliderElem }: props) {
  const [isCoverHide, setIsCoverHide] = useState(false);

  return (
    <div className={styles.container}>
      <div
        style={{ transform: isCoverHide ? "rotateY(-180deg)" : "" }}
        className={styles.card}
      >
        <Image
          onClick={() => {
            setIsCoverHide((prev) => !prev);
          }}
          className={styles.card_front}
          src={sliderElem.cover}
          alt="img"
        />

        <Image
          onClick={() => {
            setIsCoverHide((prev) => !prev);
          }}
          className={styles.card_back}
          src={sliderElem.image}
          alt="img"
        />
      </div>
    </div>
  );
}
