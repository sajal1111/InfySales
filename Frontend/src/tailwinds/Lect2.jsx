import React from 'react'
// import logo from "/pics/img1.jpg";
function Lect2()
 {
    // Some Responsive Properties added here, check with resizing
  return(
    <div className='max-w-sm border mx-auto border-gray-200 shadow-sm shadow-blue-200 flex  p-2 gap-3 sm:flex sm:flex-col sm:items-center md:flex-row'>
        
        {/* <div className='border flex justify-center items-center w-16 '>
          <img src={logo} className='w-10 h-10 rounded-full outline-double' alt="" />
        </div> */}
        <div className="border  p-2 space-y-2 w-full ">
          <h2 className='md:text-left lg:text-right xl:invisible'>Its New Car will be...</h2>
          <p className='text-gray-300 font-bold bg-purple-500 w-24 py-1 px-2 mx-auto rounded-xl'>
            Book Now
          </p>
          
          </div>
          <div className=' md:max-2xl:invisible sm:visible '>Small</div>
    </div>
  )
}

export default Lect2;