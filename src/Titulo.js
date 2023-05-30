import React, { useEffect, useState } from 'react'
import "./App.css"
import { motion } from 'framer-motion'

export const Titulo = () => {
    const [posicionMouse, setPosicionMouse] = useState({
        x: 0,
        y: 0,
    })
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect(() => {
        const mouseMove = e =>{
            setPosicionMouse({
                x: e.clientX,
                y: e.clientY
            })
        } 
        window.addEventListener("mousemove", mouseMove)
        return () =>{
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
      default: {
        x: posicionMouse.x - 25,
        y: posicionMouse.y - 25,
      },
      text: {
        height: 200,
        width: 200,
        x: posicionMouse.x - 100,
        y: posicionMouse.y - 100,
        backgroundColor: "white",
        mixBlendMode: "difference",
      },
    };
    const textoEnter = () => setCursorVariant("text")
    const textoLeave = () => setCursorVariant("default");
    return (
        <div className='titulo'>
            <h1 onMouseEnter={textoEnter} onMouseLeave={textoLeave} className='titulo-h1'>Just Starting.</h1>
            <motion.div 
                className='titulo-cursor'
                variants={variants}
                animate={cursorVariant}
            />
        </div>
  );
}
