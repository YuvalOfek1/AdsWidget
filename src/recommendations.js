import recommendation from "./recommendation";

export const recommendations = (recommendations, container) => {
  const adContainer = document.createElement("div");
  adContainer.className = "ad-container";
  container.appendChild(adContainer);
  recommendations.forEach((ad) => {
    adContainer.appendChild(recommendation(ad));
  });

  return adContainer;
};
