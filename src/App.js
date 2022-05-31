import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState({});
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );

  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <div className="App">
      <div className="prevNextButtons">
        {characterList.info?.prev !== null ? (
          <button
            onClick={() => {
              setCurrentPage(characterList.info.prev);
            }}
          >
            Previous Page
          </button>
        ) : (
          <button className="noPage">No Previous Page</button>
        )}

        {characterList.info?.next !== null ? (
          <button
            onClick={() => {
              setCurrentPage(characterList.info.next);
            }}
          >
            Next Page
          </button>
        ) : (
          <button className="noPage">No Next Page</button>
        )}
      </div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
