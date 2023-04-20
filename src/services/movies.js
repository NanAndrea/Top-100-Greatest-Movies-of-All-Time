import { fetchAndParse } from "./utils";

export const headers = {
    'X-RapidAPI-Key': '2c8e63c43cmshc5a31d0eae78948p1e946ejsn61191f18ea69',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}



export function getAllMovies(){
    return fetchAndParse("https://imdb-top-100-movies.p.rapidapi.com", {
    headers
    })
}

export function getMovieByMovieId(id){
    return fetchAndParse(`https://imdb-top-100-movies.p.rapidapi.com/${id}`,{
        headers
    })
}