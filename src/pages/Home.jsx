import React from 'react'
import Brand from '../components/brand'
import Hero from '../components/Hero/Hero'
import NewArrival from '../components/NewArrival'
import PayDaySale from '../components/PayDaySale'

function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <NewArrival/>
      <PayDaySale/>
    </div>
  )
}

export default Home
