import { useState } from "react";
import { useSelector } from "react-redux";

function Carousel() {
  const content = useSelector((state) => state.ui.content);
  const [firstSlide, setFirstSlide] = useState(0);
  const init = content.carousel.desktop;

  function handleCurrentImage(slide) {
    if (slide === "next") {
      if (firstSlide === init.length - 1) {
        return setFirstSlide(0);
      }
      return setFirstSlide(firstSlide + 1);
    }
    if (slide === "prev") {
      if (firstSlide === 0) {
        return setFirstSlide(init.length - 1);
      }
      return setFirstSlide(firstSlide - 1);
    }
  }

  return (
    <div className="relative  w-[100%] ">
      <div className=" overflow-hidden ">
        <img
          id="1"
          className="object-cover w-[100%] "
          src={init[firstSlide].src}
          alt={init[firstSlide].alt}
        />
      </div>
      <div
        className="absolute inset-y-[45%] right-[5%] w-[7%] h-fit "
        onClick={() => handleCurrentImage("next")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </div>
      <div
        className="absolute inset-y-[55%] right-[5%] w-[7%] h-fit "
        onClick={() => handleCurrentImage("prev")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
