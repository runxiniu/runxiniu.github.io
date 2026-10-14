// Accessible mobile navigation; all page content remains available without JS.
document.documentElement.classList.add("js");
const toggle = document.querySelector(".navbar-toggler");
const navigation = document.querySelector("#navigation");

function setMenuOpen(open) {
  toggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
}

toggle.addEventListener("click", () => {
  setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    toggle.focus();
  }
});
window.matchMedia("(min-width: 576px)").addEventListener("change", () => setMenuOpen(false));
