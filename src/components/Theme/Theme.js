import { createTheme } from '@mui/material/styles';

/**
 * @type {import('@mui/material/styles').Theme} Theme object for the application.
 */
const Theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#8AFF8A',
        },
    },
});

export default Theme;
