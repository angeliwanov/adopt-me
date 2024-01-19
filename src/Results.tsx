import { Pet as PetType } from "./APIResponsesTypes";

import Pet from "./Pet";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            animal={pet.animal}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            breed={pet.breed}
            name={pet.name}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
