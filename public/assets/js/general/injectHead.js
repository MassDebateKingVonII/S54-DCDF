// Here injects all the necessary shared elements to every page

(function () {
    const head = document.head;

    // 1️⃣ Meta tags
    const metaViewport = document.createElement('meta');
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1";
    head.appendChild(metaViewport);


    // 2️⃣ Scripts to load (defer)
    const scripts = [
        // Bootstrap
        "/assets/js/general/injectBootstrap.js",

        // Custom Elements
        "/assets/js/general/injectNavbar.js",
        "/assets/js/general/injectFooter.js",
        "/assets/js/general/injectGeneralStyle.js",

        // Utils CSS
        "/assets/js/general/injectUtilCss.js",

        // Custom JS
        "/assets/js/general/prism.js",
        "/assets/js/shared/collapseButton.js"
    ];

    scripts.forEach(src => {
        const s = document.createElement('script');
        s.type = "text/javascript"
        s.src = src;
        s.defer = true;
        head.appendChild(s);
    });

    // After injecting all scripts
    if (!window.Prism) {
        const prism = document.createElement('script');
        prism.src = "/assets/js/general/prism.js";
        prism.defer = true;
        prism.onload = () => {
            Prism.highlightAll(); // highlight code after DOM ready
        };
        document.head.appendChild(prism);
    } else {
        Prism.highlightAll();
    }

})();