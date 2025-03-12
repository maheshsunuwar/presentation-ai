"use client"

import { motion, Variants } from "framer-motion"

function LoadingThreeDotsJumping() {
    const dotVariants: Variants = {
        jump: {
            y: -5,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #ff0088;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default LoadingThreeDotsJumping
