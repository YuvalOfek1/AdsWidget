import { branding as brandingComp } from "./branding";

export const details = ({name, created, branding, origin}) => {

    const adDetails = document.createElement("div");
    adDetails.className = "ad-details";

    const adTitle = document.createElement("div");
    adTitle.className = "ad-title";
    adTitle.textContent = name;

    const bottomDetails = document.createElement("div");
    bottomDetails.className = "bottom-details";
    bottomDetails.appendChild(brandingComp(branding, origin));

    adDetails.appendChild(adTitle);
    adDetails.appendChild(bottomDetails);

    return adDetails
}