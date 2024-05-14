import images from '../constants/images';
import BarberBox from '../components/BarberBox';

const About = () => {
  return (
    <section className='bg-[#2f2f2f] w-full h-full flex flex-col justify-center items-center max-container py-8'>
      <h1 className="text-white text-4xl font-poppins font-bold leading-2 my-10">Meet Our <span className='text-sea-green inline-block mt-3'>Barbers</span></h1>
      <div className='flex flex-wrap justify-center items-center gap-10 max-w-xl'>
        {/*Barber Cards*/}
        <BarberBox name='MOE' info= "Looking for that perfect look? Book with Moe, a highly experienced barber with a passion and unmatched knowledge of his craft." imageSrc={images.Barber}/>

        <BarberBox name='KEVIN' info= "Looking for that perfect look? Book with Kevin, a highly experienced barber with a passion and unmatched knowledge of his craft." imageSrc={images.Barber2i}/>

        
      </div>

      
      
    </section>
  )
}

export default About