import imageSlider from '../assets/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg'

export default function Slider() {
  return (
    <div className='mx-auto rounded overflow-hidden w-[300px] h-auto relative bg-blue-800 '>
      <img className='object-cover aspect-auto' src={imageSlider} alt="animal in snow" />
    </div>
  )
}
