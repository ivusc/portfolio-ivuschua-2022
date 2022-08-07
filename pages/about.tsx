import { 
  Flex, 
  Heading, 
  Text,
  useBreakpointValue,
  useColorModeValue, 
  VStack
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FadeDirection } from 'react-awesome-reveal/dist/components/Fade';

import { education, educationLight, profilePic, profilePicDark } from '../assets';
import { CustomDivider, Education, IconGroup, Section, SoftSkills, TechnicalSkills } from '../components';
import { DESCRIPTION } from '../constants';
import { FontContext } from '../context/FontSize';
import { ChakraImage } from '../lib';

const About: NextPage = () => {
  const animationDirection : FadeDirection = useBreakpointValue({ base: 'left', md: 'up'});
  const { headingFontSize, subtitleFontSize, textFontSize } = useContext(FontContext);
  const photo = useColorModeValue(profilePic, profilePicDark);
  const mortarboard = useColorModeValue(educationLight, education);

  return (
    <>
      <Head>
        <title>Ivus Chua | About 👦</title>
      </Head>
      <Section delay={0.1}>
        <VStack spacing={2} alignItems={'start'} mb={10}>
          <ChakraImage src={photo} w={{base:150, md:300}} h={{base:150, md:300}} rounded={'full'}/>
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
          <Fade cascade duration={500}>
            <Heading variant={'subtitle'} fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'1.2em'} pb={1}>Programming Languages</Heading>
            <TechnicalSkills/>
          </Fade>
          <Heading variant={'subtitle'} fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'1.2em'} pb={2}>Web Development</Heading>
          <Slide  direction={'up'}>
            <IconGroup />
          </Slide>
          <Fade>
            <Heading variant={'section-title'} fontSize={headingFontSize} pt={'1.2em'} pb={2}>Soft Skills</Heading>
            <Fade>
              <CustomDivider width={'15%'}/>
            </Fade>
          </Fade>
          <Fade delay={200} direction={animationDirection}>
            <SoftSkills />
          </Fade>
        </Flex>
        <Flex mb={10} direction={'column'}>
            <Heading variant={'section-title'} fontSize={headingFontSize} pt={'1.2em'} pb={2}>Education</Heading>
            <CustomDivider width={'15%'}/>
          <Slide delay={1000}>
            <VStack spacing={6}>
              <ChakraImage src={mortarboard} w={{base:300, md:450}} h={{base:300, md:450}} />
              <Education />  
            </VStack>
          </Slide>
        </Flex>
      </Section>
    </>
  )
}

export default About