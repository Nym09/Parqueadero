const toggleBtn = document.getElementById("toggleAside");
const sidebar = document.querySelector("aside");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});