// /assets/js/fop/sidebar.js

/**
 * Render the sidebar for the module
 * Uses a fixed target ID "sidebar"
 * @param {object} moduleData - Module info
 */
function renderSidebar(moduleData) {
	const sidebarEl = document.getElementById("sidebar");

	sidebarEl.classList.add(
		"col-md-3",
		"d-none",
		"d-lg-block",
		"d-xl-block",
		"d-xxl-block"
	);

	const { title, banner, menu } = moduleData;

	const sidebarHTML = `
	<div id="left-navbar-navigation" class="bg-light position-sticky top-0 p-2">
		<a class="navbar-brand w-100 text-center mb-3" href="#">
			<img src="${banner}" class="img-fluid w-100">
			<h3 class="mt-2">${title}</h3>
		</a>
	<div class="nav flex-column nav-pills w-100" role="tablist">
        ${menu
			.map(item => {
				if (item.type === "link") {
					return `<a class="nav-link w-100" href="${item.href}">${item.label}</a>`;
				} else if (item.type === "dropdown") {
					return `
                <div class="nav-item w-100 dropdown">
					<a class="nav-link dropdown-toggle w-100 text-start" href="#" id="${item.id}"
						role="button" data-bs-toggle="dropdown" aria-expanded="false">
						${item.label}
					</a>
					<ul class="dropdown-menu w-100" aria-labelledby="${item.id}">
						${item.items
								.map(
									sub =>
										`<li><a class="dropdown-item" href="${sub.href}">${sub.label}</a></li>`
								)
								.join("")}
					</ul>
                </div>
              `;
				}
			})
			.join("")}
		</div>
    </div>
  `;

	sidebarEl.innerHTML = sidebarHTML;
}

/**
 * Highlight the active link in the sidebar
 */
function highlightActiveLink() {
	const currentPath = window.location.pathname;
	const navLinks = document.querySelectorAll(
		"#left-navbar-navigation a.nav-link, #left-navbar-navigation .dropdown-item"
	);

	navLinks.forEach(link => link.classList.remove("active"));

	navLinks.forEach(link => {
		const href = link.getAttribute("href");

		if (href === currentPath) {
			link.classList.add("active");
			const parentDropdown = link.closest(".dropdown");
			if (parentDropdown) {
				parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
			}
		}

		// Highlight dropdown if tutorial page
		if (currentPath.startsWith("/fop/tut/") && link.closest(".dropdown")) {
			const parentDropdown = link.closest(".dropdown");
			if (parentDropdown) {
				parentDropdown.querySelector(".dropdown-toggle").classList.add("active");
			}
		}
	});
}
