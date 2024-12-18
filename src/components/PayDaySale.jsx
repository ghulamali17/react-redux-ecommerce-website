import React from 'react'
import Button from './Button'

function PayDaySale() {
  return (
    <div>
      <section className='bg-primaryColor font-poppins max-w-[1300px] mx-auto mt-10 md:px-[50px] md:py-[60px] xs:px-[18px] xs:py-[20px]'>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1">
            <div className="left-content">
                <img src="./assets/hero.png" alt="" className='md:h-[600px] w-full object-contain' />
            </div>
            <div className="right-content md:mt-0 xs:mt-3">
            <h1 className="font-poppins font-bold md:text-7xl xs:text-5xl leading-tight">
              <span className="block bg-white p-3 md:p-4 rounded-sm">
               PAYDAY
              </span>
              <span className="block  p-3 md:p-4 rounded-sm">
                SALE NOW
              </span>
            </h1>
            <p><span className='block text-2xl'>Spend minimal $100 get 30% off</span>
            <span className='block text-2xl'>voucher code for your next purchase</span></p>
            <h3 className='mt-4 font-bold text-2xl'>1 June - 10 June 2021</h3>
            <p className='text-2xl'>*Terms & Conditions apply</p>
            <Button title={'SHOP NOW'} classname={"bg-black text-center p-3 text-white mt-6 hover:bg-gray-800"}/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PayDaySale
