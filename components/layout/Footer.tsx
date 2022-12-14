import React from 'react';
import { 
  Box, 
  chakra, 
  Container, 
  HStack, 
  IconButton, 
  Text, 
  useColorModeValue, 
  VStack
} from '@chakra-ui/react';
import { FaReact } from 'react-icons/fa';
import { SiChakraui, SiNextdotjs } from 'react-icons/si';

import { Logo } from './Logo';
import { darkGradient, lightGradient } from '../../constants';
import { SocialsGroup } from './SocialsGroup';
import { netlifyLogo, netlifyLogoDark } from '../../assets';
import Image from 'next/image';


interface IFooter {
  display: string;
}


export const Footer: React.FC<IFooter> = ({display}) => { 
  const netlifylogo = useColorModeValue(netlifyLogo,netlifyLogoDark);

  return (
    <Container
      maxW={{base: '85%', md: '90%', lg: '90%'}}
      as={'footer'}
      display={display} 
      flexDir={{base: 'column', md:'row'}} 
      justifyContent={'space-between'} 
      alignItems={'center'}  
      mb={10}
      mt={10}
      >
      <Logo 
        plBase={3} 
        plMd={2} 
        pyBase={2} 
        pyMd={2} 
        fontMd={'lg'} 
        fontFamily={'body'} 
        fontWeight={'bold'}
        fontSm={'lg'} 
        fontLg={'xl'}
        />
      {/* MD Footer */}
      <VStack width={'50%'} display={{base:'none', md: 'flex'}} alignItems={'center'} spacing={1}>
        <Text
            py={{ base: "2", sm: "0" }}
            color="gray.800"
            _dark={{ color: "white" }}
            mx={2}
        >
            Made with Next JS &amp; Chakra UI
        </Text>
        <IconGroup/>
        <VStack width={'100%'} textAlign={'center'}>
          <Text>Deployed with</Text>
          <chakra.a 
            href={'https://netlify.com/'}
            target={'_blank'}
            w={{ base: ' 30%', md:'20%'}}
            rel={"noopener noreferrer"}>
            <Image src={netlifylogo}/>
          </chakra.a>
        </VStack>
        <Text>&copy;  2022</Text>
      </VStack>
      <SocialsGroup />
      {/* BASE Footer */}
      <VStack display={{base:'flex', md:'none'}} spacing={1}>
        <VStack>
          <Text>Made with:</Text>
          <IconGroup/>
        </VStack>
        <VStack width={'full'} textAlign={'center'} justifyContent={'center'}>
          <Text>Deployed with</Text>
          <chakra.a 
            w={{base: '30%', mdsm: '20%', md: '30%'}}
            href={'https://netlify.com/'}
            target={'_blank'}
            rel={"noopener noreferrer"}>
            <Image src={netlifylogo}/>
          </chakra.a>
          <Text>&copy; 2022</Text>
        </VStack>
      </VStack>
    </Container>
  )
}

const IconGroup: React.FC = () => {
  return (
    <HStack>
      <IconButton 
        p={0}
        m={0}
        as={chakra.a}
        icon={<SiNextdotjs size={30}/>}
        variant="ghost"
        size="lg"
        _hover={{bg: useColorModeValue(lightGradient,darkGradient)}}
        href="https://nextjs.org/"
        target={'_blank'}
        rel={"noopener noreferrer"}
        aria-label="Next JS"
      />
      <IconButton 
        p={0}
        m={0}
        as={chakra.a}
        icon={<FaReact size={30}/>}
        variant="ghost"
        size="lg"
        _hover={{bg: useColorModeValue(lightGradient,darkGradient)}}
        href="https://beta.reactjs.org/"
        target={'_blank'}
        rel={"noopener noreferrer"}
        aria-label="React JS"
      />
      <IconButton 
        p={0}
        m={0}
        as={chakra.a}
        icon={<SiChakraui size={30}/>}
        variant="ghost"
        size="lg"
        _hover={{bg: useColorModeValue(lightGradient,darkGradient)}}
        href="https://chakra-ui.com/"
        target={'_blank'}
        rel={"noopener noreferrer"}
        aria-label="Chakra UI"
      />
    </HStack>
  )
}

