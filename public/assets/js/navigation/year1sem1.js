// /assets/js/navigation/year1sem1.js
// For each year and semester pages navigation (year1sem1)


const callbackForYear1Sem1Mods = (responseStatus, responseData) => {
    if (responseStatus>= 200 && responseStatus < 300) {
        const modules = responseData; // store the result in modules

        renderModules(modules);
    } else {
        console.error("Failed to fetch modules. Status:", responseStatus, "Data:", responseData);
    }
}

fetchMethod('/api/modules?year_sem=year1_sem1', callbackForYear1Sem1Mods, "GET", null, null);