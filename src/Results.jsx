import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 place-items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
