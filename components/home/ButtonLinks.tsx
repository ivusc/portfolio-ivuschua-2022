import { 
  HStack, 
  Button,
  Icon
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';

interface IButtonLinks {
  base: string;
  medium: string;
  size?: string;
}

export const ButtonLinks: React.FC<IButtonLinks> = ({base, medium, size}) => (
  <HStack display={{base: base, md: medium}} alignItems={'start'}>
    <NextLink href={'/about'}>
      <Button colorScheme={'blue'} size={size} aria-label={'About me'} variant={'solid'}>
        <Icon as={FaUserCircle} /> &nbsp;
        About
      </Button>
    </NextLink>
    <NextLink href={'/projects'}>
      <Button colorScheme={'blue'} size={size} aria-label={'My projects'} variant={'solid'}>
        <Icon as={GoProject} /> &nbsp;
        Projects
      </Button>
    </NextLink>
  </HStack>
)