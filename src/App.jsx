import './App.css'
import Slider from './components/Slider'

function App() {
 

  return (
    <div className="absolute bg-blue-950 w-full h-full">
      <h1 className='text-blue-300 text-xl lg:text-4xl font-medium text-center mt-10'>Manual And Automatic Slider</h1>
      <h2 className='text-blue-100 font-bold text-md lg:text-xl text-center m-8'>2/5</h2>
      <Slider/>
    </div>
  )
}

export default App
