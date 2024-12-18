import React from 'react'

function Brand() {
  return (
    <div className="w-full bg-primaryColor flex flex-wrap justify-around items-center gap-2 p-4 mt-8">
    <img
      src="./assets/hm.png"
      alt="Hm Logo"
      className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%] h-[60px] object-contain"
    />
    <img
      src="./assets/obey.png"
      alt="Obey Logo"
      className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[100px] object-contain"
    />
    <img
      src="./assets/shopify.png"
      alt="Shopify Logo"
      className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
    />
    <img
      src="./assets/lacoste.png"
      alt="Lacoste Logo"
      className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[60px] object-contain"
    />
   
    <img
      src="./assets/amazon.png"
      alt="Amazon Logo"
      className="w-full sm:w-[45%] md:w-[10%] lg:w-[18%]  h-[90px] object-contain"
    />
  </div>
  
  )
}

export default Brand
