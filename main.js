import "./preflight.css";
import Header from "./components/Header";
import Banner from "./components/Banner";

document.querySelector("#app").innerHTML = `
  <div>
    ${Header()}
    ${Banner({
      genres: ["Science Fiction", "Award Winning"],
      stars: 5,
      title: "Avatar 2",
      description:
        "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      backgroundImage: "https://wallpapercave.com/wp/wp5212227.jpg",
    })}
  </div>
`;
