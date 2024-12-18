export default function Slider({urlCurrentImage}) {
  return (
    <div className='rounded overflow-hidden w-[280px] md:w-[400px] lg:w-[540px] h- aspect-[3/2] relative bg-blue-800 mx-4 md:mx-8 lg:mx-12'>
      <img className='object-cover h-full' src={urlCurrentImage} alt="animal in snow" />
    </div>
  )
}
