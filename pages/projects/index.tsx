import { Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import React, { useContext } from 'react'
import { Cards, CustomDivider, Section } from '../../components'
import { FontContext } from '../../context/FontSize'

const Projects: NextPage = () => {
  const { headingFontSize, titleFontSize } = useContext(FontContext);

  return (
    <>
      <Head>
        <title>Ivus Chua | Projects 💻</title>
      </Head>
      <Section delay={0.1}>
        <Heading variant={'section-title'} fontSize={headingFontSize} mb={2}>Projects</Heading>
        <CustomDivider width={'10%'}/>
        <Heading fontSize={titleFontSize} variant={'subtitle'} mt={'3m'} mb={2} textAlign={'center'}>React Projects</Heading>
        <Cards category={'personal'} />
        <Heading fontSize={titleFontSize} variant={'subtitle'} mt={'3em'} mb={2} textAlign={'center'}>School Projects</Heading>
        <Cards category={'school'} />
        <Heading fontSize={titleFontSize} variant={'subtitle'} mt={'3em'} mb={2}>Hackathon Projects</Heading>
        <Cards category={'others'} />
      </Section>
    </>
  )
}

export default Projects