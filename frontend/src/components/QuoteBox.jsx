import { Heading } from "./Heading";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import { useEffect, useState } from "react";

const images = [img1, img2, img3, img4];

export function QuoteBox() {
    const [currentIndex, setCurrentIndex ] = useState(0)

    useEffect(() => {
        const Interval = setInterval(() => {
            setCurrentIndex((prev) => 
            prev === images.length -1 ? 0 : prev + 1
            )
        },2000)
        return () => clearInterval(Interval)
    },[])

  return (
    <div className="w-full h-9/10 flex flex-col justify-center bg-white rounded-xl">
      <div className="w-full h-3/4 overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="mt-4 text-center px-4">
        <Heading label="“Your money, your control — powered by Qupay.”" />
      </div>
    </div>
  );
}
