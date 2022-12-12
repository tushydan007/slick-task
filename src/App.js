import "./App.css";
import MovieList from "./pages/MovieList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { data } = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=40f07ee4"
    );
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MovieList />
    </div>
  );
}

export default App;
