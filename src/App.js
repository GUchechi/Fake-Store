import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
        <Route path="/" exact element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
