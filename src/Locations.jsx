import React from "react";

const Locations = ({ data }) => {
  return (
    <div className="locations">
      <h3>Lokacije</h3>
      {data.map((loc, i) => (
        <div key={i}>
          <strong>{loc.name}</strong> – {loc.city}, {loc.address}
        </div>
      ))}
    </div>
  );
};

export default Locations;
