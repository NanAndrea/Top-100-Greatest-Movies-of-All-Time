
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  
  Typography,
  
} from "@mui/material";
import { getMovieByMovieId } from "../services/movies";
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteMovies/FavoriteContext";
import { useFetchData } from "../hooks/useFetchData";

export function Movie() {
  const { addFavorite, favorite } = useContext(FavoriteContext);
  const { id } = useParams();

  const { data: movie, loading } = useFetchData({
    fetcher: () => getMovieByMovieId(id),
  });

  if (loading) {
    return <CircularProgress />;
  }
  

  return (
    <Box>
      <Box p={4} sx={{ width: "100%" }}>
        <Paper sx={{ p: 2 }} elevation={6}>
          <Grid container textAlign="start" maxWidth="lg" >
            <Grid container justifyContent="space-between">
              <Grid item >
                <Typography gutterBottom variant="h4" component="div" marginBottom={0}>
                  {movie.rank}.{movie.title}{" "}
                </Typography>
                <Typography
                  variant="h6"
                  display="inline-flex"
                  alignItems="center"
                  marginBottom={2}
                >
                  IMDb rating:
                  <StarRateIcon sx={{ color: "secondary.main" }} />
                  {movie.rating}
                  <Typography variant="subtitle1" component="span">
                    /10
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
              <Button
                    
                    onClick={() => {
                      addFavorite(movie);
                    }}
                  >
                    <FavoriteBorderIcon color="secondary" />
                  </Button>
              </Grid>
            </Grid>

           
              <Grid container wrap="wrap-reverse" spacing={2}>
                <Grid item lg={4} md={4} sm={12}>
                  <Box component="img" src={movie.image} width="100%" />
                </Grid>

                <Grid item lg={8} md={8} sm={12}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={movie.trailer}
                    title={movie.title}
                    allowFullScreen
                  ></iframe>
                </Grid>
              </Grid>

              <Grid item 
              >
                <Typography variant="body1" paddingY={5} fontWeight="bold">
                  {movie.description}
                </Typography>
                <Typography variant="subtitle1">Year: {movie.year}</Typography>
                <Divider variant="fullWidth" />
                <Typography variant="body2">Genre: {(movie.genre).join(" , ")}</Typography>
                <Divider variant="fullWidth" />
                <Typography variant="body2">
                  Director: {movie.director}
                </Typography>
                <Divider variant="fullWidth" />
                <Typography variant="body2">
                  Writers: {(movie.writers).join(" , ")}
                </Typography>
               
                </Grid>
            </Grid>
          
        </Paper>
      </Box>
    </Box>
  );
}
