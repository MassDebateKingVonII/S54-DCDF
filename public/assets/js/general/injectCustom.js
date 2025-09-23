// injectCustomCSS.js

// Adds the custom css to the <head>

// Add General style css
const styleCSS = document.createElement('link');
styleCSS.rel = 'stylesheet';
styleCSS.href = '/assets/css/style.css';

document.head.appendChild(styleCSS);

// injects Favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "/assets/images/icons/favicon.ico";
document.head.appendChild(link);
