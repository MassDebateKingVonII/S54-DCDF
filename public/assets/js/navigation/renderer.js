// The main function and code to run and display the modules

function renderStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += '<i class="bi bi-star-fill text-warning"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            starsHTML += '<i class="bi bi-star-half text-warning"></i>';
        } else {
            starsHTML += '<i class="bi bi-star text-warning"></i>';
        }
    }
    return starsHTML;
}

function renderModules(modules) {
    const container = document.getElementById('modules-list-container');
    container.innerHTML = modules.map(module => `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div class="card h-100">
                <img src="${module.img}" class="card-img-top" alt="${module.alt}">
                <div class="card-body">
                    <h5 class="card-title">${module.title}</h5>
                    <div class="card-text mt-2">
                        <span class="badge bg-info">Credits: ${module.credits}</span>
                        <span class="badge bg-info mb-2">Hours: ${module.hours}</span>
                        <p class="text-muted mb-1">Renamed in new syllabus: 
                            <span class="badge rounded-pill bg-success">${module.renamed}</span>
                        </p>
                        <hr>
                        <p>In this module, you will learn:</p>
                        <ul>
                            ${module.learnings.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                        <p>${module.description}</p>
                        <hr>
                        <p>Difficulty: ${renderStars(module.difficulty)}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-end">
                        <a href="${module.link}" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}