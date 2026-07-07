import React from 'react'
// import logo from "/pics/img1.jpg";
function Lect3() 
{
  // Check Ring,active,focus Property in button styling
  return (
    <div class="border   py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:py-10 sm:gap-x-6">
  {/* <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={"hii"} alt="Woman's Face" /> */}
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600
     font-semibold rounded-full border border-purple-200 
     hover:text-white hover:bg-purple-600 hover:border-transparent 
     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
     active:bg-yellow-300 active:text-black">Message</button>
  </div>
</div>
  )
}

export default Lect3