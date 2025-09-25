// injectBootstrap.js

/* Links

*/

// Global flags and callback queue to know when Bootstrap JS is loaded
window.bootstrapLoaded = false;
window.bootstrapReadyCallbacks = [];

// Helper function to run callbacks when Bootstrap JS is ready
window.runWhenBootstrapReady = function(fn) {
    if (window.bootstrapLoaded) {
        fn();
    } else {
        window.bootstrapReadyCallbacks.push(fn);
    }
};

// Add Bootstrap JS (bundle includes Popper)
const bootstrapJS = document.createElement('script');
bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';
bootstrapJS.integrity = 'sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI';
bootstrapJS.crossOrigin = 'anonymous';

bootstrapJS.onload = () => {
    window.bootstrapLoaded = true;

    // Define initPopups now that bootstrap is defined
    window.initPopups = function() {
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
            new bootstrap.Tooltip(el);
        });
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
            new bootstrap.Popover(el, { trigger: 'hover' });
        });
    };

    // Run all waiting callbacks safely
    window.bootstrapReadyCallbacks.forEach(cb => {
        try {
            cb();
        } catch (e) {
            console.error('Bootstrap callback error:', e);
        }
    });

    window.initPopups(); // initialize popups here
};


document.head.appendChild(bootstrapJS);