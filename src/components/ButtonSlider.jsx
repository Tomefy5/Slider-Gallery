export default function ButtonSlider({Icon,slideHandler}) {
  return (
    <button onClick={() => slideHandler()} className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 h-8 md:h-10 w-8 md:w-10 rounded-[50%] flex justify-center items-center cursor-pointer">
        <Icon className="h-[50%]"/>    
    </button>
  )
}
