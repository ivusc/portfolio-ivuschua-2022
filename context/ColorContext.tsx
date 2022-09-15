import React, { createContext } from 'react'

interface IColorContext{
  darkIndigoGradient: string;
  lightIndigoGradient: string;
  cardLightIndigoGradient: string;
  darkYellowGradient: string;
}

export const ColorContext = createContext({} as IColorContext);

export const ColorProvider = ({children}: { children: React.ReactNode}) => {
  const darkIndigoGradient = 'linear-gradient(45deg, #4c75ff 10%, #b673f8 80%)';
  const lightIndigoGradient = 'linear-gradient(45deg, #60a5fa, #6e9cff, #8391ff, #9c84ff, #b673f8)';
  const cardLightIndigoGradient = 'linear-gradient(45deg, #60a5fa, #6e9cff, #8391ff, #9c84ff, #b673f8)';
  const darkYellowGradient = 'linear-gradient(45deg, #FF1F01 10%, #FFC700 80%)';

  const colorData = {
    darkIndigoGradient,
    lightIndigoGradient,
    cardLightIndigoGradient,
    darkYellowGradient
  }

  return(
    <ColorContext.Provider value={colorData}>
      {children}
    </ColorContext.Provider>
  )
}