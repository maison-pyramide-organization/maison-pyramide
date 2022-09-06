import React from 'react'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: 0, y: 500 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
}

const Layout = ({ children }) => (
    <div>
        {/* <NextSeo title={title} description={description} openGraph={{ title, description }} /> */}
        
       

            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 1.5, ease: "easeInOut",type: 'linear' }}

            >
                {children}
            </motion.div>
        

    </div>
)

export default Layout;