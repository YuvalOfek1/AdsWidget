import { details } from "./details";
import { thumbnail } from "./thumbnail";

function openAdUrl(url, origin) {
    if (origin === "sponsored") {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  }  

const recommendation = (ad) => {
    const adCard = document.createElement("div");
    adCard.className = "ad-card";
    
    adCard.appendChild(thumbnail(ad.thumbnail[0].url));
    adCard.appendChild(details(ad));
    
    adCard.addEventListener("click", () => {
      openAdUrl(ad.url, ad.origin);
    });

    return adCard;
}

export default recommendation;