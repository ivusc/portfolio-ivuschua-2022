import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'
import { Loader } from '../Loader'

//@ts-ignore
export const VoxelContainer = forwardRef(({ children }, ref ) => (
  <Box
    //@ts-ignore
    ref={ref}
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 600]}
    h={[280, 480, 600]}
    position="relative"
    top={{base:'0.5em',md:'3em'}}
    right={{base: 0, md: '2em'}}
  >
    {children}
  </Box>
))

export const VoxelLoader : React.FC = () => {
  return (
    //@ts-ignore
    <VoxelContainer>
      <Loader />
    </VoxelContainer>
  )
}
