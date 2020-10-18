import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Cute" }),
    React.createElement(Pet, { name: "Group", animal: "Cat", breed: "Cute" }),
    React.createElement(Pet, { name: "Rala", animal: "Bird", breed: "Cute" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));