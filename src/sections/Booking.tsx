import Trial from './Trial';
import { useState, useTransition,useEffect } from 'react';

const Booking = () => {
 
/*   const [selectedTrial, setSelectedTrial] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTrialClick = (id) => {
    startTransition(() => {
      setSelectedTrial(id);
    });
  }; */

  
  //modal 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);
  
  //useStates for Form
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');


  //Handle form submission
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === '' || email === '' || date === ''  || time === '' ) {
      alert('Please fill out all fields');
    } else {
      setShowModal(!showModal);
    }
    }
    
  
  return (
    <section id='booking' className=" flex xl:flex-row flex-col justify-evenly min-h-screen gap-10 max-container">
      
          <div className=''>
            <h2 className='text-slate-gray text-4xl lg:text-6xl font-poppins font-bold leading-2 my-10'>Book Now</h2>
          </div>
          {/*<div className='flex justify-center items-center'>
            <Trial title='Trial' isSelected={selectedTrial === 'skills'} change={()=> handleTrialClick('skills') } />
            <Trial title='Trial' isSelected={selectedTrial === 'trial'}  change={()=> handleTrialClick('trial')}/>
          </div>*/}
          <form>
            <div className='mb-8 lg:mb-10'>
              <label htmlFor="name" className="text-xl block mb-2 text-sea-green font-poppins font-bold">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-white rounded-xl bg-gray-500 hover:border-sea-green" onChange={handleName} required placeholder='Enter your name'/>
            </div>
            <div  className='mb-8 lg:mb-10'>
                <label htmlFor="email" className="text-xl block mb-2 text-sea-green font-poppins font-bold">Email</label>
                <input type="text" id="email" className="w-full p-2 border border-white rounded-xl bg-gray-500 hover:border-sea-green" onChange={handleEmail} required placeholder='John@abc.com'/>
            </div>
            <div  className='mb-8 lg:mb-10'>
              <label htmlFor='date' className='text-xl block mb-2 text-sea-green font-poppins font-bold'>Date</label>
              <input type="date" id="date" className="w-full p-2 border border-white rounded-xl bg-gray-500 hover:border-sea-green"  onChange={handleDate} required />
            </div>
            <div  className='mb-8 lg:mb-10'>
              <label htmlFor='time' className='text-xl block mb-2 text-sea-green font-poppins font-bold'>Time</label>
                <input type='time' id='time' className='w-full p-2 border border-white rounded-xl bg-gray-500 hover:border-sea-green'  onChange={handleTime} required />
              </div>
              <div>
                  <button type='submit' className='w-full py-4 px-6 bg-sea-green text-white outline-none rounded-full border-2 hover:border-[#eb9534]' onClick={handleSubmit}>BOOK NOW</button>
              </div>
            </form>
      {
        showModal && (
          <div className='  h-screen w-screen fixed top-0 left-0 flex justify-center items-center bg-black opacity-[0.7]' onClick={handleSubmit}>
            <div className='flex justify-center items-center'>
                <p className='text-white text-2xl font-poppins font-bold leading-2 my-10'>
                  {name},
                  <span className='text-sea-green inline-block mt-3'>YOU ARE SUCCESSFULLY BOOKED</span> at {date}, {time}  
                  <br />
                  Please check your email for the confirmation.
                </p>
            </div>
            
             
          </div>
        )
      }
      
    </section>
  )
}

export default Booking;