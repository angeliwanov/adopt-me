import { Link } from "react-router-dom";

const Pet = ({ name, animal, images, location, id, breed }) => {
  let hero = "http:'//pets-images.dev-apis.com/pets/none.jpg";

  if (images.length > 0) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <dir className="m-0 object-contain p-0">
        <img src={hero} alt={name} />
      </dir>
      <div className="pr- absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pt-2">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
