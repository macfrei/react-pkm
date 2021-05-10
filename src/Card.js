import "./Card.css";

export default function Card({ name, types, images }) {
  return (
    <section className="Card">
      <h2>{name}</h2>
      <h3>Type:</h3>
      <ul className="TypeList">
        {types.map((type) => (
          <li key={type} className="Type">
            {type}
          </li>
        ))}
      </ul>
      <img src={images?.front} alt="" />
      <img src={images?.back} alt="" />
    </section>
  );
}
