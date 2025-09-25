// injectGeneralStyle.js

// Injects Favicon
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon"
link.href = "/favicon.ico";
document.head.appendChild(link);

// Code highlighting looks
document.querySelectorAll("pre code").forEach(code => {
    code.setAttribute("data-prismjs-copy", "📋");
    code.setAttribute("data-prismjs-copy-success", "✅");
    code.setAttribute("data-prismjs-copy-error", "❌");
    code.setAttribute("data-prismjs-copy-timeout", "2000");
})

