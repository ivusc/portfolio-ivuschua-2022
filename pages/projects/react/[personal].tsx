import { Box, Heading, Hide, HStack, Icon, Show, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { NextPage } from 'next'
import { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';
import { withRouter } from 'next/router'
import React, { useContext } from 'react'
import { IconType } from 'react-icons';
import { FaInfoCircle, FaQuoteLeft } from 'react-icons/fa';
import { Carousel, Checklist, CustomButton, CustomDivider, GradientHeading, ProjectLinks, ProjectStackIcons, Section } from '../../../components';
import { BLOG_APP_CONTENT, CRYPTOKET_CONTENT, ICryptoketContent, FILMPIRE_CONTENT, IReactProject, LIBRARY_APP_CONTENT } from '../../../constants';
import { FontContext } from '../../../context/FontContext';

const PersonalProjects : NextPage<WithRouterProps> = ({router}) => {
  const { headingFontSize, textFontSize } = useContext(FontContext);
  const { personal } = router.query;
  
  let projectContent: IReactProject | ICryptoketContent | undefined;

  if (!personal){
    return <Text>Loading...</Text>
  }

  switch (String(personal)) {
    case 'filmpire':
      projectContent = FILMPIRE_CONTENT;
      break;
    case 'cryptoket':
      projectContent = CRYPTOKET_CONTENT;
      break;
    case 'blogapp':
      projectContent = BLOG_APP_CONTENT;
      break;
    case 'libraryapp':
      projectContent = LIBRARY_APP_CONTENT;
      break;
    default:
      router.push('/404')
      break;
  }

  if (!projectContent){
    return <Text>Loading...</Text>
  }

  return (
    <>
      <Head>
        <title>Ivus Chua | Projects ⚛️</title>
      </Head>
      <Section delay={0.1}>
        <Heading 
          variant={'section-title'} 
          textTransform={'capitalize'} 
          fontSize={headingFontSize} 
          mb={2}
          >{projectContent.name}</Heading>
        <CustomDivider width={'10%'} />
        <Carousel project={String(personal)} />
        <GradientHeading>Project Description</GradientHeading>
        <Show above={'mdsm'}>
          <MdContent textFontSize={textFontSize} desc={projectContent.desc} icon={FaInfoCircle}/>
        </Show>
        <Show below={'mdsm'}>
          <SmContent textFontSize={textFontSize} desc={projectContent.desc} icon={FaInfoCircle}/>
        </Show>
        <GradientHeading textAlign={'left'} mt={'1.5em'}>Project Stack</GradientHeading>
        <ProjectStackIcons icons={projectContent.stack} />
        {((projectContent as ICryptoketContent).name === 'Cryptoket') && (
          <CryptoketContent 
            textFontSize={textFontSize}
            desc={(projectContent as ICryptoketContent).blockchaindesc} 
            imgUrl={(projectContent as ICryptoketContent).blockchainimg}
            icon={FaQuoteLeft}
          />
        )}
        <GradientHeading textAlign={'left'} mt={'1.5em'}>Key Takeaways</GradientHeading>
        <Checklist takeaways={projectContent.takeaways} />
        <ProjectLinks 
          base={'none'} 
          medium={'flex'} 
          size={'lg'} 
          sourceHref={projectContent.sourceHref}
          demoHref={projectContent.demoHref}
          apiHref={projectContent.apiHref ? projectContent.apiHref : undefined}
        />
        <ProjectLinks 
          base={'flex'} 
          medium={'none'} 
          size={undefined} 
          sourceHref={projectContent.sourceHref}
          demoHref={projectContent.demoHref}
          apiHref={projectContent.apiHref ? projectContent.apiHref : undefined}
        />
        <VStack>
          <CustomButton p={4} alignSelf={'center'} size={{base: 'md', md:'lg'}} mb={{base: '2em', md:'5em'}} isProject>Back to Projects 👈</CustomButton>
        </VStack>
      </Section>
    </>
  )
}

interface IContent{
  textFontSize?: string;
  imgUrl?: string;
  desc: string;
  icon: IconType;
}

const CryptoketContent = ({ textFontSize, imgUrl, desc, icon}: IContent) => {
  const pictureWidth = useBreakpointValue({base: '650', md: '800'});
  return(
    <Box>
      <GradientHeading textAlign={'left'} mt={'1.5em'}>What are smart contracts?</GradientHeading>
      <Hide below='mdsm'>
        <MdContent textFontSize={textFontSize} desc={desc} icon={icon} />
      </Hide>
      <Hide above='mdsm'>
        <SmContent textFontSize={textFontSize} desc={desc} icon={icon} />
      </Hide>
      <GradientHeading textAlign={'left'} mt={'1.5em'} mb={'1em'}>Blockchain Technology</GradientHeading>
      <VStack mb={'1.5em'}>
        <img src={imgUrl!} width={pictureWidth} style={{ borderRadius: '28px' }}/> 
      </VStack>
    </Box>
  )
}

const MdContent = ({ textFontSize, desc, icon }: IContent) => (
  <HStack mb={4}>
    <Icon 
      as={icon}
      color={'gray.500'}
      _dark={{ 
        color: 'gray.400',
      }}
      w={{ md: 14, lg: 20 }} 
      h={{ md: 14, lg: 20 }} 
      viewBox={'8em'}
      p={2}
    />
    <Text fontSize={textFontSize}>{desc}</Text>
  </HStack>
)

const SmContent = ({ textFontSize, desc, icon }: IContent) => (
  <VStack mb={4}>
    <Icon 
      as={icon}
      color={'gray.500'}
      _dark={{ 
        color: 'gray.400',
      }}
      w={16} 
      h={16} 
      viewBox={'8em'}
      p={2}
    />
    <Text fontSize={textFontSize}>{desc}</Text>
  </VStack>
)

export default withRouter(PersonalProjects)