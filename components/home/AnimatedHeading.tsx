import { 
  Heading, 
  keyframes 
} from '@chakra-ui/react';
import React from 'react';

interface IAnimatedHeading{
  children?: React.ReactNode;
}

export const AnimatedHeading: React.FC<IAnimatedHeading> = ({children}) => {
  const colors = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
  `
  return (
    <Heading 
      fontSize={{base:'6xl', md:'8xl'}} 
      mb={4} 
      animation={`${colors} 7.5s linear infinite`}
      backgroundImage={'linear-gradient(30deg,#cf5c5c,#c19b4a,#def2a0,#c6ee4a,#42eca6,#64b3d9,#208ea2,#498ada,#5b73df,#897ed3,#cf5c5c,#c19b4a)'}
      backgroundSize={`1100% 100%`}
      position={'inherit'}
      bgClip={{base: 'text', md: undefined}}
      fontWeight='bold'
      >
      {children}
    </Heading>
  )
}
