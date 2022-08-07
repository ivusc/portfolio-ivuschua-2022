import { 
  Box,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  StackDivider,
  Text,
  useColorModeValue, 
  VisuallyHidden
} from "@chakra-ui/react";
import Link from "next/link";
import NextLink from 'next/link';
import { FaGithub } from "react-icons/fa";

import { darkGradient, INavItem, lightGradient, NAV_ITEMS } from "../../../constants";
import { Logo } from "../Logo";


interface IMobileDrawer {
  mobileNavOpen: boolean;
  toggleMobileNav: () => void;
  btnRef: any
}

interface IMobileNavItems extends INavItem {
  onClose: () => void;
}

export const MobileDrawer: React.FC<IMobileDrawer> = ({mobileNavOpen, toggleMobileNav, btnRef}) => {
  const gradient = useColorModeValue(lightGradient,darkGradient);
  return(
    <Drawer
        isOpen={mobileNavOpen}
        placement='right'
        onClose={toggleMobileNav}
        finalFocusRef={btnRef}
        variant={useColorModeValue('light','dark')}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo 
              onClose={toggleMobileNav} 
              fontSm={'lg'} 
              fontMd={'xl'} 
              fontLg={'3xl'} 
              pyBase={2}
              pxBase={1}
              fontFamily={'heading'}
              />
          </DrawerHeader>

          <DrawerBody>
            <Stack
              mt={'5em'}
              px={3}
              pb={5}
              divider={<StackDivider height={'3px'} bgImage={gradient} />}
              display={{ md: 'none' }}>
                <VisuallyHidden />
                <MobileNavItem key={'Home'} label={'Home'} href="/" onClose={toggleMobileNav}></MobileNavItem>
                {NAV_ITEMS.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} onClose={toggleMobileNav}/>
                ))}
                <Box 
                  as={chakra.a}
                  href={'https://github.com/ivusc/Portfolio-Ivus-Chua'}
                  target={'_blank'}
                  rel={"noopener noreferrer"}
                  display={'flex'}
                  flexDir={'row'}
                  borderRadius={'lg'}
                  p={{base: 2, md: 4}}
                  _hover={{ 
                    cursor: 'pointer',
                    bg:gradient,
                  }}>
                    <FaGithub size={24}/> &nbsp;&nbsp;
                    Souce Code
                </Box>
              <VisuallyHidden />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  )
 }

const MobileNavItem: React.FC<IMobileNavItems> = ({ label, href, onClose }) => {
   return (
     <Stack spacing={4} _hover={{cursor: 'pointer'}}>
      <Link href={href ?? '#'}>
        <Flex
          py={2}
          onClick={onClose}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Flex>
       </Link>
    </Stack>
   );
};