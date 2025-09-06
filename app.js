import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  { id: "head" },
  "Hello THis is react heading"
);

root.render(heading);
