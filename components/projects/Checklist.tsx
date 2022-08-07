import { List, ListIcon, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { MdCheckCircle } from 'react-icons/md'
import { FontContext } from '../../context/FontSize'

interface IChecklist{
  takeaways?: Array<string>;
}

export const Checklist : React.FC<IChecklist> = ({takeaways}) => {
  const { textFontSize } = useContext(FontContext);
  return (
    <List spacing={3} mt={{base:'2em', mdsm:'1em'}}>
      {takeaways?.map((item) => (
        <ListItem display={'flex'} flexDir={'row'}>
          <ListIcon as={MdCheckCircle} color={useColorModeValue('black','white')} w={6} h={6} />
          <Text fontSize={textFontSize}>{item}</Text>
        </ListItem>
      ))}
    </List>
  )
}
