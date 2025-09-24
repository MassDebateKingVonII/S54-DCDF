(function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Fallback timeout: ensure preloader disappears after max 3s
    const maxWait = setTimeout(removePreloader, 3000);

    // Remove preloader once DOM is parsed
    document.addEventListener('DOMContentLoaded', removePreloader);

    function removePreloader() {
        clearTimeout(maxWait);
        // Fade out
        preloader.style.transition = 'opacity 0.25s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 300);
    }
})();


