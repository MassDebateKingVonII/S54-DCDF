(() => {
    // Prevent redeclaration or reinjection
    if (window.navbarInjected) return;
    window.navbarInjected = true;

    const navbarHTML = `
    <nav id="mainNavbar" class="navbar navbar-expand-lg container-fluid border-bottom border-2 border-light" style="background-color: rgba(19, 149, 2, 1);">
        <div class="container-xxl">
            <div class="navbar-brand w-25">
                <a href="/">
                    <img src="/assets/images/icons/logo.png"
                        alt="Mass Debater Hacker"
                        class="rounded-circle"
                        style="width: 64px; height: 64px;">
                </a>
                <a href="/">
                    <img src="/assets/images/icons/logo-text.png"
                        alt="Mass Debate "
                        style="width: 160px; height: 64px;">
                </a>
            </div>

            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Single collapse container with all nav content -->
            <div class="collapse navbar-collapse" id="navbar-menu">
                <ul class="navbar-nav navbar-grid p-0 m-0 list-unstyled">
                    <li class="nav-item">
                        <a href="/" class="nav-link" data-match="/">Homepage</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="Year1Dropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            Year 1
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Year1Dropdown">
                            <li>
                                <a class="dropdown-item" href="/year1/sem1" 
                                data-match="/year1/sem1">Semester 1 <i class="bi bi-arrow-right-circle"></i>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/year1/sem2" 
                                data-match="/year1/sem2">Semester 2 <i class="bi bi-arrow-right-circle"></i>
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="Year2Dropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            Year 2
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="Year2Dropdown">
                            <li>
                                <a class="dropdown-item" href="/year2/sem1" 
                                data-match="/year2/sem1"><i class="bi bi-1-circle"></i> Semester 1
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/year2/sem2" 
                                data-match="/year2/sem2"><i class="bi bi-2-circle"></i> Semester 2
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                        </ul>
                    </li>

                    <!-- Reviews -->

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="reviewDropdown" role="button" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            Reviews
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="reviewDropdown">
                            <li>
                                <a class="dropdown-item" href="/review/getReviewsInfo" data-match="/review/getReviewsInfo">
                                <i class="bi bi-star-half"></i> All Reviews
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item" href="/review/createReview" data-match="/review/createReview">
                                <i class="bi bi-chat-square-dots"></i> Create Review
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                        </ul>
                    </li>

                    <!-- Wiki -->

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="wikiDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Wiki
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="wikiDropdown">
                            <li>
                                <a class="dropdown-item" href="/wiki/general" data-match="/wiki/general">
                                <i class="bi bi-book-half"></i> General
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <!-- Right side navbar -->
                <ul class="navbar-nav ms-auto navbar-grid">
                    <li class="nav-item dropdown col-auto text-center">
                        <div class="input-group mt-2">
                            <input type="search" class="form-control" id="gsearch" name="gsearch" placeholder="Search">
                            <button class="btn btn-outline-secondary bg-info" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </li>

                    <li class="nav-item dropdown col-auto text-center">
                        <a id="profileButton" href="#" class="nav-link dropdown-toggle d-flex align-items-center"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/assets/images/icons/cogwheel.png" class="icon-small">
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <a class="dropdown-item" href="/settings" data-match="/settings">
                                    <i class="bi bi-gear-wide-connected"></i> Settings
                                </a>
                                <a class="dropdown-item" href="/login" data-match="/login">
                                    <i class="bi bi-door-open"></i> Login/SignUp
                                </a>

                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    `;

    // Inject Navbar
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;

        const currentPath = window.location.pathname.toLowerCase();

        document.querySelectorAll('#navbar a.nav-link[data-match], #navbar a.dropdown-item[data-match]').forEach(link => {
            const matchPath = link.getAttribute('data-match').toLowerCase();

            const isRootLink = matchPath === "/";
            const isMatch = isRootLink ? currentPath === "/" : currentPath.startsWith(matchPath);

            if (isMatch) {
                link.classList.add('active');

                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const toggleLink = parentDropdown.querySelector('.nav-link.dropdown-toggle');
                    if (toggleLink) toggleLink.classList.add('active');
                }
            }
        });
    }
})();


