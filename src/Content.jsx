import React from "react";
import Locations from "./Locations";
import Cars from "./Cars";

const locations = [
  { name: "Auto centar Gavrić", city: "Novi Sad", address: "Gaudijeva 13" },
  { name: "Auto centar Ivković", city: "Novi Sad", address: "Mihaila Pupina 2" },
  { name: "Auto centar Klisa", city: "Novi Sad", address: "Ilije Birčanina 23" },
  { name: "Auto Centar Liman", city: "Novi Sad", address: "Pabla Pikasa 3" }
];

const cars = [
  {
    id: "dream",
    model: { name: "Dream Car" },
    image: "https://i.ibb.co/v4TJT978/blue-car.png",
    price: { fromEUR: 7899, toEUR: 43799 }
  },
  {
    id: "nido",
    model: { name: "Nidorino" },
    image: "https://i.ibb.co/tPJPSQK6/renault1.png",
    price: { fromEUR: 40639, toEUR: 58927 }
  },
  {
    id: "bulba",
    model: { name: "Bulbasaur" },
    image: "https://i.ibb.co/hFqJfRNr/renault2.png",
    price: { fromEUR: 27629, toEUR: 40062 }
  }
];

//izabran prema auto index
const selectedIndex = 1;

const Content = () => {
  return (
    <div className="content">
      <Locations data={locations} />
      <Cars cars={cars} selected={cars[selectedIndex]} />
    </div>
  );
};

export default Content;
