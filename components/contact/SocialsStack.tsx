import { Box, HStack, Icon, Text, useColorModeValue, chakra } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { IconType } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { darkGradient, lightGradient } from '../../constants'
import { FontContext } from '../../context/FontContext'


interface ISocialsStack{
  href: string;
  desc: string;
  label: string;
  icon: IconType;
}

const Socials: Array<ISocialsStack> = [
  { href: 'https://www.instagram.com/i.vus_/', desc: '@i.vus_', icon: FaInstagram, label:'Instagram'},
  { href: 'https://github.com/ivusc', desc: 'ivusc', icon: FaGithub, label:'Github' },
  { href: 'mailto:ivuschua@gmail.com', desc: 'ivuschua@gmail.com', icon: MdMail, label:'Mail' },
  { href: 'https://www.linkedin.com/in/ivus-chua-b1755023a/', desc:'Ivus Chua', icon: FaLinkedin, label:'Linked In' }
]

export const SocialsStack : React.FC = () => {
  const { textFontSize } = useContext(FontContext);
  return (
    <>
    {/* @ts-ignore */}
      <Fade direction={'up'} cascade>
        {Socials.map((socialItem,i) => (
          <chakra.a
            href={socialItem.href}
            target={'_blank'}
            rel={"noopener noreferrer"}
            key={i}
          >
            <Box
              borderRadius={'xl'}
              mt={4}
              px={'4px'}
              py={'4px'}
              boxShadow={'lg'}
              borderColor={'transparent'}
              backgroundImage={useColorModeValue(lightGradient, darkGradient)}
              _hover ={{
                cursor: 'pointer',
                color: 'white'
              }}
              aria-label={socialItem.label}
            >
              <HStack 
                bg={useColorModeValue('gray.100','gray.800')} 
                borderRadius={'lg'} 
                px={2}
                _hover={{
                  bg: 'transparent',
                }}
              >
                <Icon 
                  as={socialItem.icon}
                  w={{ base: 12, md: 14 }} 
                  h={{ base: 12, md: 14 }} 
                  p={2}
                />
                <Text fontSize={textFontSize}>{socialItem.desc}</Text>
              </HStack>
            </Box>
          </chakra.a>
        ))}
      </Fade>
    </>
  )
}
