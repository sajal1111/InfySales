import React from 'react'
// import logo from "/pics/img1.jpg";
function Jsg() {
  return (
    <div className='max-w-sm mx-auto border border-gray-[950] shadow-lg shadow-blue-200 flex md:flex-col  p-2 gap-3'>

        {/* <div className='border flex justify-center items-center w-20 md:mx-auto'>
          <img src={logo} className='w-10 h-10 rounded-full outline-1' alt="" />
        </div> */}
        <div className="p-2 space-y-2  md:mx-auto ">
          <h2>Its New Car will be launched soon</h2>
          <p className=' md:invisible text-gray-300 font-bold bg-purple-500 w-24 py-2 px-2 mx-auto rounded-xl'>
            Book Now
          </p>
          </div>
    </div>
  )
}

export default Jsg;