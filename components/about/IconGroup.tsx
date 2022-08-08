import { Grid, GridItem, Hide, HStack, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { IWebDevContent, WEB_DEV_CONTENT, lightGradient, darkGradient } from '../../constants';

export const IconGroup : React.FC = () => {
  return (
    <>
      <Hide below='md' >
        <DesktopStack />
      </Hide>
      <Hide above='md'>
        <MobileStack />
      </Hide>
    </>
  )
}

const MobileStack = () => (
  <Grid templateColumns={'repeat(4,1fr)'} mt={6}>
    {WEB_DEV_CONTENT.map((item:IWebDevContent) => (
      <Tooltip label={item.title} fontSize={'md'} hasArrow bg={'gray.700'} color={'white'} key={item.title}>
        <GridItem colSpan={1} display={'flex'} flexDir={'row'} justifyContent={'center'}>
          <span>
            <Icon 
              as={item.icon} 
              color={useColorModeValue('gray.400','gray.500')} 
              w={16} 
              h={16} 
              p={2}
              rounded={'xl'}
              _hover={{
                _dark: {
                  bg: darkGradient,
                  color: 'white',
                },
                _light: {
                  bg: lightGradient,
                  color: 'white',
                }
            }}/>
          </span>
        </GridItem>
      </Tooltip>
    ))}
  </Grid>
)

const DesktopStack = () => (
  <HStack justifyContent={'space-around'} mt={'1.2em'}>
    {WEB_DEV_CONTENT.map((item:IWebDevContent) => (
      <Tooltip label={item.title} fontSize={'md'} hasArrow bg={'gray.700'} color={'white'} key={item.title}>
        <span>
          <Icon 
            as={item.icon} 
            color={useColorModeValue('gray.400','gray.500')} 
            w={20} 
            h={20}
            viewBox={'8em'}
            p={2}
            rounded={'xl'}
            _hover={{
              _dark: {
                bg: darkGradient,
                color: 'white',
              },
              _light: {
                bg: lightGradient,
                color: 'white',
              }
            }}/>
          </span>
        </Tooltip>
    ))}
  </HStack>
)
