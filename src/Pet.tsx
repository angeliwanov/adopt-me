import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";
import { FunctionComponent } from "react";

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet = (props: IProps) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http:'//pets-images.dev-apis.com/pets/none.jpg";

  if (images.length > 0) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
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
