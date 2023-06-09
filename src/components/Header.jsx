import { useContext, useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import Image from "../img/film-background-image.jpg";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { FavoriteContext } from "../context/favoriteMovies/FavoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ThemeContext } from "../context/theme/ThemeContext";


export function Header() {
  const theme = useTheme();
  const { toggleMode } = useContext(ThemeContext);
  const { favorite } = useContext(FavoriteContext);

  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            component="div"
            noWrap
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            <Avatar
              src={Logo}
              style={{
                width: 200,
                height: "100%",
                borderRadius: "0",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="primary"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={NavLink}
                to={"/"}
                onClick={handleCloseNavMenu}
                sx={{
                  "&.active": {
                    "& p": {
                      color: "secondary.main",
                      fontWeight: "bold",
                      border: "1px solid black",
                      paddingX: "3px",
                      borderRadius: "5px",
                    },
                  },
                }}
              >
                <Typography textAlign="center">HOME</Typography>
              </MenuItem>
              <MenuItem
                component={NavLink}
                to={"favoriteMovies"}
                onClick={handleCloseNavMenu}
                sx={{
                  "&.active": {
                    "& p": {
                      color: "secondary.main",
                      fontWeight: "bold",
                    },

                    border: "1px solid black",
                    borderRadius: "5px",
                    marginX: "3px",
                  },
                }}
              >
                <Typography textAlign="center">FAVORITE MOVIES</Typography>
                <Badge badgeContent={favorite.length} color="secondary">
                  <FavoriteBorderIcon sx={{ color: "secondary.main" }} />
                </Badge>
              </MenuItem>
            </Menu>
          </Box>

          <Avatar
            src={Logo}
            style={{
              width: 200,
              height: "100%",
              borderRadius: "0",
            }}
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />

          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              LinkComponent={NavLink}
              to={"/"}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&.active": {
                  color: "secondary.main",
                  fontWeight: "bold",

                  border: "1px solid white",
                },
              }}
            >
              HOME
            </Button>
            <Button
              LinkComponent={NavLink}
              to={"/favoriteMovies"}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&.active": {
                  color: "secondary.main",
                  fontWeight: "bold",

                  border: "1px solid white",
                },
              }}
            >
              FAVORITE MOVIES
              <Badge badgeContent={favorite.length} color="secondary">
                <FavoriteBorderIcon />
              </Badge>
            </Button>
          </Box>
          
          <Tooltip
            title={
              theme.palette.mode === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <IconButton onClick={toggleMode} color="primary">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
