import { Button, Heading, Icon, Text, chakra, VStack } from '@chakra-ui/react';
import { NextPage } from 'next'
import withRouter, { WithRouterProps } from 'next/dist/client/with-router'
import Head from 'next/head';
import React, { useContext } from 'react'
import { FaCode, FaInfoCircle } from 'react-icons/fa';
import { Carousel, CustomButton, CustomDivider, Section } from '../../../components';
import { HCKX_CONTENT, IHackathonProject, INTUITION_CONTENT, SSA_CONTENT } from '../../../constants';
import { FontContext } from '../../../context/FontSize';

const Hackathon : NextPage<WithRouterProps> = ({ router }) => {
  const { headingFontSize, textFontSize } = useContext(FontContext);
  const { hackathon } = router.query;

  if (!hackathon){
    return <Text>Loading...</Text>
  }

  let projectContent: IHackathonProject | undefined;

  switch (String(hackathon)) {
    case 'intuitionv8':
      projectContent = INTUITION_CONTENT;
      break;
    case 'ssa2021':
      projectContent = SSA_CONTENT;
      break;
    case 'hackathonx':
      projectContent = HCKX_CONTENT;
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
          fontSize={headingFontSize} 
          mb={2}
          >{projectContent.title}</Heading>
        <CustomDivider />
        <Carousel project={projectContent.code}/>
        <VStack>
          <Icon 
            as={FaInfoCircle}
            color={'gray.500'}
            _dark={{ 
              color: 'gray.400',
            }}
            w={{base: 16, md: 14, lg: 20}} 
            h={{base: 16, md: 14, lg: 20}} 
            pb={'1em'}
            viewBox={'8em'}
          />
        </VStack>
        {projectContent.desc.map((desc) => (
          <Text fontSize={textFontSize} mb={6}>
            {desc}
          </Text>
        ))}
        {projectContent.sourceHref && (
          <VStack>
            <chakra.a href={projectContent.sourceHref} rel={"noopener noreferrer"} target={"_blank"}>
              <Button colorScheme={'blue'} size={'md'} aria-label={'Source Code'} variant={'solid'}>
                <Icon as={FaCode} /> &nbsp;
                Source Code
              </Button>
            </chakra.a>
          </VStack>
        )}
        <VStack mt={'2em'}>
          <CustomButton alignSelf={'center'} size={{base: 'md', md:'lg'}} mb={{base: '2em', md:'5em'}} isProject>Back to Projects 👈</CustomButton>
        </VStack>
      </Section>
    </>
  )
}

export default withRouter(Hackathon)