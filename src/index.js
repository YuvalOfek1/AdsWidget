import { fetchAds } from "./utils/api";
import { recommendations as ads } from "./recommendations";

document.addEventListener("DOMContentLoaded", function () {
  fetchAds().then((res) => renderAds(res));
});

export function renderAds(recommendations) {
  const container = document.getElementById("container");
  const hrLine = document.createElement("hr");
  hrLine.className = "hr-line";

  const sponsoredTitle = document.createElement("div");
  sponsoredTitle.className = "sponsored-title";

  const moreForYou = document.createElement("div");
  moreForYou.id = "more-for-you";
  moreForYou.textContent = "Recommended for you";

  const sponsoredLinks = document.createElement("div");
  sponsoredLinks.id = "sponsored-links";
  sponsoredLinks.textContent = "Sponsored Links";

  sponsoredTitle.appendChild(moreForYou);
  sponsoredTitle.appendChild(sponsoredLinks);

  container.appendChild(sponsoredTitle);
  container.innerHTML += "<hr class='hr-line'/>";

  ads(recommendations, container);
  container.appendChild(hrLine);
}
