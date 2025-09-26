const answers = [
    {
        number: "Q1)",
        type: "code",
        parts: [
            {
                label: "(a)",
                code: `
console.log(\`The quick brown fox
    jumps over the
lazy dog\`);`
            },
            {
                label: "(b)",
                code: `
console.log(\` ____
/.  .\\
| \\/ |
\\____/
\`);`
            },
            {
                label: "(c)",
                code: `
console.log("I've tried so hard and got so far and in the end it doesn't even matter.");`
            }
        ]
    },
    {
        number: "Q2)",
        type: "table",
        headers: ["Variable Name", "Valid / Invalid", "Reason(s)"],
        rows: [
            ["n@m3", "Invalid", "Has @"],
            ["while", "Invalid", "Reserved keyword"],
            ["1234Hi5", "Invalid", "Cannot start with number"],
            ["$I I$", "Valid", "Can start with $"],
            ["P0ck3t", "Valid", "Starts with a letter"],
            ["Mr. Molly", "Invalid", "Cannot have space and '.'"],
            ["switch", "Invalid", "Reserved Keyword"],
            ["_MannerMakesMan", "Valid", "Can start with _"]
        ]
    },
    {
        number: "Q3)",
        type: "table",
        headers: ["Category", "Data Types"],
        rows: [
            ["(a) Mailing Address", "String"],
            ["(b) Body Mass Index (BMI)", "Float"],
            ["(c) Credit Card Number (16 digits)", "Number"],
            ["(d) Is a year a leap year", "Boolean"],
            ["(e) Amount of Water in Water Bottle", "Number"],
            ["(f) Does password contain at least 8 characters", "Boolean"],
            ["(g) Movie Title & Director", "String"],
            ["(h) Year Published of a Book", "Number"]
        ]
    },
    {
        number: "Q4)",
        type: "table",
        headers: ["", "Program", "Output"],
        colWidths: ["w-10", "w-70", "w-20"],
        rows: [
            [
                "(a)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let x = 4;
                    x = 5;
                    console.log(x);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    5
                    </code>
                </pre>`
            ],
            [
                "(b)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let x, y;
                    x = 5;
                    y = x;
                    console.log(y);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    5
                    </code>
                </pre>`
            ],
            [
                "(c)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        let x, y;
                        y = x;
                        console.log(y);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    undefined
                    </code>
                </pre>`
            ],
            [
                "(d)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        let x, y, z;
                        z = 2;
                        y = z;
                        x = y;
                        console.log('z');
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    z
                    </code>
                </pre>`
            ]
        ]
    },
    {
        number: "Q5)",
        type: "table",
        headers: ["", "Program", "Output"],
        colWidths: ["w-10", "w-70", "w-20"],
        rows: [
            [
                "(a)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let x = 4;
                    let x1 = 5;
                    console.log(x);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    25
                    35
                    </code>
                </pre>`
            ],
            [
                "(b)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let boys, girls;
                    boys = 25;
                    girls = 35;
                    console.log(boys);
                    console.log(girls);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    5
                    </code>
                </pre>`
            ],
            [
                "(c)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let x, y;
                    y = x;
                    console.log(y);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    undefined
                    </code>
                </pre>`
            ],
            [
                "(d)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let x, y, z;
                    z = 2;
                    y = z;
                    x = y;
                    console.log('z');
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    z
                    </code>
                </pre>`
            ]
        ]
    },
    {
        number: "Q6)",
        type: "code",
        code: `
/*
==============================
Question 6
==============================
*/

console.log(
\`Module Code\\Name: ST0523\\"Fundamentals of Programming"
CA 1 :\t\t\t 40%
CA 2 :\t\t\t 20%
EXAM :\t\t\t 40%
Total---------->:100%\`
);
`
    }

];

renderAnswers(answers, "answers-container");