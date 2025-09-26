function renderAnswers(answers, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return; // avoid errors if container not found
    container.innerHTML = ""; // clear old content

    answers.forEach(q => {
        container.innerHTML += `<h4>${q.number}</h4>`;

        if (q.type === "code") {
            if (q.parts) {

                q.parts.forEach(p => {
                    container.innerHTML += `
                        <h6>${p.label}</h6>
                        <pre class="line-numbers"><code class="language-javascript">${p.code}</code></pre>
                    `;
                });

            } else {

                container.innerHTML += `
                    <pre class="line-numbers"><code class="language-javascript">${q.code}</code></pre>
                `;
            }
        } else if (q.type === "table") {

            let tableHTML = `
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover align-middle">
                        <thead class="table-dark">
                            <tr>
                                ${q.headers.map((h, i) => {
                                    const w = q.colWidths?.[i] || "";
                                    return `<th class="${w}">${h}</th>`;
                                }).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${q.rows.map(r => `
                                <tr>
                                    ${r.map((c, i) => {
                                        const w = q.colWidths?.[i] || "";
                                        return `<td class="${w}">${c}</td>`;
                                    }).join('')}
                                </tr>`).join('')}
                        </tbody>
                    </table>
                </div>`;

            container.innerHTML += tableHTML;

        } else if (q.type === "list") {

            let listHTML = `
                <ol class="letter-list">
                    ${q.items.map(item => `<li>${item}</li>`).join('')}
                </ol>`;
            container.innerHTML += listHTML;
            
        } else if (q.type === "codeOutput") {
            q.rows.forEach(row => {
                container.innerHTML += `
                <div class="table-responsive">
                    <table class="table table-bordered table-striped table-hover align-middle">
                        <thead class="table-dark">
                            <tr>
                                <th>Program</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>${row.code}</td></tr>
                            <tr><td><h6>Output:</h6>${row.output}</td></tr>
                        </tbody>
                    </table>
                </div>`;
            });
        }
    });
}
