import { 
  Box, 
  Text, 
  useColorModeValue 
} from "@chakra-ui/react";
import Link from "next/link";

import { logo } from "../../assets";
import { darkGradient, lightGradient } from "../../constants";
import { ChakraImage } from "../../lib";


interface ILogo {
  plBase?: number;
  plMd?:number;
  pxBase?: number;
  pyBase?: number;
  pyMd?: number;
  fontSm?: string;
  fontMd?: string;
  fontLg?: string;
  fontFamily: string;
  fontWeight?: string;
  onClose?: () => void;
}

export const Logo: React.FC<ILogo> = ({plBase, pyBase, pxBase, pyMd, plMd, fontSm, fontMd, fontLg, fontFamily, fontWeight='semibold', onClose}:ILogo) => (
  <Link href={'/'}>
    <Box 
      display={'flex'}
      flexDir={'row'}
      w={'fit-content'}
      borderRadius={'lg'}
      onClick={onClose}
      px={{base: pxBase, md:0 }}
      py={{base: pyBase, md: pyMd}}
      pl={{base: plBase, md: plMd}}
      pr={1}
      justifyContent={'center'}
      alignItems={'center'}
      _hover={{ 
        textDecoration: 'none',
        cursor: 'pointer',
        bg:useColorModeValue(lightGradient,darkGradient),
      }}>
      <ChakraImage src={logo} w={8} h={8} mr={1}/>
      {/* <Box display={{base:'inherit', md:'inherit'}} minW={{base: 'full', md:'fit-content'}}> */}
        <Text
          pt={{base: 1, md:1}}
          pr={2}
          pl={1}
          textAlign={'left'}
          fontFamily={fontFamily}
          fontSize={{base: fontSm, md: fontMd, lg: fontLg}}
          fontWeight={fontWeight}
          noOfLines={1}
          textDecoration={'unset'}
          color={useColorModeValue('gray.800', 'white')}>
          Ivus Chua
        </Text>
      {/* </Box> */}
    </Box>
  </Link>
)