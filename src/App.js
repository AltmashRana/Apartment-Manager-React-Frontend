import { CssBaseline, Box, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MiniDrawer from "./components/drawer";
import AppRouter from "./router/AppRouter";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <AppRouter />
        </Box>
      </CssBaseline>
    </Box>
  );
}
