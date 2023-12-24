import { fetchAds } from "./utils/api";
import { recommendations as ads } from "./recommendations";

document.addEventListener("DOMContentLoaded", function () {
  fetchAds().then((res) => renderAds(res));
});

export function renderAds(recommendations) {
  const container = document.getElementById("container");
  const hrLine = document.createElement("hr");
  hrLine.className = "hr-line";
  const title = `<div class="sponsored-title">
                    <div id="more-for-you">Recommended for you</div>
                    <div id="sponsored-links">Sponsored Links</div>
                </div>
                <hr class="hr-line"/>`;
  container.innerHTML = title;
  ads(recommendations, container);
  container.appendChild(hrLine);
}
