import { extendTheme } from "@chakra-ui/react"
import "@fontsource/roboto-condensed"
import "@fontsource/roboto"
import '@fontsource/open-sans'
import '@fontsource/yantramanav'
import '@fontsource/passion-one'

const theme = extendTheme({
  fonts: {
    heading: "Roboto Condensed",
    body: "Roboto Condensed"
  },
})

export default theme