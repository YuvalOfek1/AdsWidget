const noImage =
  "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
const apiKey = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4";
const publisherId = "taboola-templates";
const appType = "desktop";
const sourceId = "israel";

const widgetContainer = document.getElementById("recommendation-widget");

document.addEventListener("DOMContentLoaded", function () {
  // Fetch recommendations and render them in the widget
  fetchAds().then((res) => renderAds(res));
});


async function fetchAds() {
  const apiUrl = `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=6&source.id=${sourceId}&source.type=video&source.url=https://www.usatoday.com/story/news/politics/onpolitics/2016/06/20/hillary-clinton-built-big-stockpile-showdown-donald-trump/86161596/`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.list;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
  }
}

function renderAds(recommendations) {
  const adContainer = document.getElementById("adContainer");
  recommendations.forEach((ad) => {
    if (ad.origin != "sponsored") {
      console.log("organicc", ad);
    }
    const adCard = document.createElement("div");
    adCard.className = "ad-card";

    const adThumbnail = document.createElement("img");
    adThumbnail.className = "ad-thumbnail";
    adThumbnail.src = ad.thumbnail[0].url;
    adThumbnail.onerror = () => {
      //change the height
      adThumbnail.src = noImage;
    };

    const adDetails = document.createElement("div");
    adDetails.className = "ad-details";

    const adTitle = document.createElement("div");
    adTitle.className = "ad-title";
    adTitle.textContent = ad.name;

    const adDescription = document.createElement("div");
    adDescription.className = "ad-description";
    // adDescription.textContent = ad.description;

    const adCreated = document.createElement("div");
    adCreated.className = "ad-created";
    // Convert the created date to a more readable format
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
    adDetails.appendChild(adDescription);
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
}

function openAdUrl(url, origin) {
  if (origin === "sponsored") {
    window.open(url, "_blank");
  } else {
    window.location.href = url;
  }
}
