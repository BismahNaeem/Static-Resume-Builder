document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-button");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            const personalInfoSection = document.querySelector(".personal-info");
            const skillsSection = document.querySelector(".skills");
            if (personalInfoSection && skillsSection) {
                personalInfoSection.classList.toggle("hidden");
                skillsSection.classList.toggle("hidden");
            }
        });
    }
});