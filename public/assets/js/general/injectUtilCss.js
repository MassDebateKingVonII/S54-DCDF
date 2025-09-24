// List of CSS files in /utils folder
const utilsCSSFiles = [
    "prism.css",
    "icons.css",
    "top_navbar.css",
    "document_preview.css",
    "left_navigation.css",
    "code_preview.css",
    "widths.css",
    "letter_list.css"
    // add more files here
];

const utilsFolder = "/assets/css/utils/";

utilsCSSFiles.forEach(file => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = utilsFolder + file;
    document.head.appendChild(link);
});
