import React from 'react';
import {
   Box,
   Flex,
   IconButton,
   Stack,
   Collapse,
   Popover,
   PopoverTrigger,
   useColorModeValue,
   useDisclosure,
   chakra,
   Button
 } from '@chakra-ui/react';
 import {
   HamburgerIcon,
   CloseIcon,
 } from '@chakra-ui/icons';
import { FaGithub } from 'react-icons/fa';

import { NAV_ITEMS } from '../../../constants';
import { MobileDrawer } from './MobileNav';
import { ThemeButton } from '../ThemeButton';
import { ChakraNextLink } from '../../../lib';
import { Logo } from '../Logo';
import Link from 'next/link';
 
export const Navbar: React.FC = () => {
   const { isOpen: mobileNavOpen, onToggle: toggleMobileNav } = useDisclosure();
   const mobileNavBtnRef = React.useRef(null);

   return (
     <Box position={'sticky'} top={0} as="nav" w="100%" zIndex={10}>
       <Flex
        mx={{base:0, md:4}}
        bg={useColorModeValue('gray.50', 'gray.900')}
         color={useColorModeValue('gray.600', 'white')}
         minH={'40px'}
         py={{ base: 3 , md: 5}}
         px={{ base: 2, md: 10 }}
         align={{base:'left', md:'center'}}>
         <Flex ml={{ base: '2em', mdsm: '2em', md: 0 }} flex={{ base: 1 }} justify={{base:'start', md: 'center'}}>
          <Logo plBase={2} plMd={0} pyMd={2} pyBase={1} fontFamily={'heading'} fontSm={'lg'} fontMd={'xl'} fontLg={'2xl'}/>
           <Flex pt={{base: 0, md: 3}} display={{base: 'none', md:'flex'}} flex={{base:0, md:1}} justify={{base: 'center', md:'end'}} ml={10} px={{base:0, md:2}}>
             <DesktopNav />
           </Flex>
         </Flex>
 
         <Stack
           flex={{ base: 1, md: 0 }}
           justify={'flex-end'}
           display={{base: 'flex', md: 'none'}}
           direction={'row'}
           spacing={6}>
          <IconButton
             ref={mobileNavBtnRef}
             onClick={toggleMobileNav}
             size={'lg'}
             variant={'outline'}
             icon={
              mobileNavOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
             }
             aria-label={'Toggle Navigation'}
           />
            <ThemeButton/>
         </Stack>
         <Stack
           flex={{ base: 1, md: 0 }}
           justify={'flex-end'}
           display={{base: 'none', md: 'flex'}}
           direction={'row'}
           spacing={6}>
            <Button
              aria-label="Source Code"
              size={'lg'} variant={'ghost'}
              colorScheme={'indigo'}
              as={chakra.a}
              href={'https://github.com/ivusc/portfolio-ivuschua'}
              target={'_blank'}
              rel={"noopener noreferrer"}
            >
              <FaGithub/> &nbsp;
              Souce Code
            </Button>
            <ThemeButton/>
         </Stack>
       </Flex>

       <Collapse in={mobileNavOpen} animateOpacity>
         <MobileDrawer 
            mobileNavOpen={mobileNavOpen}
            toggleMobileNav={toggleMobileNav}
            btnRef={mobileNavBtnRef}
          />
       </Collapse>

     </Box>
   );
 }
 
 const DesktopNav: React.FC = () => {
   const linkColor = useColorModeValue('gray.600', 'gray.200');
   const linkHoverColor = useColorModeValue('gray.800', 'white');
 
   return (
     <Stack direction={'row'} spacing={4}>
       {NAV_ITEMS.map((navItem) => (
         <Box key={navItem.label}>
           <Popover trigger={'hover'} placement={'bottom-start'}>
             <PopoverTrigger>
              <Link href={navItem.href ?? '#'} scroll={false}>
                <chakra.a
                  p={3}
                  fontSize={'md'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'underline 3px',
                    textUnderlineOffset: 2,
                    color: linkHoverColor,
                    cursor: 'pointer'
                  }}
                >
                  {navItem.label}
                </chakra.a>
              </Link>
             </PopoverTrigger>
           </Popover>
         </Box>
       ))}
     </Stack>
   );
 };

 