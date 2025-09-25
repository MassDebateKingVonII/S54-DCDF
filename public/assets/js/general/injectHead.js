(() => {
    const head = document.head;

    // 🔧 Helpers
    const addMeta = (name, content, attrType = "name") => {
        const meta = document.createElement("meta");
        meta.setAttribute(attrType, name);
        meta.content = content;
        head.appendChild(meta);
    };

    const addPreconnect = (href, opts = {}) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    };

    const addPreload = (href, as, opts = {}) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = href;
        link.as = as;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    };

    const addCSS = (href, opts = {}) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        if (opts.integrity) link.integrity = opts.integrity;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    };

    const addScript = (src, { defer = true, async = false, onload = null, integrity = null, crossOrigin = null } = {}) => {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        if (defer) s.defer = true;
        if (async) s.async = true;
        if (onload) s.onload = onload;
        if (integrity) s.integrity = integrity;
        if (crossOrigin) s.crossOrigin = crossOrigin;
        head.appendChild(s);
    };

    // 1️⃣ Meta
    addMeta("UTF-8", "", "charset");
    addMeta("viewport", "width=device-width, initial-scale=1");

    // 2️⃣ Preconnect to CDN
    addPreconnect("https://cdn.jsdelivr.net", { crossOrigin: "anonymous" });

    // 3️⃣ CSS
    const bootstrapCSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css";
    addPreload(bootstrapCSS, "style", { crossOrigin: "anonymous" });
    addCSS(bootstrapCSS, {
        integrity: "sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB",
        crossOrigin: "anonymous"
    });

    const styles = [
        "/assets/css/style.css",
        "/assets/css/utils/prism.css",
        "/assets/css/utils/icons.css",
        "/assets/css/utils/top_navbar.css",
        "/assets/css/utils/document_preview.css",
        "/assets/css/utils/left_navigation.css",
        "/assets/css/utils/code_preview.css",
        "/assets/css/utils/widths.css",
        "/assets/css/utils/letter_list.css",
    ];
    styles.forEach(href => {
        addPreload(href, "style");
        addCSS(href);
    });

    // 4️⃣ Bootstrap JS with callback system
    const bootstrapJS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
    addPreload(bootstrapJS, "script", { crossOrigin: "anonymous" });

    window.bootstrapLoaded = false;
    window.bootstrapReadyCallbacks = [];
    window.runWhenBootstrapReady = fn => {
        if (window.bootstrapLoaded) fn();
        else window.bootstrapReadyCallbacks.push(fn);
    };

    addScript(bootstrapJS, {
        defer: false,
        integrity: "sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI",
        crossOrigin: "anonymous",
        onload: () => {
            window.bootstrapLoaded = true;

            window.initPopups = () => {
                document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
                document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el, { trigger: 'hover' }));
            };
            window.initPopups();

            window.bootstrapReadyCallbacks.forEach(cb => {
                try { cb(); } catch (e) { console.error("Bootstrap callback error:", e); }
            });
        }
    });

    // 5️⃣ Navbar + Footer injection (inline, fast)

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
    const footerHTML = `
    <footer class="text-center text-lg-start bg-dark text-light border-top border-2 border-light">
        <div class="container py-4">
            <div class="row align-items-center">
                <!-- Logo and brand -->
                <div class="col-md-6 text-md-start mb-3 mb-md-0">
                    <a href="/" class="d-flex align-items-center text-decoration-none text-light">
                        <img src="/assets/images/icons/logo.png" 
                            alt="Mass Debater Hacker" 
                            class="rounded-circle me-2 icon-large">
                        <span class="fw-bold">Mass Debate Notes</span>
                    </a>
                </div>

                <!-- Social media -->
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-light me-3"><i class="bi bi-facebook fs-5"></i></a>
                    <a href="#" class="text-light me-3"><i class="bi bi-twitter fs-5"></i></a>
                    <a href="#" class="text-light me-3"><i class="bi bi-discord fs-5"></i></a>
                    <a href="#" class="text-light"><i class="bi bi-github fs-5"></i></a>
                </div>
            </div>

            <hr class="my-3 border-light">

            <!-- Copyright -->
            <div class="text-center small text-secondary">
                &copy; ${new Date().getFullYear()} Mass Debate Platform. All rights reserved.
            </div>
        </div>
    </footer>
    `;

    document.addEventListener("DOMContentLoaded", () => {
        const navbarContainer = document.getElementById("navbar");
        if (navbarContainer && !window.navbarInjected) {
            window.navbarInjected = true;
            navbarContainer.innerHTML = navbarHTML;

            // Highlight active links
            const currentPath = window.location.pathname.toLowerCase();
            navbarContainer.querySelectorAll('a.nav-link[data-match], a.dropdown-item[data-match]').forEach(link => {
                const matchPath = link.getAttribute('data-match').toLowerCase();
                const isRoot = matchPath === "/";
                const isMatch = isRoot ? currentPath === "/" : currentPath.startsWith(matchPath);
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

        const footerContainer = document.getElementById("footer");
        if (footerContainer && !window.footerInjected) {
            window.footerInjected = true;
            footerContainer.innerHTML = footerHTML;
        }
    });

    // 6️⃣ Prism
    const prismJS = "/assets/js/general/prism.js";
    addPreload(prismJS, "script");
    if (!window.Prism) {
        addScript(prismJS, { defer: true, onload: () => Prism.highlightAll() });
    } else {
        Prism.highlightAll();
    }

    // 7️⃣ Favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/favicon.ico";
    head.appendChild(favicon);
    
})();
