import React from "react";

const Cars = ({ cars, selected }) => {
  return (
    <div className="cars">
      <h3>Automobili</h3>

      {cars.map((car) => (
        <div
          key={car.id}
          style={{
            background: car.id === selected.id ? "orange" : "transparent",
            padding: "8px",
            marginBottom: "6px",
            borderRadius: "6px"
          }}
        >
          <div>
            {car.model.name} – €{car.price.fromEUR} - €{car.price.toEUR}
          </div>

          <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
            Motori: {car.engines?.join(", ")}
            {" · "}Osnovni: {car.defaultEngine}
            {" · "}Završna obrada: {car.finish}
            {" · "}
            <span
              title={car.colorHex}
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                verticalAlign: "middle",
                borderRadius: "3px",
                background: car.colorHex,
                marginLeft: "4px"
              }}
            />
            <span style={{ marginLeft: "6px" }}>{car.colorHex}</span>
          </div>
        </div>
      ))}

      <h4>Izabrani automobili:</h4>
      <div>
        <img src={selected.image} alt={selected.model.name} width="150" />
        <p style={{ margin: "6px 0" }}>
          {selected.model.name} – €{selected.price.fromEUR} - €{selected.price.toEUR}
        </p>
        <p style={{ margin: 0 }}>
          Motori: {selected.engines?.join(", ")} | Osnovni: {selected.defaultEngine} | Završna obrada: {selected.finish} |
          {" Boja: "}
          <span
            title={selected.colorHex}
            style={{
              display: "inline-block",
              width: "12px",
              height: "12px",
              verticalAlign: "middle",
              borderRadius: "3px",
              background: selected.colorHex,
              margin: "0 6px"
            }}
          />
          {selected.colorHex}
        </p>
      </div>
    </div>
  );
};

export default Cars;
