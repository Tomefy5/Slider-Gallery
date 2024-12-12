import imageSlider from '../assets/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg'

export default function Slider() {
  return (
    <div className='rounded overflow-hidden w-[280px] md:w-[400px] lg:w-[540px] h-auto relative bg-blue-800 mx-4 md:mx-8 lg:mx-12'>
      <img className='object-cover aspect-auto' src={imageSlider} alt="animal in snow" />
    </div>
  )
}
