const darkModeToggle = document.getElementById("darkMode-toggle");
const icon = darkModeToggle.querySelector("i");

if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-gear");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-gear");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    icon.classList.replace("fa-gear", "fa-moon");
    localStorage.setItem("dark-mode", "disabled");
  }
});
