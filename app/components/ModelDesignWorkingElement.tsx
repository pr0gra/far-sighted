"useclient";
import Image from "next/image";
import { useState } from "react";

interface props {
  sliderElem: any;

}

type sliderElem = {cover: any; image: any;}

export function ModelDesignWorkingElement({ sliderElem }: props) {
  const [isCoverHide, setIsCoverHide] = useState(false);

  return (
    <Image
      onClick={() => {
        setIsCoverHide(true);
      }}
      className="w-[326px]"
      style={{cursor: isCoverHide ? "" : "pointer" }}
      src={isCoverHide ? sliderElem.image : sliderElem.cover}
      alt="img"
    />
  );
}
