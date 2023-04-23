import {
  Box,
  Card,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteMovies/FavoriteContext";

import DeleteIcon from "@mui/icons-material/Delete";
import { ScrollToTop } from "../components/ScrollToTop";
import { Link } from "react-router-dom";
import classes from "../module/pagesModule/pagesModule.module.css";

export function FavoriteMovies() {
  
  const { favorite, removeFavorite } = useContext(FavoriteContext);

  return (
    <Box>
      <Grid container spacing={4} paddingY={5}>
        {favorite.length !== 0 ? (
          favorite.map((movie) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={movie.id}
                className={classes.imageZoom}
              >
                <Link to={`movie/${movie.id}`}>
                <Card
                  component={Paper}
                  elevation={6}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  
                    <CardMedia
                      component="img"
                      width="100%"
                      image={movie.image}
                      title={movie.title}
                      alt={movie.title}
                    />
                  
                  <Box
                    className={classes.overlay}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Tooltip title="Remove from favorite">
                      <DeleteIcon
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFavorite(movie);
                          
                        }}
                        color="secondary"
                        sx={{ cursor: "pointer" }}
                      />
                    </Tooltip>
                  </Box>
                 
                </Card>
                </Link>
              </Grid>
            );
          })
        ) : (
          <Stack
            display="flex"
            direction="column"
            width="100%"
            minHeight="100vh"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h4" textAlign="center">
              Your list is empty{" "}
            </Typography>
            <Typography variant="body1" textAlign="center">
              Check the list and add some movies{" "}
            </Typography>
          </Stack>
        )}
        <Grid></Grid>
      </Grid>
      <ScrollToTop />
    </Box>
  );
}
