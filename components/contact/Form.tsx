import { FormControl, FormLabel, Input, Textarea, useBreakpointValue, useToast, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { FontContext } from '../../context/FontSize'
import { CustomButton } from '../CustomButton'

interface IUser{
  name: string;
  email: string;
  message: string;
}

export const Form : React.FC= () => {
  const [user, setUser] = useState<IUser>({
    name: '', email: '', message: '',
  });
  const toast = useToast()

  const onSubmitMd = () => {
    if (user.email.length === 0 || user.name.length === 0 || user.message.length === 0){
      toast({
        title: `Fields cannot be empty!`,
        status: 'error',
        position:'top-right',
        isClosable: true,
        containerStyle: {
          width: '100px',
          maxWidth: '100%',
          height:'20px',
          position: 'absolute',
          top: '100px',
          right: '30px'
        },
      })
    }
  }

  const onSubmitSm = () => {
    if (user.email.length === 0 || user.name.length === 0 || user.message.length === 0){
      toast({
        title: `Fields cannot be empty!`,
        status:'error',
        position:'bottom',
        isClosable: true,
        containerStyle: {
          width: '100px',
          maxWidth: '100%',
          height:'20px',
          position: 'absolute',
          bottom: '60px',
        },
      })
    }
  }

  const { textFontSize } = useContext(FontContext)
  return (
    <form name="contact" action="/success" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
      <VStack mt={'5em'} maxW={{ md: '80%'}}>
        <FormControl>
          <FormLabel fontSize={textFontSize} fontFamily={'poppins'}>Name</FormLabel>
          <Input name={'name'} type='text' placeholder={'Enter name'} size={{base: 'md', md: 'lg'}} onChange={(e) => setUser({ ...user, name: e.target.value})}/>
          <FormLabel fontSize={textFontSize} mt={5} fontFamily={'poppins'}>Email address</FormLabel>
          <Input name={'email'} type='email' placeholder={'Enter Email'} size={{base: 'md', md: 'lg'}} onChange={(e) => setUser({ ...user, email: e.target.value})}/>
          <FormLabel fontSize={textFontSize} mt={5} fontFamily={'poppins'}>Message</FormLabel>
          <Textarea name={'message'} placeholder='Here is a sample placeholder' size={'lg'} onChange={(e) => setUser({ ...user, message: e.target.value})}/>
          <VStack>
            <CustomButton 
              mt={'2em'} 
              size={'lg'} 
              type={'submit'} 
              onClick={useBreakpointValue({base: onSubmitSm, md: onSubmitMd})}
            >Submit</CustomButton>
          </VStack>
        </FormControl>
      </VStack>
    </form>
  )
}
