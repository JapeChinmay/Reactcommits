import { Fragment, useState } from "react";
import "./App.css";
import Movies from "./Components/Movies";

function App() {
  const [m, setM] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);

  async function fetchMovies() {
    SetIsLoading(true);
    const res = await fetch("https://swapi.dev/api/films");
    const data = await res.json();

    const transformed = data.results.map((d) => {
      return {
        title: d.title,
        openingText: d.opening_crawl,
        releaseDate: d.release_date,
      };
    });
    setM(transformed);
    SetIsLoading(false);
  }

  return (
    <Fragment>
      <section>
        {!isLoading && m.length > 0 && <Movies movies={m} />}
        {isLoading && m.length === 0 && <p>No movies</p>}

        <button onClick={fetchMovies}>FETCH DATA</button>
      </section>
    </Fragment>
  );
}

export default App;
