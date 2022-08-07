import { 
  Button, 
  ButtonProps, 
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface ICustomButton extends ButtonProps{
  children: React.ReactNode;
  isProject?: boolean;
}

export const CustomButton: React.FC<ICustomButton> = (props) => {
  const { isProject, children, ...rest } = props

  if (isProject){
    return (
      <NextLink href={'/projects'}>
        <Button 
          _light={{bg: 'indigo.600'}}
          _hover={{ _light: {
            bg: 'indigo.500'
          }, _dark: {
            bg: 'indigo.400'
          }}} 
          bg={'indigo.500'}
          color={'white'}
          {...rest} 
          >
          {children}
        </Button>
      </NextLink>
    )
  }

  return (
    <Button 
      _light={{bg: 'indigo.600'}}
      _hover={{ _light: {
        bg: 'indigo.500'
      }, _dark: {
        bg: 'indigo.400'
      }}} 
      bg={'indigo.500'}
      color={'white'}
      {...rest} 
      >
      {children}
    </Button>
  )
}