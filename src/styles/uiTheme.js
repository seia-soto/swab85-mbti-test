import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.200'
      }
    }
  }
})

export default theme
