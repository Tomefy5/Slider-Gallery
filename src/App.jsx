import "./App.css";
import ButtonSlider from "./components/ButtonSlider";
import Slider from "./components/Slider";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  return (
    <div className="absolute bg-blue-950 w-full h-full">
      <h1 className="text-blue-300 text-xl md:text-2xl lg:text-4xl font-medium text-center mt-10">
        Manual And Automatic Slider
      </h1>
      <h2 className="text-blue-100 font-bold text-md md:text-lg lg:text-xl text-center m-8">
        2/5
      </h2>
      <div className="flex justify-center items-center">
        <ButtonSlider Icon={ChevronLeft}/>
        <Slider />
        <ButtonSlider Icon={ChevronRight}/>
      </div>
    </div>
  );
}

export default App;
