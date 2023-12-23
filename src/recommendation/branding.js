export const branding = (branding, origin) => {
    const adBranding = document.createElement("div");
        adBranding.className = "ad-branding";
        adBranding.textContent = ` ${branding}`;
        if (origin == "sponsored") {
          adBranding.textContent += " | Sponsored";
        }

        return adBranding;
    }