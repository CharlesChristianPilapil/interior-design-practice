'use client';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';

const SmoothScroll = () => {

    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e: number) => {
          console.log(e)
        })
        
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, [])

    return null
}
export default SmoothScroll