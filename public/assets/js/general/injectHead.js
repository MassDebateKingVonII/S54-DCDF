(function () {
    const head = document.head;

    // 🔧 Meta helper
    function addMeta(name, content, attrType = "name") {
        const meta = document.createElement("meta");
        meta.setAttribute(attrType, name);
        meta.content = content;
        head.appendChild(meta);
    }

    // 🔧 Preconnect helper
    function addPreconnect(href, opts = {}) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    }

    // 🔧 DNS prefetch fallback
    function addDNSPrefetch(href) {
        const link = document.createElement("link");
        link.rel = "dns-prefetch";
        link.href = href;
        head.appendChild(link);
    }

    // 🔧 Preload helper
    function addPreload(href, as, opts = {}) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = as;
        link.href = href;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    }

    // 🔧 CSS helper
    function addCSS(href, opts = {}) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        if (opts.integrity) link.integrity = opts.integrity;
        if (opts.crossOrigin) link.crossOrigin = opts.crossOrigin;
        head.appendChild(link);
    }

    // 🔧 JS helper
    function addScript(src, { defer = true, async = false, onload = null, integrity = null, crossOrigin = null } = {}) {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        if (defer) s.defer = true;
        if (async) s.async = true;
        if (onload) s.onload = onload;
        if (integrity) s.integrity = integrity;
        if (crossOrigin) s.crossOrigin = crossOrigin;
        head.appendChild(s);
    }

    // 1️⃣ Meta
    addMeta("UTF-8", "", "charset");
    addMeta("viewport", "width=device-width, initial-scale=1");

    // 2️⃣ Preconnect / DNS Prefetch
    const cdn = "https://cdn.jsdelivr.net";
    addPreconnect(cdn, { crossOrigin: "anonymous" });
    addDNSPrefetch(cdn);

    // 3️⃣ Favicon (preload + normal)
    const faviconHref = "/favicon.ico";
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = faviconHref;
    head.appendChild(favicon);
    addPreload(faviconHref, "image");

    // 4️⃣ CSS
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

    // 5️⃣ Bootstrap JS setup
    const bootstrapJS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js";
    addPreload(bootstrapJS, "script", { crossOrigin: "anonymous" });

    window.bootstrapLoaded = false;
    window.bootstrapReadyCallbacks = [];

    window.runWhenBootstrapReady = function(fn) {
        if (window.bootstrapLoaded) fn();
        else window.bootstrapReadyCallbacks.push(fn);
    };

    addScript(bootstrapJS, {
        defer: false,
        integrity: "sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI",
        crossOrigin: "anonymous",
        onload: () => {
            window.bootstrapLoaded = true;

            // Initialize tooltips/popovers
            window.initPopups = function() {
                document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
                document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el, { trigger: "hover" }));
            };
            window.initPopups();

            // Run queued callbacks
            window.bootstrapReadyCallbacks.forEach(cb => {
                try { cb(); } catch(e) { console.error("Bootstrap callback error:", e); }
            });
        }
    });

    // 6️⃣ Your custom scripts (preload + load)
    const scripts = [
        "/assets/js/general/injectNavbar.js",
        "/assets/js/general/injectFooter.js",
        "/assets/js/utils/collapseButton.js"
    ];
    scripts.forEach(src => {
        addPreload(src, "script");
        addScript(src);
    });

    // 7️⃣ Prism (preload + load)
    const prismJS = "/assets/js/general/prism.js";
    addPreload(prismJS, "script");

    if (!window.Prism) {
        addScript(prismJS, {
            defer: true,
            onload: () => {
                Prism.highlightAll();
                document.querySelectorAll("pre code").forEach(code => {
                    code.setAttribute("data-prismjs-copy", "📋");
                    code.setAttribute("data-prismjs-copy-success", "✅");
                    code.setAttribute("data-prismjs-copy-error", "❌");
                    code.setAttribute("data-prismjs-copy-timeout", "2000");
                });
            }
        });
    } else {
        Prism.highlightAll();
        document.querySelectorAll("pre code").forEach(code => {
            code.setAttribute("data-prismjs-copy", "📋");
            code.setAttribute("data-prismjs-copy-success", "✅");
            code.setAttribute("data-prismjs-copy-error", "❌");
            code.setAttribute("data-prismjs-copy-timeout", "2000");
        });
    }
})();
