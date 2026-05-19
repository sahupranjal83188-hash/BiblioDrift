const STORAGE_KEY = "bibliodrift_theme";

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const root = document.documentElement;

    function applyTheme(theme) {
        // Apply core light/dark theme
        if (theme === "night") {
            root.setAttribute("data-theme", "night");

            if (themeToggle) {
                themeToggle.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';
            }
        } else {
            root.removeAttribute("data-theme");

            if (themeToggle) {
                themeToggle.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';
            }
        }

        // Save theme
        localStorage.setItem(STORAGE_KEY, theme);

        // Restore mood theme after switching
        if (typeof restoreTheme === "function") {
            restoreTheme();
        }
    }

    // Load saved theme
    const savedTheme =
        localStorage.getItem(STORAGE_KEY) || "light";

    applyTheme(savedTheme);

    // Toggle button
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme =
                root.getAttribute("data-theme") === "night"
                    ? "night"
                    : "light";

            const newTheme =
                currentTheme === "night"
                    ? "light"
                    : "night";

            applyTheme(newTheme);
        });
    }
});