(function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    function fadeOutPreloader() {
        preloader.style.transition = 'opacity 0.5s ease'; // fast fade
        preloader.style.opacity = '0';
        setTimeout(() => {
            if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 500); // matches fade duration
    }

    // Wait until DOM is parsed
    document.addEventListener('DOMContentLoaded', () => {
        // Wait until all fonts are applied
        document.fonts.ready.then(() => {
            // Wait until browser has painted with CSS applied
            requestAnimationFrame(() => {
                fadeOutPreloader();
            });
        });
    });

    // Fallback: ensure preloader disappears max 5s
    setTimeout(fadeOutPreloader, 5000);
})();


