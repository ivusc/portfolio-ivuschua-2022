import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export const ThemeButton : React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
      <IconButton
        aria-label="Toggle theme"
        size={'lg'} variant={'solid'} mr={'0.25em'}
        color={'white'}
        bg={useColorModeValue('indigo.700','indigo.300')}
        _hover={{
          _light: {
            bg: 'indigo.500'
          },
          _dark: {
            bg: 'indigo.200'
          }
        }}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
    </motion.div>
  </AnimatePresence>
  )
}
