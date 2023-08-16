import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { MovieContextProvider } from './context/MovieContext';

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Router />
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
