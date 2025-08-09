const toggleSwitch = document.getElementById("darkModeToggle");
const body = document.body;

// Load saved mode from localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
