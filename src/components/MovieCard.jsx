import { Box, Button, Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useContext } from "react";
import { FavoriteContext } from "../context/favoriteMovies/FavoriteContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import classes from "../module/pagesModule/pagesModule.module.css";

export function MovieCard({movie}){
    const { addFavorite } = useContext(FavoriteContext);
    return(
        <Card
        component={Paper}
        elevation={6}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to={`movie/${movie.id}`}>
          <CardMedia
            component="img"
            max-width="100%"
            image={movie.image}
            title={movie.title}
            alt={movie.title}
          />
        </Link>
        <CardContent>
          <Typography
            color="text.secondary"
            display="inline-flex"
            alignItems="self-end"
            fontWeight="bold"
          >
            <StarRateIcon sx={{ color: "secondary.main" }} />
            {movie.rating}
          </Typography>

          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            fontWeight="bold"
          >
            {movie.title}
          </Typography>
        </CardContent>

        <Box className={classes.overlayHome} textAlign="end">
          <Button
            
            onClick={() => {
              addFavorite(movie);
            }}
          >
            <FavoriteBorderIcon color="secondary" />
          </Button>
        </Box>
      </Card>
    );
}