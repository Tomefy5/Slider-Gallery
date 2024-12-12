import { useState } from "react";
import "./App.css";
import ButtonSlider from "./components/ButtonSlider";
import Slider from "./components/Slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ListImagesSlider from "./data/list-image-slider.json"

function App() {

  const [sliderCurrentIndex, setSliderIndex] = useState(1)

  const slideHandler = (btnValue) => {
    let newValue;
    if(sliderCurrentIndex + btnValue > ListImagesSlider.length) {
      newValue = 1
    } else if (sliderCurrentIndex + btnValue < 1) {
      newValue = ListImagesSlider.length
    } else {
      newValue = sliderCurrentIndex + btnValue
    }

    setSliderIndex(newValue)
  }

  return (
    <div className="absolute bg-blue-950 w-full h-full">
      <h1 className="text-blue-300 text-xl md:text-2xl lg:text-4xl font-medium text-center mt-10">
        Manual And Automatic Slider
      </h1>
      <h2 className="text-blue-100 font-bold text-md md:text-lg lg:text-xl text-center m-8">{`${sliderCurrentIndex} / ${ListImagesSlider.length}`}</h2>
      <div className="flex justify-center items-center">
        <ButtonSlider Icon={ChevronLeft} slideHandler={() => slideHandler(-1)} />
        <Slider urlCurrentImage={ListImagesSlider[sliderCurrentIndex - 1].url} />
        <ButtonSlider Icon={ChevronRight} slideHandler={() => slideHandler(1)}/>
      </div>
    </div>
  );
}

export default App;
