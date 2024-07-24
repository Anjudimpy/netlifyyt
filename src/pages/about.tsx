import AboutBottom from '@/components/About/AboutBottom'
import AboutTestimonial from '@/components/About/AboutTestimonial'
import AboutTop from '@/components/About/AboutTop'
import Features from '@/components/About/Features'
import RippleEffect from '@/components/RippleEffect'
import React from 'react'

const about = () => {
  return (
    <div className='bg-white'>
      <AboutTop/>
      <AboutBottom/>
      <RippleEffect/>
      <Features/>
      <AboutTestimonial/>
    </div>
  )
}

export default about
