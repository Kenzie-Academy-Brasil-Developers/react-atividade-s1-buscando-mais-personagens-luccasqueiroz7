import "./styles.css";
import CharCard from "../CharCard";

function Characters({ characterList }) {
  const arrayCharacters = characterList.results;

  return (
    <div>
      <h1>Meus Personagens</h1>
      <ul className="meusPersonagens">
        {arrayCharacters?.map((character) => (
          <CharCard character={character} key={character.id} />
        ))}
      </ul>
    </div>
  );
}

export default Characters;
