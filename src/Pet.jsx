import { Link } from "react-router-dom";

const Pet = ({ name, animal, images, location, id, breed }) => {
  let hero = "http:'//pets-images.dev-apis.com/pets/none.jpg";

  if (images.length > 0) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <dir className="image-container">
        <img src={hero} alt={name} />
      </dir>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
