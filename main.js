import "./preflight.css";
import Card from "./components/Card";

document.querySelector("#app").innerHTML = `
  <div>
    ${Card()}
  </div>
`;

setupCounter(document.querySelector("#counter"));
