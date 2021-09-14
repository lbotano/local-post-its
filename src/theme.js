import { createTheme } from '@material-ui/core/styles'
import { yellow, amber } from '@material-ui/core/colors'

// Disable no-magic-numbers option for color palettes
/* eslint-disable no-magic-numbers */

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[600]
    },
    secondary: {
      main: amber[800],
      contrastText: '#f0f0f0'
    }
  },
  typography: {
    fontFamily: 'Lato, Ubuntu, Roboto, Verdana, sans-serif'
  }
})

/* eslint-enable no-magic-numbers */

export default theme
