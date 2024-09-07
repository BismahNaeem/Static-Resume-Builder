document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggle-button");
    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            var personalInfoSection = document.querySelector(".personal-info");
            var skillsSection = document.querySelector(".skills");
            if (personalInfoSection && skillsSection) {
                personalInfoSection.classList.toggle("hidden");
                skillsSection.classList.toggle("hidden");
            }
        });
    }
});
