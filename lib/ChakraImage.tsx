import { Box, BoxProps } from "@chakra-ui/react";
import NextImage, { StaticImageData } from "next/image";

const ChakraImage = ({ src, alt = '', ...rest }: { src: string | StaticImageData; alt?: string } & Omit<BoxProps, "as">) => {
  return (
    <Box position="relative" display={'block'} ml={'auto'} mr={'auto'} {...rest}>
      <NextImage objectFit="cover" layout="responsive" src={src} alt={alt} />
    </Box>
  );
};

export default ChakraImage;