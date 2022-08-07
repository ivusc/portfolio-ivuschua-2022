import { 
  Heading, useColorModeValue, VStack
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { trophy, trophyLight } from '../assets';

import { Section, CustomDivider, AccomplishmentList } from '../components';
import { FontContext } from '../context/FontSize';
import { ChakraImage } from '../lib';

const Accomplishments: NextPage = () => {
  const { headingFontSize, titleFontSize } = useContext(FontContext);
  const achievement = useColorModeValue(trophyLight,trophy);

  return (
    <>
      <Head>
        <title>Ivus Chua | Accomplishments 🏆</title>
      </Head>
      <Section delay={0.1}>
        <ChakraImage src={achievement} w={{base:200, md:300}} h={{base:200, md:300}} mb={3} mt={3} />
        <Heading variant={'section-title'} fontSize={headingFontSize} mb={2}>Accomplishments</Heading>
        <CustomDivider/>
        <Heading variant={'subtitle'} fontSize={titleFontSize} pt={'1.2em'} mb={2}>Polytechnic (2020 - Present)</Heading>
        <AccomplishmentList level={'poly'}/>
        <Heading variant={'subtitle'} fontSize={titleFontSize} pt={'2em'} mb={2}>Secondary School (2016 - 2019)</Heading>
        <AccomplishmentList level={'sec'} />
        <VStack>
          <Heading variant={'subtitle'} fontSize={titleFontSize} pt={'2em'} mb={2}>Other Achievements</Heading>
          <AccomplishmentList level={'other'} />
        </VStack>
      </Section>
    </>
  )
}

export default Accomplishments