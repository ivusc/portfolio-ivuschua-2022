import { useBreakpointValue } from '@chakra-ui/react';
import React, { createContext } from 'react';

interface IFontContext {
  headingFontSize?: string;
  bigTitleFontSize?: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
  textFontSize?: string
  smallFontSize?: string;
}

export const FontContext = createContext({} as IFontContext);

export const FontProvider = ({children}: { children: React.ReactNode}) => {
  const headingFontSize = useBreakpointValue({ base: '3xl', md: '5xl' });
  const bigTitleFontSize = useBreakpointValue({ base: '2xl', md: '4xl' });
  const titleFontSize = useBreakpointValue({base: 'xl', md: '3xl'});
  const subtitleFontSize = useBreakpointValue({ base: 'lg', md: '2xl' });
  const textFontSize = useBreakpointValue({base: 'lg', md: 'xl'});
  const smallFontSize = useBreakpointValue({base: 'md', md: 'lg'});

  const fontData = { headingFontSize, bigTitleFontSize, titleFontSize, subtitleFontSize, textFontSize, smallFontSize };

  return (
    <FontContext.Provider value={ fontData }>
      {children}
    </FontContext.Provider>
  )
}