// /assets/js/navigation/year1sem1.js
// For each year and semester pages navigation (year1sem1)

// Insert spinner right away
const container = document.getElementById("modules-list-container");
container.style.position = "relative"; // so spinner can center
container.innerHTML = `<div id="loading-spinner"></div>`;

const callbackForYear1Sem1Mods = (responseStatus, responseData) => {
    const spinner = document.getElementById("loading-spinner");

    if (responseStatus >= 200 && responseStatus < 300) {
        const modules = responseData; // store the result in modules

        // remove spinner before rendering
        if (spinner) spinner.remove();

        renderModules(modules);
    } else {
        console.error("Failed to fetch modules. Status:", responseStatus, "Data:", responseData);

        // replace spinner with error message
        if (spinner) spinner.outerHTML = `<p style="color:red;">❌ Failed to load modules</p>`;
    }
}

fetchMethod('/api/modules?year_sem=year1_sem1', callbackForYear1Sem1Mods, "GET", null, null);