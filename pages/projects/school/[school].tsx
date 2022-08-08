import { Box, Button, Heading, Hide, HStack, Icon, Text, VStack, chakra, useBreakpointValue } from '@chakra-ui/react';
import { NextPage } from 'next'
import { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';
import { withRouter } from 'next/router';
import React, { useContext } from 'react'
import { FaCode, FaInfoCircle } from 'react-icons/fa';
import { edssProject } from '../../../assets';
import { Carousel, CustomButton, CustomDivider, GradientHeading, Section } from '../../../components';
import { AV_CONTENT, ECCOMMERCE_CONTENT, IProjectContent, ISingleProject, OTHER_PROJECT_CONTENT, SMART_DOOR_CONTENT } from '../../../constants';
import { FontContext } from '../../../context/FontSize';
import { ChakraImage } from '../../../lib';

const School : NextPage<WithRouterProps> = ({router}) => {
  const { headingFontSize, textFontSize } = useContext(FontContext);
  const { school } = router.query;

  let projectContent: IProjectContent | undefined;

  if (!school){
    return <Text>Loading...</Text>
  }

  switch (String(school)) {
    case 'smartdoor':
      projectContent = SMART_DOOR_CONTENT;
      break;
    case 'ecommerce':
      projectContent = ECCOMMERCE_CONTENT;
      break;
    case 'avs':
      projectContent = AV_CONTENT;
      break;
    case 'otherproj':
      projectContent = OTHER_PROJECT_CONTENT;
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
        <title>Ivus Chua | Projects 🏫</title>
      </Head>
      <Section delay={0.1}>
        <Heading 
        variant={'section-title'} 
        fontSize={headingFontSize} 
        mb={2}
        >{projectContent.maintitle}</Heading>
        <CustomDivider width={'40%'}/>
        {projectContent.content.map((project,i) => (
          <Project project={project.name} desc={project.desc} title={project.title} sourceHref={project.sourceHref} key={i}/>
        ))}
        <VStack>
          <CustomButton p={4} alignSelf={'center'} size={{base: 'md', mdsm:'md', md:'lg'}} mb={{base: '2em', md:'5em'}} isProject>Back to Projects 👈</CustomButton>
        </VStack>
      </Section>
    </>
  )
}

interface IProject{
  project: string;
  desc: string;
  title: string;
  sourceHref?: string;
}

const Project = ({ project, desc, title, sourceHref }: IProject) => {
  const { textFontSize } = useContext(FontContext);

  if (project === 'edss'){
    return (
      <Box>
        <GradientHeading mt={'0.5em'} mb={'2em'}>{title}</GradientHeading>
        <ChakraImage src={edssProject} width={{ base: '100%', md:'70%'}}/>
        <Hide below='mdsm'>
          <MdContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref} />
        </Hide>
        <Hide above='mdsm'>
          <SmContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref}/>
        </Hide>
      </Box>
    )
  }

  if (project === 'irp3-sv'){
    const videoWidth = useBreakpointValue({base: '650', md: '800'})
    return(
      <Box>
        <GradientHeading mt={'0.5em'} mb={'2em'}>{title}</GradientHeading>
        <VStack mb={'1em'}>
          <video controls autoPlay muted width={videoWidth} height={'auto'}>
            <source src={'/videos/irp3_sp2_demo.mp4'} type={'video/mp4'} />
          </video>
        </VStack>
        <Hide below='mdsm'>
          <MdContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref} />
        </Hide>
        <Hide above='mdsm'>
          <SmContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref}/>
        </Hide>
      </Box>
    )
  }

  return(
    <Box>
      <GradientHeading mt={'0.5em'} mb={'2em'}>{title}</GradientHeading>
      {/* Size: 1836 by 912 */}
      <Carousel project={String(project)} />
      <Hide below='mdsm'>
        <MdContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref}/>
      </Hide>
      <Hide above='mdsm'>
        <SmContent textFontSize={textFontSize} desc={desc} sourceHref={sourceHref}/>
      </Hide>
    </Box>
  )
}

interface IContent{
  textFontSize?: string;
  sourceHref?:string;
  desc: string;
}

const MdContent = ({ textFontSize, desc, sourceHref }: IContent) => (
  <VStack mb={'4em'} mt={'4em'}>
    <HStack mb={'2em'}>
      <Icon 
        as={FaInfoCircle}
        color={'gray.500'}
        _dark={{ 
          color: 'gray.400',
        }}
        w={{ md: 14, lg: 20 }} 
        h={{ md: 14, lg: 20 }} 
        viewBox={'8em'}
        px={2}
      />
      <Text fontSize={textFontSize}>{desc}</Text>
    </HStack>
    {sourceHref &&(
      <chakra.a href={sourceHref} rel={"noopener noreferrer"} target={"_blank"}>
        <Button colorScheme={'blue'} size={'md'} aria-label={'Source Code'} variant={'solid'}>
          <Icon as={FaCode} /> &nbsp;
          Source Code
        </Button>
      </chakra.a>
    )}
</VStack>
)

const SmContent = ({ textFontSize, desc, sourceHref }: IContent) => (
  <VStack mb={4}>
    <Icon 
      as={FaInfoCircle}
      color={'gray.500'}
      _dark={{ 
        color: 'gray.400',
      }}
      w={12} 
      h={12} 
      viewBox={'8em'}
      mx={4}
    />
    <Text fontSize={textFontSize}>{desc}</Text>
    {sourceHref &&(
      <chakra.a href={sourceHref} rel={"noopener noreferrer"} target={"_blank"}>
        <Button colorScheme={'blue'} size={'md'} aria-label={'Source Code'} variant={'solid'} mt={2} mb={2}>
          <Icon as={FaCode} /> &nbsp;
          Source Code
        </Button>
      </chakra.a>
    )}
  </VStack>
)


export default withRouter(School)