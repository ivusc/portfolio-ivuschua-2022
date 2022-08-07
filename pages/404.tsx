import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useContext } from 'react';
import NextLink from 'next/link';

import { AnimatedHeading, CustomButton } from '../components';
import { FontContext } from '../context/FontSize';

const NotFound : NextPage = () => {
  const { subtitleFontSize, textFontSize } = useContext(FontContext);

  return (
    <Box textAlign="center" py={10} px={6} h={'60vh'}>
      <AnimatedHeading>404</AnimatedHeading>
      <Text fontSize={subtitleFontSize} fontWeight={'extrabold'}>Page Not Found :(</Text>
      <Text fontSize={textFontSize} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <NextLink href={'/'}>
        <CustomButton size={'lg'}> Go Home 🏠</CustomButton>
      </NextLink>
    </Box>
  );
}

export default NotFound;