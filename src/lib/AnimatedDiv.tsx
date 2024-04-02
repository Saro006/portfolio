import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
interface Props {
    children: JSX.Element
}
const AnimatedDiv = ({ children }: Props) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControl = useAnimation()
    const slideControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start('visible')
            slideControl.start('visible')
        }
    }, [isInView])
    return (
        <div ref={ref} className='relative w-auto overflow-hidden'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 70 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
            variants={{
                hideen:{left:0},
                visible:{left:"100%"}
            }}
            initial="hidden"
            animate={slideControl}
            transition={{duration:0.5,ease:"easeIn"}}
            className='absolute top-4 bottom-0 left-0 right-0 bg-primary z-20'
            />
        </div>
    );
};

export default AnimatedDiv;
