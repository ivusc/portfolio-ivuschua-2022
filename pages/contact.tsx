import { Box, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useContext } from 'react';
import { contact } from '../assets';
import { CustomDivider, Form, Section, SocialsStack } from '../components';
import { FontContext } from '../context/FontSize';
import { ChakraImage } from '../lib';

const Contact: NextPage = () => {
  const { headingFontSize } = useContext(FontContext);
  return (
    <>
      <Head>
        <title>Ivus Chua | Contact 📱</title>
      </Head>
      <Section delay={0.1}>
        <Heading variant={'section-title'} fontSize={headingFontSize} mb={3}>Contact</Heading>
        <CustomDivider width={'10%'}/>
        <SimpleGrid columns={{base: 1, md: 2}} mt={'1em'} mb={{base:'10em', md: 0}}>
          {/* Socials + Image */}
          <VStack spacing={'2em'} alignItems={'center'}>
            <Box w={{ base: ' 70%', md:'50%'}} h={'auto'}>
              <Image src={contact} objectFit={'contain'} alt={'Contact'} />
            </Box>
            <SimpleGrid columns={{base: 1}} w={{ base: 'full', md:'60%'}}>
              <SocialsStack />
            </SimpleGrid>
          </VStack>
          <Form />
        </SimpleGrid>
      </Section>
    </>
  )
}

export default Contact