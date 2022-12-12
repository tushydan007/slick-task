import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Input from "./components/input/Input";
import CartList from "./components/cartList/CartList";

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
    <>
      <Navbar />
      <Hero />
      <Input />
      <CartList movies={movies} />
    </>
  );
}

export default App;
