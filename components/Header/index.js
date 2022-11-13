import "./index.scss";

function Header() {
  return `<header class="wrapper">
    <div class="header">
    <h1 class="header__title">
    <span class="title__strong">MOVIE</span>finder
  </h1>
  <div class="header__searchbar">
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9807 17.684L17.4501 18.1534L22.403 23.106L23.106 22.403L18.1532 17.4505L17.6836 16.9809L18.0928 16.458C19.3541 14.8458 20.0397 12.858 20.0402 10.8112L16.9807 17.684ZM16.9807 17.684L16.4578 18.0929M16.9807 17.684L16.4578 18.0929M16.4578 18.0929C14.8458 19.3535 12.8583 20.0386 10.8118 20.0391L16.4578 18.0929ZM10.8116 20.0391C5.724 20.039 1.58333 15.8984 1.58333 10.8112C1.58333 5.72384 5.72408 1.58325 10.8118 1.58325C15.8994 1.58325 20.0401 5.72374 20.0402 10.811L10.8116 20.0391ZM19.0456 10.8112C19.0456 6.26979 15.3533 2.57773 10.8118 2.57773C6.27026 2.57773 2.57794 6.26979 2.57794 10.8112C2.57794 15.3525 6.27026 19.0446 10.8118 19.0446C15.3533 19.0446 19.0456 15.3525 19.0456 10.8112Z" fill="white" stroke="#BCBCBC" stroke-width="1.5"/>
    </svg>
    <input type="search" placeholder="Search movies..." />
  </div>
  <div class="header__profile">
    Log out
    <svg class="profile__icon" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7667 15.9278C15.6203 15.9278 18.7443 12.8062 18.7443 8.9554C18.7443 5.10463 15.6203 1.98296 11.7667 1.98296C7.91305 1.98296 4.78906 5.10463 4.78906 8.9554C4.78906 12.8062 7.91305 15.9278 11.7667 15.9278Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.5333 26.0696C20.9203 21.51 16.6063 18.4617 11.7667 18.4617C6.92705 18.4617 2.61301 21.51 1 26.0696" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
    </div>
  </header>`;
}

export default Header;
