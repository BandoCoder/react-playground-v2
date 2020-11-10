import React from "react";
import TheDate from "./state/TheDate";
import Counter from "./state/Counter";
import HelloWorld from "./state-drills/HelloWorld";
import Bomb from "./state-drills/Bomb";
import RouletteGun from "./state-drills/RouletteGun";
import Tabs from "./Tabs";
import Accordion from "./state-drills/Accordion";
import DemonymApp from "./demonymapp/demonymApp";

const tabsProp = [
  {
    name: "First tab",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.",
  },
  {
    name: "Second tab",
    content:
      "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Third tab",
    content:
      "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.",
  },
];

const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
  },
];

function App() {
  return (
    <main className="App">
      {
        <div>
          <TheDate />
          <Counter step={3} />
          <HelloWorld />
          <Bomb />
          <RouletteGun />
          <Tabs tabs={tabsProp} />
          <Accordion sections={sections} />
          <DemonymApp />
        </div>
      }
    </main>
  );
}

export default App;
