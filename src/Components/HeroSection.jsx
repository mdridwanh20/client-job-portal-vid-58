import React from 'react'
import { motion } from "motion/react"
import { easeOut } from 'motion'
import imgOne from '../assets/heroSection (1).jpg'
import imgTwo from '../assets/heroSection (2).jpg'


export default function HeroSection() {



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content  flex-col lg:flex-row-reverse">

                    <div className='flex-1'>
                        
                        <motion.img 
                        animate={{y: [50, 100, 50]}}
                        transition={{duration: 5, repeat: Infinity}}
                        className='w-72 rounded-t-[45px] rounded-br-[45px] border-b-8 border-l-8 border-green-500' src={imgTwo} />

                        <motion.img 
                        animate={{x: [50, 200, 50]}}
                        transition={{duration: 5, repeat: Infinity}}
                        className='w-72 rounded-t-[45px] rounded-br-[45px] border-b-8 border-l-8 border-green-500' src={imgTwo} />

                    </div>

                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold">The JobBox to Get Your New Job</h1>

                        <motion.h2
                            animate={{ x: [0, 50, 0], color:['#0FEAC9', '#F110CC', '#3212FF']}}
                            transition={{duration: 5, delay: 1, ease: easeOut, repeat: Infinity}}
                            className='text-3xl font-bold'>
                            JobBox
                        </motion.h2>

                        <p className="py-6">
                            Each month, more than 3 million job seekers turn to
                            website in their search for work, making over 140,000
                            applications every single day
                        </p>

                        <button className="btn btn-primary">Get Started</button>

                    </div>

                </div>
            </div>
        </div>
    )
}
