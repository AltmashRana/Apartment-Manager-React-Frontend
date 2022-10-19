import { hot } from "react-hot-loader/root";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import AppRouter from "./navigation/RouterConfig";
import { getTheme } from "./theme";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const App = () => {
  const [theme, setTheme] = useState(createTheme(getTheme('light')));

  const mode = useSelector((store) => store.theme.mode);
  useEffect(() => {
    setTheme(createTheme(getTheme(mode)));
  }, [mode])

  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <MiniDrawer />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
              <AppRouter />
            </Box>
          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default hot(App);
