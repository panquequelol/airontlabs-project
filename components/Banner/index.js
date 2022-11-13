import "./../common.scss";
import "./index.scss";

function Banner({
  genres,
  stars,
  title,
  description,
  trailerLink,
  backgroundImage,
}) {
  return `
  <div class="banner" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});">
    <div class="banner__content">
      <ul class="content__tags">
          ${genres.map((genre) => `<li>${genre}</li>`)}
      </ul>
      <h2 class="content__title">${title}</h2>
      <p class="content__description">${description}</p>
      <div class="button__wrapper">
      <a class="button">
          Watch Now
      </a>
      </div>
    </div>
  </div>`;
}

export default Banner;
