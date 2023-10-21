import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import shirt1 from "../assets/shirts/1.svg";
import shirt2 from "../assets/shirts/2.svg";
import shirt3 from "../assets/shirts/3.svg";
import shirt4 from "../assets/shirts/4.svg";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} alt="Shirt 1" width={520} height={480} />
        <footer>
          <strong>Shirt 1</strong>
          <span>$ 69,99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} alt="Shirt 2" width={520} height={480} />
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} alt="Shirt 3" width={520} height={480} />
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt4} alt="Shirt 4" width={520} height={480} />
      </Product>
    </HomeContainer>
  );
}
