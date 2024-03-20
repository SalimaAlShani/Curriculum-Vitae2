function myFunction() {
    alert("Hallo.. Salam kenal!!!");
}

function toggleInfo(sectionId) {
    var section = document.getElementById(sectionId);
    var sectionInfo = section.querySelector(".section-info");
    if (sectionInfo.style.display === "none") {
        sectionInfo.style.display = "block";
    } else {
        sectionInfo.style.display = "none";
    }
}

// Add event listeners to trigger toggleInfo function when buttons are clicked
document.getElementById("toggle-education").addEventListener("click", function() {
    toggleInfo("education-section");
});
document.getElementById("toggle-organization").addEventListener("click", function() {
    toggleInfo("organization-section");
});
document.getElementById("toggle-experience").addEventListener("click", function() {
    toggleInfo("experience-section");
});
document.getElementById("toggle-skills").addEventListener("click", function() {
    toggleInfo("skills-section");
});