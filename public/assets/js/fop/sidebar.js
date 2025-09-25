// /assets/js/fop/sidebar.js

document.getElementById("fop-sidebar").classList.add(
    "col-md-3",
    "d-none",
    "d-lg-block",
    "d-xl-block",
    "d-xxl-block"
);

document.getElementById("fop-sidebar").innerHTML = `
<div id="left-navbar-navigation" class="bg-light position-sticky top-0 p-2">
    <a class="navbar-brand w-100 text-center mb-3" href="#">
        <img src="/assets/images/fop/banner.png" class="img-fluid">
        <h3 class="mt-2">ST0523 - FOP</h3>
    </a>

    <div class="nav flex-column nav-pills w-100" role="tablist">
        <a class="nav-link w-100" href="/fop/intro">Introduction</a>

        <div class="nav-item w-100 dropdown">
            <a class="nav-link dropdown-toggle w-100 text-start" href="#" id="tutorialDropdown"
               role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Tutorial
            </a>
            <ul class="dropdown-menu w-100" aria-labelledby="tutorialDropdown">
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
</div>`;


const currentPath = window.location.pathname; // e.g. "/fop/tut/1"
const navLinks = document.querySelectorAll("#left-navbar-navigation a.nav-link, #left-navbar-navigation .dropdown-item");

// Clear active from all
navLinks.forEach(l => l.classList.remove("active"));

// Highlight exact link
navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPath) {
        link.classList.add("active");

        // If inside dropdown, also highlight parent toggle
        const parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
            parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
        }
    }

    // Special case: tutorial pages
    if (currentPath.startsWith("/fop/tut/") && link.closest(".dropdown")) {
        const parentDropdown = link.closest(".dropdown");
        if (parentDropdown) {
            parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
        }
    }
});

