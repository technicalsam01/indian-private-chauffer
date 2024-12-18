 // @ts-nocheck 
"use client"
import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import TabFeatures2 from '@/components/Home1/TabFeatures2'
import '../../stylesGlobals/globals.css'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
import Cars from "@/components/Home1/cars"
import YoutubeVideo from "@/components/Home1/youtube"
import Package from '@/components/Product/packege'

export default function Home() {
  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>
      {/* <Special/> */}
      <Package/>
      <Testimonial data={testimonialData} limit={10} />
      <Cars/>
      {/* <Collection /> */}
      {/* <TabFeatures data={productData} start={0} limit={6} /> */}
      <TabFeatures2/>
      {/* <Banner /> */}
      {/* <Benefit props="md:py-20 py-10" /> */}
      <YoutubeVideo/>
      {/* <Instagram /> */}
      {/* <Instagram /> */}
      {/* <Brand /> */}
      <Footer />
      <ModalNewsletter />

      {/* Global CSS for Smooth Scrolling */}
      
    </>
  )
}
