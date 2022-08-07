import { 
  Box, 
  Grid, 
  GridItem, 
  Heading, 
  HStack, 
  Icon, 
  Text, 
  useColorModeValue 
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';

import { 
  darkGradient, 
  IAccomplishmentContent, 
  lightGradient, 
  OTHER_ACHIEVEMENTS, 
  POLY_ACADEMIC_ACHIEVEMENTS,
  POLY_CCA_ACHIEVEMENTS,
  SEC_ACADEMIC_ACHIEVEMENTS,
  SEC_CCA_ACHIEVEMENTS, 
} from '../../constants';
import { FontContext } from '../../context/FontSize';

interface IAccomplishmentList {
  level: string;
}

interface IContent {
  acad: Array<IAccomplishmentContent>,
  cca: Array<IAccomplishmentContent>
}

export const AccomplishmentList : React.FC<IAccomplishmentList> = ({level}) => {
  const { subtitleFontSize } = useContext(FontContext);
  let content : IContent = { acad: [], cca: [] };

  if (level === 'poly') {
    content.acad = POLY_ACADEMIC_ACHIEVEMENTS;
    content.cca = POLY_CCA_ACHIEVEMENTS;
  } else if (level === 'sec'){
    content.acad = SEC_ACADEMIC_ACHIEVEMENTS;
    content.cca = SEC_CCA_ACHIEVEMENTS;
  }

  if (level === 'other'){
    return (
      <Box w={{ base: 'full', md:'70%'}}>
        <Accomplishment content={OTHER_ACHIEVEMENTS} />
      </Box>
    )
  }

  return (
    <Grid templateColumns={'repeat(12,1fr)'} gap={7}>
      <GridItem colSpan={{base: 12, md: 6}}>
        <Heading fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'0.5em'} pb={2}> Academic Achievements</Heading>
        <Accomplishment content={content.acad}/>
      </GridItem>
      <GridItem colSpan={{base: 12, md: 6}}>
      <Heading fontWeight={'semibold'} fontSize={subtitleFontSize} pt={'0.5em'} pb={2}> Non - Academic Achievements</Heading>
        <Accomplishment content={content.cca}/>
      </GridItem>
    </Grid>
  )
}

const Accomplishment = ({content}: {content: Array<IAccomplishmentContent> }) => {
  const { textFontSize } = useContext(FontContext);
  return (
    <>
      {content.map((item,i) => (
        <Fade delay={100} direction={'up'} key={i} cascade>
          <Box
            borderRadius={'xl'}
            mt={4}
            px={'4px'}
            py={'4px'}
            boxShadow={'lg'}
            borderColor={'transparent'}
            backgroundImage={useColorModeValue(lightGradient, darkGradient)}
          >
          <HStack bg={useColorModeValue('gray.100','gray.800')} borderRadius={'lg'} px={8} py={4}>
            <Icon 
              as={item.icon}
              color={useColorModeValue('gray.500','gray.400')} 
              w={{ base: 12, md: 14, lg: 16 }} 
              h={{ base: 12, md: 14, lg: 16 }} 
              p={2}
            />
            <Text fontSize={textFontSize}>{item.title} {item.desc !== undefined ? ` - ${item.desc}`: ''}</Text>
          </HStack>
        </Box>
      </Fade>
      ))}
    </>
  )
}