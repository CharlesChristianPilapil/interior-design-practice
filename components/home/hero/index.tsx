'use client';
import NavBar from "@/components/navbar";
import CityParallax from "@/components/parallax-component/city";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SmoothScroll from "@/components/smooth-scroll";

const HomeHeroSection = () => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <header>
            <motion.div ref={targetRef} className="h-[300vh] w-full relative">
                <SmoothScroll />
                <NavBar />
                <CityParallax yProgress={scrollYProgress} />
            </motion.div>
        </header>
    );
};

export default HomeHeroSection;
