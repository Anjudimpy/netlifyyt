import AboutBottom from '@/components/About/AboutBottom'
import AboutTop from '@/components/About/AboutTop'
import Features from '@/components/About/Features'
import RippleEffect from '@/components/RippleEffect'
import React from 'react'

const about = () => {
  return (
    <div>
      <AboutTop/>
      <AboutBottom/>
      <RippleEffect/>
      <Features/>
    </div>
  )
}

export default about
