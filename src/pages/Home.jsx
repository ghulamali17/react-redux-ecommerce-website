import React from 'react'
import Brand from '../components/brand'
import Hero from '../components/Hero/Hero'
import NewArrival from '../components/NewArrival'
import PayDaySale from '../components/PayDaySale'
import YoungFav from '../components/YoungFav'
import DownloadApp from '../components/DownloadApp'
import  Form  from '../components/Form'

function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <NewArrival/>
      <PayDaySale/>
      <YoungFav/>
      <DownloadApp/>
      <Form/>
    </div>
  )
}

export default Home
