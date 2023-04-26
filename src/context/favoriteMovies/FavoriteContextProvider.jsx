import { FavoriteContext } from "./FavoriteContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export function FavoriteContextProvider({ children }) {
  const [favorite, setFavorite] = useLocalStorage("favMovie", []);
  

  function addFavorite(item) {
    const newList = [...favorite, item];
    setFavorite(newList);
   
  }

  function removeFavorite(item) {
    const newList = favorite.filter((movie) => movie.id !== item.id);
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
