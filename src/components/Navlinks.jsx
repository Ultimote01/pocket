"use client"

import { useRef, useState} from 'react'
import Link from 'next/link'
import { AnimatePresence , motion } from 'framer-motion'


import "@/styles/navlinks.css"

export function NavLinks (){
    let [hoveredIndex, setHoveredIndex]= useState(null)
    let  timeoutRef = useRef(null)
 
    return [
        ["Features", "/#features"],
        ["Reviews","/#reviews"],
        ["Pricing", "/#pricing"],
        ["FAQs", "/#faqs"]
    ].map(([label,href], index)=>(
        <Link   
            key={label}
            href={href}
            className="navlinks-link"
            onMouseEnter={()=>{
                if (timeoutRef.current){
                    window.clearTimeout(timeoutRef.current)
                }
                setHoveredIndex(index)
            }}
            onMouseLeave={()=>{
                timeoutRef.current=window.setTimeout(()=>{
                    setHoveredIndex(null)
                },200)
            }}
            >
                <AnimatePresence>
                    {hoveredIndex === index && (
                        <motion.span
                        className="navlinks-motionspan"
                        layoutId="hoverBackground"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration : 0.15}}}
                        exit={{
                            opacity : 0,
                            transition : {duration : 0.15}
                        }}
                        />
                    ) }
                </AnimatePresence>
                <span style={{position:'relative', zIndex:'10'}}>{label}</span>
            </Link>
    ))
}