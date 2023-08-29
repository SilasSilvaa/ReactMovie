import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { MovieContextProvider } from './context/MovieContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MovieContextProvider>
          <Router />
        </MovieContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
