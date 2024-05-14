import images from '../constants/images'


const Header = () => {
  return (
 
    <section id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-6'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-sea-green'>
          Our Latest Creations
        </p>

        <h1 className='mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold font-poppins'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Look Good
          </span>
          <br />
          <span className='text-sea-green inline-block mt-3'>Clean</span> Cuts
        </h1>
        <p className='font-montserrat text-gray-700 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish attractive cuts, quality comfort, and innovation for
          your active life.
        </p>
        <button className='py-4 px-6 bg-sea-green text-white outline-none rounded-full border-2 hover:border-[#eb9534]'><a href='#booking'>BOOK HERE</a></button>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40'>
        <img src={images.Fade} alt='Fade' className='object-contain z-10 relative'/>
      </div>
    </section>
  )
}


export default Header