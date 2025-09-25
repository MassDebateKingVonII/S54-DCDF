// /assets/js/fop/sidebar_mobile.js

const moduleSidebarButton = document.getElementById("module-sidebar");
let mobileOffcanvas; // keep a reference to the created offcanvas

function createMobileNav() {
    if (window.innerWidth < 992) {
        // Only create button/offcanvas if it doesn't exist
        if (!moduleSidebarButton.querySelector("button")) {
            moduleSidebarButton.innerHTML = `
                <button type="button" class="btn d-lg-none ms-2" data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasMobileNav" aria-controls="offcanvasMobileNav">
                    <i class="bi bi-folder-plus"></i> Chapters 
                </button>
            `;

            mobileOffcanvas = document.createElement("div");
            mobileOffcanvas.innerHTML = `
                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMobileNav" aria-labelledby="offcanvasMobileNavLabel">
                    <div class="offcanvas-header">
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body p-0">
                        <a class="navbar-brand w-100 text-center mb-3" href="#">
                            <img src="/assets/images/fop/banner.png" class="img-fluid">
                            <h3 class="mt-2">ST0523 - FOP</h3>
                        </a>
                        <div class="nav flex-column nav-pills w-100">
                            <a class="nav-link w-100" href="/fop/intro">Introduction</a>
                            <div class="nav-item w-100 dropdown">
                                <a class="nav-link dropdown-toggle w-100 text-start" href="#" id="mobileTutorialDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">Tutorial</a>
                                <ul class="dropdown-menu w-100" aria-labelledby="mobileTutorialDropdown">
                                    <li><a class="dropdown-item" href="/fop/tut/1">1 - Data Types</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/2">2 - Operators</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/3">3 - Looping</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/4">4 - Functions</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/5">5 - Conditional Programming</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/6">6 - Array</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/7">7 - Object Literals And Methods</a></li>
                                    <li><a class="dropdown-item" href="/fop/tut/8">8 - Array Of Objects</a></li>
                                </ul>
                            </div>
                            <a class="nav-link w-100" href="/fop/notes">Special Notes</a>
                            <a class="nav-link w-100" href="/fop/papers">Mock Papers</a>
                            <a class="nav-link w-100" href="/fop/credits">References & Credits</a>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(mobileOffcanvas);

            // Initialize offcanvas
            const offcanvasEl = document.getElementById("offcanvasMobileNav");
            if (offcanvasEl) new bootstrap.Offcanvas(offcanvasEl);

            // Highlight active link
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
                if (currentPath.startsWith("/fop/tut/") && link.closest(".dropdown")) {
                    const parentDropdown = link.closest(".dropdown");
                    if (parentDropdown) parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
                }
            });
        }
    } else {
        // Remove button/offcanvas when screen is large
        moduleSidebarButton.innerHTML = "";
        if (mobileOffcanvas) {
            mobileOffcanvas.remove();
            mobileOffcanvas = null;
        }
    }
}

// Run on page load
createMobileNav();

// Listen to window resize
window.addEventListener("resize", createMobileNav);
