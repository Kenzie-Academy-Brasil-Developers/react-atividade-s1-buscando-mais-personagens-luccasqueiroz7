import "./styles.css";

function CharCard({ character }) {
  return (
    <li className={character.status}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>
        <span>{character.species}</span>
      </p>
    </li>
  );
}

export default CharCard;
