import { 
  Box, Grid, GridItem, Heading, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useBreakpointValue, useColorModeValue, useDisclosure, VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { ISoftSkills, SOFT_SKILLS_CONTENT, lightGradient, darkGradient } from '../../constants';
import { FontContext } from '../../context/FontSize';
import { CustomButton } from '../CustomButton';

export const SoftSkills : React.FC = () => {
  return (
    <Grid templateColumns={'repeat(4,1fr)'} gap={4}>
      {SOFT_SKILLS_CONTENT.map((item,i) => (
        <GridItem colSpan={{ base: 4, mdsm: 2, lg: 1 }} w={'100%'} >
          <Card item={item} key={i}/>
        </GridItem>
      ))}
    </Grid>
  )
}

const Card = ({item}:{item: ISoftSkills}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { subtitleFontSize } = useContext(FontContext);

  return(
    <Box
      w={'full'}
      h={'full'}
      mt={8}
      px={{base: 6, md: 8}}
      py={{base: 6, md: 12}}
      borderRadius={'xl'}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'start'}
      alignItems={'center'}
      shadow={'md'}
      transition={'.1s ease-in-out 0s'}
      borderWidth={'3px'} 
      borderColor={useColorModeValue('indigo.700','gray.400')} 
      bg={useColorModeValue('gray.100','gray.800')}
      onClick={onOpen}
      _hover={{
        borderRadius:'2rem',
        transform: 'scale(1.05)',
        WebkitTransform: 'scale(1.05)',
        bg: useColorModeValue(lightGradient,darkGradient),
        cursor:'pointer'
      }}
    >
      <VStack spacing={8}>
        <Heading variant={'subtitle'} fontSize={subtitleFontSize}>{item.title}</Heading>
        <Icon 
          as={item.icon}  
          color={useColorModeValue('gray.600','gray.200')} 
          w={14} 
          h={14} 
          />
      </VStack>
      <ContentModal isOpen={isOpen} onClose={onClose} title={item.title} content={item.content}/>
    </Box>
  )
}

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const ContentModal = ({isOpen, onClose, title, content}: IModalProps) => {

  return(
  <Modal isOpen={isOpen} onClose={onClose} isCentered size={'md'} motionPreset='slideInBottom'>
    <ModalOverlay />
    <ModalContent bg={useColorModeValue('gray.50','gray.900')}>
      <ModalHeader fontSize={'2xl'} fontWeight={'medium'} fontFamily={'poppins'} color={useColorModeValue('indigo.700','indigo.100')}>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody  fontSize={'lg'}>
        {content}
      </ModalBody>

      <ModalFooter display={'flex'} justifyContent={'center'}>
        <CustomButton px={'16px'} py={'16px'} fontSize={'18px'}
          onClick={onClose} mr={3}>Close</CustomButton>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}