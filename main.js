import "./preflight.css";
import Header from "./components/Header";

document.querySelector("#app").innerHTML = `
  <div>
    ${Header()}
  </div>
`;

setupCounter(document.querySelector("#counter"));
