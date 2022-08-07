import { extendTheme, useBreakpointValue } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  config:{
     initialColorMode: 'dark',
     useSystemColorMode: false,
  },
  fonts:{
    heading: 'Poppins',
    body: 'Nunito',
    mono: "Menlo, monospace",
  },
  colors:{
    transparent: 'transparent',
    indigo: {
      50: '#c9cdfd',
      100: '#b7bcfd',
      200: '#949bfb',
      300: '#7079fa',
      400: '#5e69fa',
      500: '#4c58f9',
      600: '#444fe0',
      700: '#353eae',
      800: '#262c7d',
      900: '#171a4b',
    }
  },
  breakpoints: {
    'mdsm':'33em',
    'mdlg': '47.5em',
    '2xl': '96em',
  },
  components:{
    Heading: {
      variants: {
        'section-title': (props: StyleFunctionProps) => ({
          marginTop: 3,
          color: mode('blue.700','blue.300') (props),
        }),
        'subtitle': (props: StyleFunctionProps) => ({
          marginTop: 2,
          color: mode('indigo.700','indigo.100') (props),
        }),
      }
    },
    Drawer:{
      parts: ['dialog', 'header', 'body'],
      variants: {
        light: {
          dialog: {
            background: 'gray.50', 
          }
        },
        dark: {
          dialog: {
            background: 'gray.900',
          }
        }
      }
    }
  },
  styles: {
     global: (props:any) => ({
       body: {
        bg: mode('gray.50', 'gray.900')(props)
       }
     })
  },
})
