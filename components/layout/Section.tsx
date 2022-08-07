import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import React from 'react'

const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop:any) => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface ISection{
  children: React.ReactNode;
  delay?: number;
}

export const Section: React.FC<ISection> = ({children, delay = 0}) => (
  <MotionBox
    initial={{ y: 50, opacity: 0 }}
    exit={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    //@ts-ignore
    transition={{ duration: 0.5, delay: delay, type: 'easeInOut' }}
    mb={6}
  >
    {children}
  </MotionBox>
)