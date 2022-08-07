import { Badge, Box, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { AttentionSeeker, Fade } from 'react-awesome-reveal'
import { FadeDirection } from 'react-awesome-reveal/dist/components/Fade'
import { 
  cardLightGradient,
  darkGradient,
  HCKTN_PROJECTS_CARD_CONTENT, 
  IPersonalProject, 
  IProjectCardContent, 
  PERSONAL_PROJECTS, 
  SCHOOL_PROJECTS_CARD_CONTENT 
} from '../../constants'
import { FontContext } from '../../context/FontSize'

interface ICard{
  category: string;
}

export const Cards : React.FC<ICard> = ({category}) => {
  const animationDirection: FadeDirection = useBreakpointValue({base: 'left', md: 'up'});
  let columns: number = 0;
  let content : Array<IProjectCardContent & IPersonalProject> = [];

  if (category === 'personal'){
    content = PERSONAL_PROJECTS;
    columns = PERSONAL_PROJECTS.length;
  } else if (category === 'school') {
    content = SCHOOL_PROJECTS_CARD_CONTENT;
    columns = SCHOOL_PROJECTS_CARD_CONTENT.length;
  } else if (category === 'others') {
    content = HCKTN_PROJECTS_CARD_CONTENT;
    columns = HCKTN_PROJECTS_CARD_CONTENT.length;
  }

  if ( columns > 3 && columns % 2 === 0){
    return (
      <Fade delay={100} damping={5}>
        <VStack>
          <Box w={{base: '90%', mdsm: 'full', md:'100%', lg:'65%'}}>
            <SimpleGrid columns={{sm: 1, mdsm: 2}} mt={6} gap={8}>
              {content.map((project,i) => (
                <Card project={project} key={i}/>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Fade>
    )
  }

  return (
    <Fade delay={200} damping={5} direction={animationDirection}>
      <VStack>
        <Box w={{base: '90%', mdsm: 'full', md:'100%', lg:'90%'}}>
        <SimpleGrid columns={{sm: 1, md: columns}} mt={6} gap={8}>
          {content.map((project,i) => (
            <Card project={project} key={i}/>
          ))}
        </SimpleGrid>
        </Box>
      </VStack>
    </Fade>
  )
}

const Card = ({project}: {project: IProjectCardContent & IPersonalProject}) => {
  const { subtitleFontSize, smallFontSize } = useContext(FontContext);
  return (
    <Link href={project.href}>
      <Box 
        borderWidth={'3px'} 
        borderColor={useColorModeValue('indigo.700','gray.400')} 
        shadow={'md'}
        transition={'.1s ease-in-out 0s'}
        bg={useColorModeValue('gray.200','gray.800')}
        borderRadius={'xl'} 
        overflow={'hidden'}
        _hover={{
          borderRadius:'2em',
          transform: 'scale(1.05)',
          WebkitTransform: 'scale(1.05)',
          cursor:'pointer',
          bg: cardLightGradient,
          _dark: { 
            bg: darkGradient
          }
        }}
        >
        <Flex height={'230px'} position={'relative'}>
          <Image src={project.image} objectFit={'cover'} layout={'fill'}/>
        </Flex>
        <VStack p={6} spacing={6}>
          <Heading fontSize={subtitleFontSize} textAlign={'center'}>
            {project.title}
          </Heading>
          <Text fontSize={smallFontSize} textAlign={'center'}>
            {project.desc}
          </Text>
          <HStack fontSize={smallFontSize} textAlign={'center'} spacing={4} display={{base:'none', mdsm:'none', md: 'flex'}}>
            {(project.tags !== undefined) && project.tags.map((tag,i) => (
              <Badge key={i} variant={'solid'} colorScheme={'blue'} rounded={'md'} p={1}>{tag}</Badge>
            ))}
          </HStack>
          <SimpleGrid fontSize={smallFontSize} textAlign={'center'} templateColumns={'repeat(2,1fr)'} display={{base: 'flex', md: 'none'}} gap={2}>
            {(project.tags !== undefined) && project.tags.map((tag,i) => (
              <Badge key={i} variant={'solid'} colorScheme={'blue'} rounded={'md'} p={1}>{tag}</Badge>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Link>
  )
}
