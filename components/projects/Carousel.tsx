import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  VStack,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ChakraImage } from '../../lib';
import { 
  AV_CARD_CONTENT_IRP5,
  BLOG_APP_IMAGES, 
  CRYPTOKET_IMAGES, 
  darkGradient, 
  ECOMMERCE_CARD_CONTENT_DSAG, 
  ECOMMERCE_CARD_CONTENT_OOPG, 
  ESHOP_IMAGES, 
  FILMPIRE_IMAGES, 
  HCKX_IMAGES, 
  INTUITION_IMAGES, 
  IProjectCarousel, 
  LIBRARY_APP_IMAGES, 
  lightGradient, 
  OTR_PROJ_IRP1, 
  OTR_PROJ_IRP4, 
  SMART_DOOR_IMAGES_IRP2,
  SMART_DOOR_IMAGES_IRP3,
  SSA_IMAGES
} from '../../constants';


const settings = {
  dots: false,
  arrows: false,
  fade: true,
  lazyload: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface ICarousel {
  project: string;
}

export const Carousel : React.FC<ICarousel> = ({project}) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  let projectImages: Array<IProjectCarousel> = [];

  switch(project){
    case 'filmpire':
      projectImages = FILMPIRE_IMAGES;
      break;
    case 'cryptoket':
      projectImages = CRYPTOKET_IMAGES;
      break;
    case 'blogapp':
      projectImages = BLOG_APP_IMAGES;
      break;
    case 'libraryapp':
      projectImages = LIBRARY_APP_IMAGES;
      break;
    case 'eshop':
      projectImages = ESHOP_IMAGES;
      break;
    case 'irp2':
      projectImages = SMART_DOOR_IMAGES_IRP2;
      break;
    case 'irp3-sd':
      projectImages = SMART_DOOR_IMAGES_IRP3;
      break;
    case 'oopg':
      projectImages = ECOMMERCE_CARD_CONTENT_OOPG;
      break;
    case 'dsag':
      projectImages = ECOMMERCE_CARD_CONTENT_DSAG;
      break;
    case 'irp5':
      projectImages = AV_CARD_CONTENT_IRP5;
      break;
    case 'irp4':
      projectImages = OTR_PROJ_IRP4;
      break;
    case 'irp1':
      projectImages = OTR_PROJ_IRP1;
      break;
    case 'iv8-2022':
      projectImages = INTUITION_IMAGES;
      break;
    case 'ssa':
      projectImages = SSA_IMAGES;
      break;
    case 'hckx':
      projectImages = HCKX_IMAGES;
      break;
    default:
      break;
  }

  return (
    <VStack mt={'2em'} mb={'2em'}>
      <Box
        position={'relative'}
        height={'120%'}
        width={{ base: '100%', md: '90%'}}
        rounded={'2xl'}
        overflow={'hidden'}>
          
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          _hover={{ bg: useColorModeValue(lightGradient,darkGradient), color:'white' }}
          onClick={() => slider?.slickPrev()}>
          <Icon as={BiLeftArrowAlt} w={10} h={10}/>
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          _hover={{ bg: useColorModeValue(lightGradient,darkGradient), color:'white' }}
          onClick={() => slider?.slickNext()}>
          <Icon as={BiRightArrowAlt} w={10} h={10} />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {projectImages.map((item,i) => (
            <Box height={{base: 'full', md:'full'}} rounded = {'xl'} bg={useColorModeValue('gray.200', 'gray.700')} key={i}>
              <ChakraImage src={item.image} objectFit={{base:'cover', md: 'fill'}} alt="" w={{ base:'full', md: '80%'}} h={{base: 'full',md:'full'}}/>
            </Box>
          ))}
        </Slider>
      </Box>
    </VStack>
  );
}