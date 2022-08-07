import { 
  Box,
  Hide,
  HStack,
  Text, useColorModeValue, VStack 
} from '@chakra-ui/react';
import React from 'react'
import { EDUCATION } from '../../constants';

export const Education: React.FC = () => {
  return (
    <>
      <Hide below = 'md'>
        <MdContent />
      </Hide>
      <Hide above='md'>
        <SmContent />
      </Hide>
    </>
  )
}

const SmContent = () => (
  <Box width={'full'}>
    {EDUCATION.map((item,i) => (
    <Box key={i}>
      <Text fontWeight={600} fontFamily={'poppins'} fontSize={'xl'} color={useColorModeValue('indigo.700','indigo.100')}>
        {item.school} :
      </Text>
      <Text fontSize={'lg'} fontWeight={'bold'}>
        {item.desc}
      </Text>
      <Text fontSize={'lg'} fontWeight={'semibold'} mb={8}>
        {item.duration}
      </Text>
    </Box>
  ))}
  </Box>
)

const MdContent = () => (
  <VStack>
  {EDUCATION.map((item,i) => (
    <HStack pt={'3em'} textAlign={'center'} key={i}>
      <Text fontWeight={600} fontFamily={'poppins'} fontSize={'xl'} color={useColorModeValue('indigo.700','indigo.100')}>
        {item.school} :
      </Text>
      <Text fontSize={'xl'} fontWeight={'semibold'}>
        {item.desc}&nbsp;{item.duration}
      </Text>
    </HStack>
  ))}
</VStack>
)
