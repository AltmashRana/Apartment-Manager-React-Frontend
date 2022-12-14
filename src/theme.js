import { grey, orange } from "@mui/material/colors";

export const getTheme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: {
                main: '#27b0ff',
                contrastText: '#000'
            },
            secondary: orange,
            text: {
                primary: '#000',
                secondary: grey[900],
            }
        } : {
            primary: {
                main: '#27b0ff',
                contrastText: '#000'
            },
            secondary: orange,
            text: {
                primary: '#fff',
                secondary: grey[400],
            },
            divider: orange,
            background: {
                default: '#000000',
                paper: grey[900]
            }
        })
    },
    components: {
        MuiButton: {
            defaultProps:{
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 'bold'
                }
            }
        },
    }
});
