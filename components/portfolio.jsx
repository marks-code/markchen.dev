'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'
import Lottie from 'lottie-react'

import arrowAnimation from './animations/downarrow.json'

export default function PortfolioComponent() {

  return (

    <div className="w-full min-h-screen bg-[#FFFFFF] text-gray-800">
      <div className="text-center flex flex-col justify-center items-center h-screen">
        <p className="text-9xl font-bold font-sans text-black">Hi, I'm Mark.</p>
        <p className="text-2xl font-semibold pt-8 text-gray-700">I'm a software developer based in Ottawa. I enjoy coding and building things that make a difference people's lives.</p>
        <p className="text-black text-lg absolute bottom-32">View more</p>
        <Lottie animationData={arrowAnimation} loop={true} autoplay={true} className="w-16 h-16 absolute bottom-16" />

      </div>



    </div>

  )
}
