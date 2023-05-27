import { CssBaseline} from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import Routes from "./routes";

import { FavoriteContextProvider } from "./context/favoriteMovies/FavoriteContextProvider";
import { ThemeContextProvider } from "./context/theme/ThemeContextProvider";

const queryClient = new QueryClient();
function App() {
  return (
    <ThemeContextProvider>
      <FavoriteContextProvider>
        <CssBaseline />

        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </FavoriteContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
