import { 
  Box,
  Flex, 
  Heading, 
  Text,
  useBreakpointValue,
  useColorModeValue, 
  VStack
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useContext } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

import { profilePic, profilePicDark } from '../assets';
import { CustomDivider, Education, IconGroup, Section, SoftSkills, TechnicalSkills } from '../components';
import { DESCRIPTION } from '../constants';
import { FontContext } from '../context/FontContext';

const About: NextPage = () => {
  const animationDirection = useBreakpointValue({ base: 'left', md: 'up'});
  const { headingFontSize, subtitleFontSize, textFontSize } = useContext(FontContext);
  const photo = useColorModeValue(profilePic, profilePicDark);
  const mortarboard = useColorModeValue('/gif/education_light.gif', '/gif/education.gif');
  const briefcase = useColorModeValue('/gif/work_light.gif','/gif/work.gif')
  const gifSize = useBreakpointValue({ base: '300', md: '450'});

  return (
    <>
      <Head>
        <title>Ivus Chua | About 👦</title>
      </Head>
      <Section delay={0.1}>
        <VStack spacing={2} alignItems={'start'} mb={10} mt={4}>
          <Box display={'flex'} flexDir={'row'} justifySelf={'center'} alignSelf={'center'} w={{base:150, mdsm: 200, md:300}} h={{base:150, mdsm: 200, md:300}} rounded={'full'}>
            <Image src={photo} />
          </Box>
          <Heading variant={'section-title'} fontSize={headingFontSize} pt={4}>More About Me</Heading>
          <CustomDivider/>
          {DESCRIPTION.map((descItem,i) => (
            <Text fontSize={textFontSize} pt={descItem.p} pb={descItem.p} key={i}>
              {descItem.description}
            </Text>
          ))}
        </VStack>
        <Flex mb={10} direction={'column'}>
          <Heading variant={'section-title'} fontSize={headingFontSize} pt={'1em'} pb={2}>Technical Skills</Heading>
          <CustomDivider/>
          {/* @ts-ignore */}
          <Fade cascade duration={500}>
            <Heading variant={'subtitle'} fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'1.2em'} pb={1}>Programming Languages</Heading>
            <TechnicalSkills/>
          </Fade>
          <Heading variant={'subtitle'} fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'1.2em'} pb={2}>Web Development</Heading>
          {/* @ts-ignore */}
          <Slide  direction={'up'}>
            <IconGroup />
          </Slide>
          {/* @ts-ignore */}
          <Fade>
            <Heading variant={'section-title'} fontSize={headingFontSize} pt={'1.2em'} pb={2}>Soft Skills</Heading>
            {/* @ts-ignore */}
            <Fade>
              <CustomDivider width={'15%'}/>
            </Fade>
          </Fade>
          {/* @ts-ignore */}
          <Fade delay={200} direction={animationDirection}>
            <SoftSkills />
          </Fade>
        </Flex>
        <Flex mb={10} direction={'column'}>
          <Heading variant={'section-title'} fontSize={headingFontSize} pt={'1.2em'} pb={2}>Education</Heading>
          <CustomDivider width={'15%'}/>
          {/* @ts-ignore */}
          <Fade delay={200}>
            <VStack spacing={6}>
              <Image src={mortarboard} width={gifSize} height={gifSize} unoptimized={true}/>
              <Education />  
            </VStack>
          </Fade>
        </Flex>
      </Section>
    </>
  )
}

export default About