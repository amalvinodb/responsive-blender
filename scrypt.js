const ham = document.querySelector(".burger");
const navi = document.querySelector(".navitem");
let mbtn = false;
ham.addEventListener("click", () => {
  if (!mbtn) {
    navi.classList.add("open");
    ham.classList.add("open");
    mbtn = true;
  } else {
    ham.classList.remove("open");
    navi.classList.remove("open");
    mbtn = false;
  }
});
