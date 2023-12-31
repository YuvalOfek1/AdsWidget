const noImage = "https://fl-1.cdn.flockler.com/embed/no-image.svg";

export const thumbnail = (img) => {
  const adThumbnail = document.createElement("img");
  adThumbnail.className = "ad-thumbnail";
  adThumbnail.src = img ? img : noImage;
  adThumbnail.onload = () => {
    console.log(adThumbnail);
  };
  adThumbnail.onerror = () => {
    adThumbnail.src = noImage;
  };
  return adThumbnail;
};
