import React from "react";
import ReactDOM from "react-dom";
import DemomymApp from "./demonymApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DemonymApp />, div);
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
