interface BarberBoxProps {
  name: string;
  imageSrc: string;
  info: string;
}


const BarberBox = ({name, info, imageSrc }:BarberBoxProps ) => {
  return (
    <div className="flex flex-col justify-center items-center border border-white p-4 rounded-lg  w-[350px] bg-opacity-80 bg-white backdrop-blur-sm animate-slideup cursor-pointer">
      <h2 className="text-black text-2xl font-poppins font-bold leading-2 my-4">
        {`MEET ${name}`}
      </h2>
      <div className="flex justify-center px-2 gap-4 w-[250px]">

         <p className=' flex flex-1 justify-end items-center font-montserrat text-gray-700 text-lg leading-6 mt-6 mb-14 sm:max-w-sm'>
           {info}
         </p>
      <img src={imageSrc} alt='barber' className='flex-1 object-contain w-[150px]'/>
        </div>
    </div>
  )
}

export default BarberBox