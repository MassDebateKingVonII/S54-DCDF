(function () {
    const head = document.head;

    // 🔧 Small helper for meta
    function addMeta(name, content, attrType = "name") {
        const meta = document.createElement("meta");
        meta.setAttribute(attrType, name);
        meta.content = content;
        head.appendChild(meta);
    }

    // 🔧 Small helper for CSS
    function addCSS(href, { integrity = null, crossorigin = null } = {}) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        if (integrity) link.integrity = integrity;
        if (crossorigin) link.crossOrigin = crossorigin;
        head.appendChild(link);
    }

    // 🔧 Small helper for JS
    function addScript(src, { defer = true, async = false, onload = null } = {}) {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = src;
        if (defer) s.defer = true;
        if (async) s.async = true;
        if (onload) s.onload = onload;
        head.appendChild(s);
    }

    // 1️⃣ Meta tags
    addMeta("UTF-8", "", "charset");
    addMeta("viewport", "width=device-width, initial-scale=1");

    // 2️⃣ CSS to load EARLY (no FOUC)
    const styles = [
        // General Styling
        "/assets/css/style.css",

        // Bootstrap (from CDN, loads first so your CSS can override)
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css",
            integrity: "sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB",
            crossorigin: "anonymous"
        },

        // Bootstrap Icons
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        },

        // Utils CSS
        { href: "/assets/css/utils/prism.css" },
        { href: "/assets/css/utils/icons.css" },
        { href: "/assets/css/utils/top_navbar.css" },
        { href: "/assets/css/utils/document_preview.css" },
        { href: "/assets/css/utils/left_navigation.css" },
        { href: "/assets/css/utils/code_preview.css" },
        { href: "/assets/css/utils/widths.css" },
        { href: "/assets/css/utils/letter_list.css" }
    ];
    
    styles.forEach(style => {
        if (typeof style === "string") {
            addCSS(style);
        } else {
            addCSS(style.href, { integrity: style.integrity, crossorigin: style.crossorigin });
        }
    });

    // 3️⃣ Scripts to load (defer by default)
    const scripts = [
        "/assets/js/general/injectNavbar.js",
        "/assets/js/general/injectFooter.js",
        "/assets/js/utils/collapseButton.js"
    ];
    scripts.forEach(src => addScript(src));

    // 4️⃣ Prism (only inject if missing)
    if (!window.Prism) {
        addScript("/assets/js/general/prism.js", {
            defer: true,
            onload: () => Prism.highlightAll()
        });
    } else {
        Prism.highlightAll();
    }
})();
