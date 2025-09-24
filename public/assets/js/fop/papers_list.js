// MST
const mstFiles = [
    { name: "mock.pdf", path: "/assets/documents/fop/mst/mock.pdf" },
];

const mstFileList = document.getElementById("mst-file-list");

mstFiles.forEach(file => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
    <div class="d-flex align-items-center">
    <div class="bg-white border rounded p-2 me-3">
        <i class="bi bi-file-pdf text-danger fs-4"></i>
    </div>
    <span>${file.name}</span>
    </div>
    <div class="d-flex align-items-center">
    <a href="${file.path}" target="_blank" class="btn btn-outline-success me-2">
        <i class="bi bi-eye"></i>
    </a>
    <a href="${file.path}" download class="btn btn-primary">
        <i class="bi bi-download"></i>
    </a>
    </div>
`;

    mstFileList.appendChild(li);
});

//EST

// Array of file objects
const estFiles = [
    { name: "set1.pdf", path: "/assets/documents/fop/est/set1.pdf" },
    { name: "set2.pdf", path: "/assets/documents/fop/est/set2.pdf" },
    { name: "set3.pdf", path: "/assets/documents/fop/est/set3.pdf" },
    { name: "set4.pdf", path: "/assets/documents/fop/est/set4.pdf" },
    { name: "set5.pdf", path: "/assets/documents/fop/est/set5.pdf" },
    { name: "set6.pdf", path: "/assets/documents/fop/est/set6.pdf" }

];

const estFileList = document.getElementById("est-file-list");

estFiles.forEach(file => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
    <div class="d-flex align-items-center">
    <div class="bg-white border rounded p-2 me-3">
        <i class="bi bi-file-pdf text-danger fs-4"></i>
    </div>
    <span>${file.name}</span>
    </div>
    <div class="d-flex align-items-center">
    <a href="${file.path}" target="_blank" class="btn btn-outline-success me-2">
        <i class="bi bi-eye"></i>
    </a>
    <a href="${file.path}" download class="btn btn-primary">
        <i class="bi bi-download"></i>
    </a>
    </div>
`;

    estFileList.appendChild(li);
});
