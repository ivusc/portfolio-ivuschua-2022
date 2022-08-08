import { 
  Grid, 
  GridItem, 
  Text, 
  useColorModeValue, 
  HStack, 
  Box, 
} from '@chakra-ui/react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import React, { useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { AnimatedHeading, ButtonLinks, CustomButton, Section, VoxelLoader } from '../components';
import { FontContext } from '../context/FontSize';


const LazyVoxel = dynamic(() => import('../components/home/Voxel'), {
  ssr: false,
  loading: () => <VoxelLoader />
})

const Home: NextPage = () => {
  const { headingFontSize, subtitleFontSize } = useContext(FontContext);
  return (
    <Section delay={0.1}>
      <Grid ml={{base: 4, md: 12}} templateColumns='repeat(2, 1fr)' overflow={'hidden'} mt={{base:0, lg:'4em'}} mb={{base: '4em', lg: 0}} gap={'0.25em'}>
        <GridItem display={{base:'flex', lg:'none'}} colSpan={{base: 2, lg: 1}} mb={6}>
          <LazyVoxel />
        </GridItem>
        <GridItem colSpan={{base:2, lg:1}} display={'flex'} flexDir={'column'} justifyContent={'center'}>
          <Text fontSize={headingFontSize} as={'h1'} mb={4}>Hello 👋, my name is</Text>
          <AnimatedHeading>Ivus Chua</AnimatedHeading>

          <Text fontSize={subtitleFontSize} as={'h1'} color={useColorModeValue('gray.800','gray.300')}>
            I am an 
            <b> Engineering Science</b> student<br/>
            @ Ngee Ann Polytechnic.
          </Text>
          <Text fontSize={subtitleFontSize} as={'h1'} color={useColorModeValue('gray.500','gray.400')}>
            I like 
            <b> programming </b>
            and
            <b> playing the piano</b>
            .
          </Text>

          <HStack mt={10} mb={5} display={'flex'} justifyContent={'start'}>
            <NextLink href={'/contact'}>
              <Box mr={4}>
                <CustomButton size={'lg'}>Contact Me&nbsp;<FiChevronRight/></CustomButton>
              </Box>
            </NextLink>
          </HStack>
          <ButtonLinks base={'none'} medium={'flex'} size={'lg'} />
          <ButtonLinks base={'flex'} medium={'none'} size={undefined} />
        </GridItem>
        <GridItem display={{base:'none', lg:'flex'}} colSpan={{base: 2, lg: 1}} mb={6}>
          <LazyVoxel />
        </GridItem>
      </Grid>
    </Section>
  )
}

export default Home

