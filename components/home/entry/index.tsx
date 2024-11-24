'use client';
import useTransform from '@/hooks/useTransform';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const HomeEntrySection = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const handleTransform = useTransform({yProgress: scrollYProgress});

    return (
        <motion.section
            ref={targetRef}
            className="h-[500vh] relative bg-background text-neutral-100"
        >
            <div className="h-screen sticky top-0">
                <div className="relative h-full overflow-hidden text-2xl sm:text-4xl md:text-6xl xl:text-8xl grid place-items-center font-semibold">
                    <motion.div
                        style={{
                            opacity: handleTransform([.2, .4], [1, 0]),
                            translateY: handleTransform([.2, .4], ['0', '-200%'])
                        }} 
                        className="absolute top-8 left-[1rem] sm:left-[2rem] md:left-[3rem] lg:left-[4rem] xl:left-[5rem] 2xl:left-[6rem]"
                    >
                        <h2> Lorem, ipsum. </h2>
                        <h2 className='text-emerald-400'> Lorem, ipsum dolor. </h2>
                    </motion.div>

                    <motion.h1 
                        style={{
                            opacity: handleTransform([.2, .4], [1, 0]),
                            translateY: handleTransform([.2, .4], ['0', '200%'])
                        }} 
                        className="absolute bottom-8 text-end right-[1rem] sm:right-[2rem] md:right-[3rem] lg:right-[4rem] xl:right-[5rem] 2xl:right-[6rem]"
                    > Lorem ipsum dolor sit. </motion.h1>

                    <motion.div
                        style={{
                            opacity: handleTransform([.2, .4], [0, 1]),
                            scale: handleTransform([.3, 1], [1, 200]),
                            translateY: handleTransform([.4, 1], ['0%', '0%']),
                            translateX: handleTransform([.4, .6], ['0%', '-50%']),
                            originY: '20%'
                        }} 
                        className='text-center font-extrabold font-monsterrat w-fit'
                    >
                        <h1> ENTER </h1>
                        <h2> GALLERY </h2> 
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default HomeEntrySection