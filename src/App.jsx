import { useEffect, useState } from "react";
import "./App.css";
import ButtonSlider from "./components/ButtonSlider";
import Slider from "./components/Slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListImagesSlider from "./data/list-image-slider.json"

function App() {

  const [sliderCurrentIndex, setSliderIndex] = useState(0)
  const [sliderAutoCurrentIndex, setSliderAutoIndex] = useState(0)

  const slideHandler = (direction) => {
    setSliderIndex((prevIndex) => (
      (prevIndex + direction + ListImagesSlider.length) % ListImagesSlider.length
    ))
  }

  const slideAutoHandler = (direction) => {
    setSliderAutoIndex((prevIndex) => (
      (prevIndex + direction + ListImagesSlider.length) % ListImagesSlider.length
    ))
  }

  useEffect(() => {
    const autoSlide = setInterval(() => {
      slideAutoHandler(1)
    },3000)

    return () => clearInterval(autoSlide)
  },[])

  return (
    <div className="absolute bg-blue-950 w-full h-auto pb-10 min-h-[100vh]">
      <h1 className="text-blue-300 text-xl md:text-2xl lg:text-4xl font-medium text-center mt-10">
        Manual Slider
      </h1>
      <h2 className="text-blue-100 font-bold text-md md:text-lg lg:text-xl text-center m-8">{`${sliderCurrentIndex + 1} / ${ListImagesSlider.length}`}</h2>
      <div className="flex justify-center items-center">
        <ButtonSlider Icon={ChevronLeft} slideHandler={() => slideHandler(-1)} />
        <Slider urlCurrentImage={ListImagesSlider[sliderCurrentIndex].url} />
        <ButtonSlider Icon={ChevronRight} slideHandler={() => slideHandler(1)}/>
      </div>

      <h1 className="text-blue-300 text-xl md:text-2xl lg:text-4xl font-medium text-center mt-10">
        Automatic Slider
      </h1>
      <h2 className="text-blue-100 font-bold text-md md:text-lg lg:text-xl text-center m-8">{`${sliderAutoCurrentIndex + 1} / ${ListImagesSlider.length}`}</h2>
      <div className="flex justify-center items-center mt-6">
        <ButtonSlider Icon={ChevronLeft} slideHandler={() => slideAutoHandler(-1)} />
        <Slider urlCurrentImage={ListImagesSlider[sliderAutoCurrentIndex].url} />
        <ButtonSlider Icon={ChevronRight} slideHandler={() => slideAutoHandler(1)}/>
      </div>
    </div>
  );
}

export default App;
