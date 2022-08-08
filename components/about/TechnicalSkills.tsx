import { 
  Grid, 
  GridItem, 
  Progress, 
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

import { IProgressContent, PROGRESS_CONTENT, lightGradient, darkGradient } from '../../constants';

export const TechnicalSkills : React.FC = () => {
  return (
    <Grid templateColumns='repeat(3,1fr)' gap={{base: 4, md: 2}} w={{base: '90%', md: '80%'}} pt={'1em'} alignSelf={'center'}>
      {PROGRESS_CONTENT.map((progressItem,i) => (
        <ProgressItem progressItem={progressItem} key={i}/>
      ))}
    </Grid>
  )
}

const ProgressItem = ({progressItem}: {progressItem: IProgressContent}) => (
  <>
    <GridItem 
      w="100%" 
      colSpan={{base:1, lg:1}} 
      display={'flex'} 
      justifyContent={'start'} 
      key={progressItem.title}
    >
      <Text fontSize={{base:'lg', lg:'xl'}} fontWeight={'semibold'}>{progressItem.title}</Text>
    </GridItem>
    <GridItem 
      w="100%" 
      colSpan={{base:2, lg:2}} 
      key={progressItem.value} 
      mb={{base: 0, md: 3}}>
      <Progress 
        value={progressItem.value} 
        _dark={{bg: 'gray.700'}}
        _light={{bg: 'gray.300'}}
        rounded={'lg'}
        height={'1em'}
        sx={{
        '& > div': {
          background: useColorModeValue(lightGradient,darkGradient),
        },
        }}
      mt={2} />
    </GridItem>
  </>
)
