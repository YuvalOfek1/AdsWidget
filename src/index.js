const noImage = "https://fl-1.cdn.flockler.com/embed/no-image.svg";

const apiKey = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4";

const publisherId = "taboola-templates";

const appType = "desktop";

const sourceId = "56468964896489";

const apiUrl = `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=6&source.id=${sourceId}&source.type=video&source.url=https://www.usatoday.com/story/news/politics/onpolitics/2016/06/20/hillary-clinton-built-big-stockpile-showdown-donald-trump/86161596/`;

document.addEventListener("DOMContentLoaded", function () {
  // Fetch recommendations and render them in the widget
  fetchAds().then((res) => renderAds(res));
});

async function fetchAds() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

function renderAds(recommendations) {
//   const sortedAds = [...recommendations].sort((a, b) => {
//     return a.name.length - b.name.length;
//   });

  const container = document.getElementById("container");
  const title = `<div class="sponsored-title">
                    <div id="more-for-you">Recommended for you</div>
                    <div id="sponsored-links">Sponsored Links</div>

                </div>
                <hr class="hr-line" />`;
  container.innerHTML = title;

  const adContainer = document.createElement("div");
  adContainer.id = "adContainer";
  adContainer.className = "ad-container";
  container.appendChild(adContainer);

  recommendations.forEach((ad) => {
    const adCard = document.createElement("div");
    adCard.className = "ad-card";

    const adThumbnail = document.createElement("img");
    adThumbnail.className = "ad-thumbnail";
    adThumbnail.src = ad.thumbnail[0].url; // check if its empty
    adThumbnail.onerror = () => {
      adThumbnail.src = noImage;
    };

    const adDetails = document.createElement("div");
    adDetails.className = "ad-details";

    const adTitle = document.createElement("div");
    adTitle.className = "ad-title";
    adTitle.textContent = ad.name;

    const adDescription = document.createElement("div");
    adDescription.className = "ad-description";

    const adCreated = document.createElement("div");
    adCreated.className = "ad-created";

    const createdDate = new Date(ad.created);
    adCreated.textContent = `${createdDate.toLocaleString().split(",")[0]}`;

    const adBranding = document.createElement("div");
    adBranding.className = "ad-branding";
    adBranding.textContent = ` ${ad.branding}`;
    if (ad.origin == "sponsored") {
      adBranding.textContent += " | Sponsored";
    }

    const bottomDetails = document.createElement("div");
    bottomDetails.className = "bottom-details";
    bottomDetails.appendChild(adBranding);
    // bottomDetails.appendChild(adCreated);

    adDetails.appendChild(adTitle);
    // adDetails.appendChild(adDescription);
    // adDetails.appendChild(adCreated); // Added the created date
    // adDetails.appendChild(adBranding);
    adDetails.appendChild(bottomDetails);

    adCard.appendChild(adThumbnail);
    adCard.appendChild(adDetails);

    // Add click event to each ad card
    adCard.addEventListener("click", () => {
      openAdUrl(ad.url, ad.origin);
    });

    adContainer.appendChild(adCard);
  });
  const hrLine = document.createElement("hr");
  hrLine.className = "hr-line";
  container.appendChild(hrLine);
}

function openAdUrl(url, origin) {
  if (origin === "sponsored") {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
}
