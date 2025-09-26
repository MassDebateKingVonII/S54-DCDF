// /assets/js/sidebar_mobile.js

const moduleSidebarButton = document.getElementById("module-mobile-sidebar");
let mobileOffcanvas;

/**
 * Render mobile sidebar offcanvas for any module
 * @param {object} moduleData - Module info (title, banner, menu)
 */
function renderMobileSidebar(moduleData) {
    const { title, banner, menu, offcanvasId } = moduleData;

    // Only create button/offcanvas if <992px and it doesn't exist
    if (window.innerWidth < 992 && !moduleSidebarButton.querySelector("button")) {
        // Button
        moduleSidebarButton.innerHTML = `
      <button type="button" class="btn d-lg-none ms-2" data-bs-toggle="offcanvas" 
        data-bs-target="#${offcanvasId}" aria-controls="${offcanvasId}">
        <i class="bi bi-folder-plus"></i> Chapters
      </button>
    `;

        // Offcanvas
        mobileOffcanvas = document.createElement("div");
        mobileOffcanvas.innerHTML = `
        <div class="offcanvas offcanvas-start" tabindex="-1" id="${offcanvasId}" aria-labelledby="${offcanvasId}Label">
            <div class="offcanvas-header">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-0">
                <a class="navbar-brand w-100 text-center mb-3" href="#">
                    <img src="${banner}" class="img-fluid">
                    <h3 class="mt-2">${title}</h3>
                </a>
                <div class="nav flex-column nav-pills w-100">
                ${menu
                    .map(item => {
                        if (item.type === "link") {
                            return `<a class="nav-link w-100" href="${item.href}">${item.label}</a>`;
                        } else if (item.type === "dropdown") {
                            return `
                        <div class="nav-item w-100 dropdown">
                            <a class="nav-link dropdown-toggle w-100 text-start" href="#" id="${item.id}"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">${item.label}</a>
                            <ul class="dropdown-menu w-100" aria-labelledby="${item.id}">
                                ${item.items.map(sub => `<li><a class="dropdown-item" href="${sub.href}">${sub.label}</a></li>`).join("")}
                            </ul>
                        </div>
                    `;
                        }
                    }).join("")}
                </div>
            </div>
        </div>
    `;

        document.body.appendChild(mobileOffcanvas);

        // Initialize offcanvas
        const offcanvasEl = document.getElementById(offcanvasId);
        if (offcanvasEl) new bootstrap.Offcanvas(offcanvasEl);

        highlightMobileActive(moduleData);
    } else if (window.innerWidth >= 992) {
        // Remove button/offcanvas when large
        moduleSidebarButton.innerHTML = "";
        if (mobileOffcanvas) {
            mobileOffcanvas.remove();
            mobileOffcanvas = null;
        }
    }
}

/**
 * Highlight active link in mobile sidebar
 */
function highlightMobileActive(moduleData) {
    const currentPath = window.location.pathname;
    const navLinks = mobileOffcanvas.querySelectorAll("a.nav-link, .dropdown-item");

    navLinks.forEach(l => l.classList.remove("active"));

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (href === currentPath) {
            link.classList.add("active");
            const parentDropdown = link.closest(".dropdown");
            if (parentDropdown) parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
        }

        // Highlight tutorial parent for all tutorial pages
        if (currentPath.startsWith(moduleData.tutorialPrefix || "") && link.closest(".dropdown")) {
            const parentDropdown = link.closest(".dropdown");
            if (parentDropdown) parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
        }
    });
}
