import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet';

const App = () => {
//   return React.createElement("div", { id: "something-important" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Cute" }),
//     React.createElement(Pet, { name: "Group", animal: "Cat", breed: "Cute" }),
//     React.createElement(Pet, { name: "Rala", animal: "Bird", breed: "Cute" }),
//   ]);
// };
  return (
    <div>
      <h1 id="someting-important">Adopt Me!</h1>
      <Pet name="Boo" animal="Dog" breed="Not Cute but okay" />
      <Pet name="Dunkin" animal="Cat" breed="Cute" />
      <Pet name="Donut" animal="Cat" breed="Cute" />
    </div>
  )
}

//render(React.createElement(App), document.getElementById("root"));
render(<App/>, document.getElementById("root"));