import { FavoriteContext } from "./FavoriteContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export function FavoriteContextProvider({ children }) {
  const [favorite, setFavorite] = useLocalStorage("favMovie", []);
  

  function addFavorite(product) {
    const movieExist = favorite.find((movie) => movie.id === product.id);
    
    
    if (movieExist) {
      const newList = favorite.map((movie) => {
        const movieInList = movie.id === product.id;
        if (movieInList) {
          return {
            ...movie,
          };
        } else {
          return movie;
          
        }
      });
      setFavorite(newList);
      
    } else {
      const newList = [
        ...favorite,
        {
          ...product,
        },
      ];
      setFavorite(newList);

    }
  }

  function removeFavorite(product) {
    const newList = favorite.filter((movie) => movie.id !== product.id);
    setFavorite(newList);
    
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
       
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
