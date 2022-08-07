import { Hide, HStack, Icon, SimpleGrid, Text, Tooltip, useColorModeValue, VStack } from "@chakra-ui/react";
import React,{ useContext } from "react";
import { IconType } from "react-icons";
import { darkGradient, IProjectStack, lightGradient } from "../../constants";
import { FontContext } from "../../context/FontSize";

interface IIconGroup{
  icons: Array<IProjectStack>
}

export const IconGroup : React.FC<IIconGroup> = ({ icons }) => {
  const { textFontSize } = useContext(FontContext);
  
  return(
    <HStack justifyContent={'center'} mt={'1.2em'}>
      <SimpleGrid columns={{base: icons.length > 5 ? 4 : icons.length, md: icons.length}} spacing={'1em'}>
      {icons.map((icon) => (
        <VStack>
          <Hide above={'mdsm'}>
            <SmContent title={icon.title} icon={icon.icon} />
          </Hide>
          <Hide below={'mdsm'}>
            <MdContent title={icon.title} icon={icon.icon} />
          </Hide>
          <Hide below={'mdsm'}>
            <Text 
              fontFamily={'poppins'} 
              fontWeight={'semibold'} 
              fontSize={textFontSize} 
              color={useColorModeValue('gray.500','gray.400')}
              textAlign={'center'}
            >{icon.title}</Text>
          </Hide>
        </VStack>
      ))}
      </SimpleGrid>
    </HStack>
  )
}

interface IContent{
  title: string;
  icon: IconType;
}

const SmContent = ({ title, icon }: IContent) => (
  <Tooltip 
    label={title} fontSize={'md'} 
    hasArrow 
    bg={'gray.700'} 
    color={'white'} 
    key={title}
  >
    <span>
      <MdContent icon={icon} title={''}/>
    </span>
  </Tooltip>
)

const MdContent = ({ icon }: IContent) => (
  <Icon 
    as={icon} 
    color={useColorModeValue('gray.400','gray.500')} 
    w={{ base: 16, md: 20}} 
    h={{ base: 16, md: 20}} 
    viewBox={'8em'}
    p={2}
    rounded={'xl'}
    _hover={{
      _dark: {
        bg: darkGradient,
        color: 'white',
      },
      _light: {
        bg: lightGradient,
        color: 'white',
      }
    }}/>
)