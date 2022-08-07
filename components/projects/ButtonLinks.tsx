import { Button, HStack, Icon, chakra } from '@chakra-ui/react'
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

interface IButtonLinks {
  base: string;
  medium: string;
  size?: string;
  sourceHref: string;
  demoHref: string;
  apiHref?: string;
}

export const ButtonLinks : React.FC<IButtonLinks> = ({base, medium, size, sourceHref, demoHref, apiHref}) => {
  return (
  <HStack display={{base: base, md: medium}} justifyContent={'center'} mt={'5em'} mb={'3em'}>
    <chakra.a href={sourceHref} rel={"noopener noreferrer"} target={"_blank"}>
      <Button colorScheme={'blue'} size={size} aria-label={'Source Code'} variant={'solid'}>
        <Icon as={FaCode} /> &nbsp;
        Source Code
      </Button>
    </chakra.a>
    <chakra.a href={demoHref} rel={"noopener noreferrer"} target={"_blank"}>
      <Button colorScheme={'blue'} size={size} aria-label={'Demo'} variant={'solid'}>
        <Icon as={MdOutlineWeb} /> &nbsp;
        Demo
      </Button>
    </chakra.a>
    {apiHref && (
      <chakra.a href={apiHref} rel={"noopener noreferrer"} target={"_blank"} >
        <Button colorScheme={'blue'} size={size} aria-label={'API'} variant={'solid'}>
          <Icon as={TbApi} /> &nbsp;
          API
        </Button>
      </chakra.a>
    )}
  </HStack>
  )
}
