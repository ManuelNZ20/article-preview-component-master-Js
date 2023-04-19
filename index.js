const mainCard = document.querySelector(".card-main");
const buttonShare = document.querySelector(".button-share");
const containerUser = document.querySelector(".container-user");
const containerShare = document.querySelector(".container-share");
const element = window.getComputedStyle(mainCard);

buttonShare.addEventListener("click", () => {
  const width = element.getPropertyValue("width");
  if (width === "310px") {
    if (!containerUser.classList.contains("inactive")) {
      containerShare.classList.remove("inactive");
      containerUser.classList.add("inactive");
    } else {
      containerShare.classList.add("inactive");
      containerUser.classList.remove("inactive");
    }
  } else {
    containerUser.classList.remove("inactive");
    if (containerShare.classList.contains("inactive")) {
      containerShare.classList.remove("inactive");
    } else {
      containerShare.classList.add("inactive");
    }
  }
});
