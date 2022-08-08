import { Heading, HeadingProps, useBreakpointValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FontContext } from "../../context/FontSize";

interface IGradientHeading extends HeadingProps{
  children: string;
}

export const GradientHeading: React.FC<IGradientHeading> = (props) => {
  const { children, ...rest } = props;
  const { bigTitleFontSize } = useContext(FontContext);
  let gradient: string | undefined = '';
  //const gradient = useBreakpointValue({ base: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 50%, #00a6ff 100%)', md: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 30%, #00a6ff 70%)'})
  //const gradient2 = useBreakpointValue({base: 'linear-gradient(90deg, #ff00b8 0%, #ff9900 50%, #ff00b8 100%)', md: 'linear-gradient(90deg, #ff00b8 0%, #ff9900 50%, #ff00b8 100%);'})
  
  if (children.length > 20){
    gradient = useBreakpointValue({ base: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 80%, #00a6ff 120%)', md: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 30%, #00a6ff 60%)'})
  }
  else if (children.length > 10){
    gradient = useBreakpointValue({ base: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 65%, #00a6ff 85%)', md: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 30%, #00a6ff 60%)'})
  } else {
    gradient = useBreakpointValue({ base: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 50%, #00a6ff 100%)', md: 'linear-gradient(90deg, #00a2ff 0%, #bd00ff 30%, #00a6ff 70%)'})
  }

  return (
    <Heading
      mb={{ base:0, mdsm:'1.5em' }}
      fontSize={bigTitleFontSize}
      fontWeight={'bold'}
      bgClip='text'
      bgColor={'#bd00ff'}
      bgGradient={gradient}
      backgroundSize={`100% 100%`}
      {...rest}
    >{children}</Heading>
  )
}