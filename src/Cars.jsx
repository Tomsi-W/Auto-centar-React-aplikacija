import React from "react";

const Cars = ({ cars, selected }) => {
  return (
    <div className="cars">
      <h3>Automobili</h3>
      {cars.map((car) => (
        <div
          key={car.id}
          style={{
            background: car.id === selected.id ? "orange" : "transparent"
          }}
        >
          {car.model.name} – €{car.price.fromEUR} - €{car.price.toEUR}
        </div>
      ))}

      <h4>Izabrani automobili:</h4>
      <div>
        <img src={selected.image} alt={selected.model.name} width="150" />
        <p>
          {selected.model.name} – €{selected.price.fromEUR} - €{selected.price.toEUR}
        </p>
      </div>
    </div>
  );
};

export default Cars;
