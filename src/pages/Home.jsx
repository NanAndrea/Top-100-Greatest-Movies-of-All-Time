import {
  Box,
 
  CircularProgress,
 
  FormControl,
  Grid,
  MenuItem,
  Pagination,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import { getAllMovies } from "../services/movies";

import { useMemo, useState } from "react";

import { useFetchData } from "../hooks/useFetchData";
import { ScrollToTop } from "../components/ScrollToTop";
import classes from "../module/pagesModule/pagesModule.module.css";
import { usePagination } from "../hooks/usePagination";
import genreOptions from "../services/genreOptions.json";

import { MovieCard } from "../components/MovieCard";
import { MovieList } from "../components/MovieList";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function Home() {
  const {
    data: movies,
    loading,
    error,
  } = useFetchData({
    fetcher: getAllMovies,
    initialData: [],
  });
  

  const [page, setPage] = useLocalStorage("page", 1);
  const [moviesPerPage] = useState(24);

  const [genre, setGenre] = useLocalStorage("genre", "allGenre");

  const [showList, setShowList] = useLocalStorage("showList", false);
  const [showPosters, setShowPosters] = useLocalStorage("showPosters",true);

  const [formats, setFormats] = useLocalStorage("format", showPosters);

  const Movies = usePagination(movies, moviesPerPage);
  const count = Math.ceil(movies.length / moviesPerPage);

 function handleChangePage(event, p) {
    setPage(p);
    Movies.jump(p);
  };

  
  function handleShowPosters() {
    setShowPosters(true);
     setShowList(false);
  }

  function handleShowList() {
    setShowList(true);
    
    setShowPosters(false);
  }

  function handleFormatChange(event, newFormats) {
    setFormats(newFormats);
  }


  const data = useMemo(() => {
    return movies.filter((movie) => {
      if (genre === "allGenre") {
        return movies;    
      }
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      return movieGenre.includes(genre);
      
    },[genre]);
   
  });
 
 

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Typography>Something went wrong with your request ...</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stack display="flex" direction="column" width="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          paddingY={5}
          alignItems="center"
        >
          <Stack paddingX={2}>
            <ToggleButtonGroup
              sx={{ fontWeight: "bold" }}
              color="secondary"
              value={formats}
              aria-label="Platform"
              exclusive
              onChange={handleFormatChange}
            >
              <ToggleButton value="list" disableRipple onClick={handleShowList}>
                List
              </ToggleButton>

              <ToggleButton
                value="posters"
                onClick={handleShowPosters}
                disableRipple
              >
                Posters
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>

          <Box paddingX={2}>
            <FormControl  sx={{ width: 150 }}>
              <Select
                labelId="multiple-select-label"
                id="multiple-select"
                
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
              >
                {genreOptions.map((option, i) => {
                  return (
                    <MenuItem value={option.value} key={i}>
                      {option.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Stack>

        {genre === "allGenre" ? (
          <Box>
            <Grid container spacing={4}>
              {showPosters &&
                Movies.currentData().map((movie) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={movie.id}
                    className={classes.imageZoomHome}
                  >
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
            </Grid>{" "}
            <Box marginTop={2}>
              <Grid container display="flex" direction="column" maxWidth="lg">
                {showList &&
                  Movies.currentData().map((movie) => (
                    <Box key={movie.id} border={1} marginBottom={2}>
                      <MovieList movie={movie} />
                    </Box>
                  ))}
              </Grid>
            </Box>
            <Box display="flex" justifyContent="center" paddingY={2}>
              <Pagination
              defaultPage={1}
                count={count}
                size="large"
                page={page}
                onChange={handleChangePage}
                color="secondary"
                shape="rounded"
                showFirstButton
                showLastButton
                
                
              />
            </Box>
          </Box>
        ) : (
          <Box marginBottom={4}>
            <Grid container spacing={4}>
              {showPosters &&
                data.map((movie) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={movie.id}
                    className={classes.imageZoomHome}
                  >
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
            </Grid>{" "}
            <Box marginTop={2}>
              <Grid container display="flex" direction="column" maxWidth="lg">
                {showList &&
                  data.map((movie) => (
                    <Box key={movie.id} border={1} marginBottom={2}>
                      <MovieList movie={movie} />
                    </Box>
                  ))}
              </Grid>
            </Box>
          </Box>
        )}

        <ScrollToTop/>
      </Stack>
    </Box>
  );
}
