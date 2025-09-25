// Code highlighting looks
document.querySelectorAll("pre code").forEach(code => {
    code.setAttribute("data-prismjs-copy", "📋");
    code.setAttribute("data-prismjs-copy-success", "✅");
    code.setAttribute("data-prismjs-copy-error", "❌");
    code.setAttribute("data-prismjs-copy-timeout", "2000");
});
