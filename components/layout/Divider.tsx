import React from 'react';
import { 
  Divider, 
  useColorModeValue 
} from '@chakra-ui/react';

import { darkGradient, lightGradient } from '../../constants';

interface ICustomDivider{
  width?: string;
}

export const CustomDivider: React.FC<ICustomDivider> = ({width = '25%'}) => {
  const gradient = useColorModeValue(lightGradient,darkGradient);
  
  return (
    <Divider height={'4px'} width={width} bgImage={gradient} rounded={'2xl'} pt={0}/>
  )
}
