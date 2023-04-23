import { Box, Button, Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';
import { useContext, useState } from "react";
import { FavoriteContext } from "../context/favoriteMovies/FavoriteContext";

import FavoriteIcon from '@mui/icons-material/Favorite';
import classes from "../module/pagesModule/pagesModule.module.css";
import styled from "@emotion/styled";

export function MovieCard({movie}){
 
    const { addFavorite, favorite} = useContext(FavoriteContext);

    let iconStoredMovie = favorite.find(item=>item.id === movie.id);
    const favoriteIconList = iconStoredMovie ? true : false;

    return(
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
            max-width="100%"
            image={movie.image}
            title={movie.title}
            alt={movie.title}
          />
        
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
           disabled={favoriteIconList}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addFavorite(movie);
              
              
             
            }}
            color={favoriteIconList ? "primary" : "secondary"}
          >
            <FavoriteIcon/>
          </Button>
        </Box>
        
      </Card>
      </Link>
    );
}