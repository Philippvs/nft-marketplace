import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#222222',
        },
        secondary: {
            main: '#a3371d',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

export default theme


