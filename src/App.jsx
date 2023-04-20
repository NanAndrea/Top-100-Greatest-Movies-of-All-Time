
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'

import Routes from './routes'
import { theme } from './theme';
import { FavoriteContextProvider } from './context/favoriteMovies/FavoriteContextProvider';

const queryClient = new QueryClient();
function App() {
  

  return (
    <FavoriteContextProvider>
    <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
        <Routes />
        </QueryClientProvider>
        
      </ThemeProvider>
    
      </FavoriteContextProvider>
      
     
    
  );
}

export default App
