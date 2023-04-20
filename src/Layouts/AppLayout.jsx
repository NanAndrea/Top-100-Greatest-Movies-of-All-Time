import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import classes from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <Box className={classes.root}>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}
