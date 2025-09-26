const answers = [
    {
        number: "Q1)",
        type: "list",
        items: [
            "4",
            "1.4285714285714286 or 10/7",
            "2",
            "10",
            "7",
            "2.666666666666667 or 8/3",
            "53.9",
            "81"
        ]
    },
    {
        number: "Q2)",
        type: "table",
        headers: ["", "Program", "Output"],
        colWidths: ["w-10", "w-70", "w-20"],
        rows: [
            [
                "(a)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log(5 * 20 + 7 % 6);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        101
                    </code>
                </pre>`
            ],
            [
                "(b)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log("FOP" + "is" + "fun!");
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        FOPisfun!
                    </code>
                </pre>`
            ],
            [
                "(c)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log(1 + "abcd");
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        1abcd
                    </code>
                </pre>`
            ],
            [
                "(d)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log("abcd " + 1);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        abcd 1
                    </code>
                </pre>`
            ],
            [
                "(e)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log(5 + 4 + " abcd ");
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        9 abcd
                    </code>
                </pre>`
            ],
            [
                "(f)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log(1 + " abcd " + 1);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        1 abcd 1
                    </code>
                </pre>`
            ],
            [
                "(g)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log("abcd " + 1 + 1);
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        abcd 11
                    </code>
                </pre>`
            ],
            [
                "(h)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        console.log(1 + "ab" + (1+1));
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                        1ab2
                    </code>
                </pre>`
            ]
        ]
    },
    {
        number: "Q3)",
        type: "list",
        items: [
            "false",
            "true",
            "false",
            "true",
            "true",
            "true",
            "true",
            "true",
            "false",
        ]
    },
    {
        number: "Q4)",
        type: "codeOutput",
        colWidths: ["w-100"], // optional, can be ignored if single column
        header: "Program",
        rows: [
            {
                code: `
                <pre class="line-numbers">
                    <code class="language-javascript">
                        let b1 = true, b2 = false, b3 = true;
                        let a1 = 1, a2 = 2, a3 = 3;
                        console.log(b1 && b2 || b3);
                        console.log(a2 >= a3);
                        console.log(a1 < a2);
                        console.log(++a1 == a2);
                        console.log("a1 = " + a1);
                        console.log("a2 = " + a2);
                        console.log("a3 = " + a3);
                    </code>
                </pre>`,
                output: `
                <pre>
                    <code class="language-bash">
                        true
                        false
                        true
                        true
                        a1 = 2
                        a2 = 2
                        a3 = 3
                    </code>
                </pre>`
            }
        ]
    },
    {
        number: "Q5)",
        type: "table",
        headers: ["", "Program", "Error(s)"],
        colWidths: ["w-10", "w-60", "w-30"],
        rows: [
            [
                "(a)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        let _them = 'true',
                            _them = 5;
                        console.log('_them);
                    </code>
                </pre>`,
                `<ul>
                    <li>Mismatched quotes in <code>console.log</code></li>
                    <li>Redeclared variable <code>_them</code></li>
                </ul>`
            ],
            [
                "(b)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                        let n1 = 5, n2 = 0;
                        n1 /= n2;
                        console.log(n1);
                    </code>
                </pre>`,
                `<ul>
                    <li>No Syntax Errors</li>
                    <li>Output will be <code class="language-bash">Infinity</code></li>
                </ul>`
            ],
            [
                "(c)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    const pi = 3.14159;
                    pi = 3.142;
                    console.log(pi);
                    </code>
                </pre>`,
                `<ul>
                    <li><code class="language-bash">TypeError: Assignment to constant variable.</code></li>
                    <li>Because pi was declared with <code class="language-javascript">const</code>, it cannot be reassigned.</li>
                </ul>`
            ]
        ]
    },
    {
        number: "Q6)",
        type: "table",
        headers: ["", "Program", "Output"],
        colWidths: ["w-10", "w-80", "w-10"],
        rows: [
            [
                "(a)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    let num = 10;
                    if (num > 10) {
                        console.log("a");
                    }
                    if (num > 5) {
                        console.log("b");
                    }
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    b
                    </code>
                </pre>`
            ],
            [
                "(b)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    if (4 >= 4) {
                        console.log("c");
                    }
                    if (2 > 5 || 3 < 6) {
                        console.log("d");
                    }
                    if (true) {
                        console.log("e");
                    }
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    c
                    d
                    e
                    </code>
                </pre>`
            ],
            [
                "(c)",
                `<pre class="line-numbers">
                    <code class="language-javascript">
                    if (15 % 4 == 3 && 2 * 2 > 3) {
                        console.log("f");
                    }
                    if (true || false) {
                        console.log("g");
                    }
                    if (!false && 11 % 3 >= 3) {
                        console.log("h");
                    }
                    </code>
                </pre>`,
                `<pre>
                    <code class="language-bash">
                    f
                    g
                    </code>
                </pre>`
            ]
        ]
    },
    {
        number: "Q7)",
        type: "code",
        code: `
/*
==============================
Question 7
==============================
*/

let x = 20;
let y = 5;
let z  = x * y;

console.log(\`
x: \${x}
y: \${y}
z: \${z}
\`);
`
    },
    {
        number: "Q8)",
        type: "code",
        code: `
/*
==============================
Question 8
==============================
*/

// (a)
const reader = require("readline-sync");

let name, color;
do {
    name = reader.question("Enter your name: ");
} while(name.length === 0);

console.log(name + " loves Programming!");

// (b)

// Code is continued from (a) as one whole program
do {
    color = reader.question("Enter your favorite color: ");
} while (color.length === 0)

console.log(name + " loves Programming & " + color + " color");
    },

];`
    },
    {
        number: "Q9)",
        type: "code",
        code: `
/*
==============================
Question 9
==============================
*/
const q = require("readline-sync");

let fa;
let cel;

do {

    fa = Number(q.question("Enter Temperature in Fahrenheit: "));
    // check fa first

    if (Number.isNaN(fa)) {

        console.log("It is not a number!");
        continue;

    } else {

        cel = 5/9*(fa-32);

        if (cel <20 || cel >25) {

            console.log("It is not in the range");
            continue;
        } else {
            break;
        }
    }

} while(true);

console.log(\`The current room temperature is \${cel} degrees Celcius\`);
`
    },
    {
        number: "Q10)",
        type: "code",
        code: `
/*
==============================
Question 10
==============================
*/
const scanner = require(\`readline-sync\`);

let x;
let y;

do {
    x = scanner.question("Enter First number: ");
} while (
    Number.isNaN(Number(x)) ||
    x === null ||
    x.length == 0
);

do {

    y = scanner.question("Enter Second Number: ");

} while (
    Number.isNaN(Number(y)) ||
    y === null ||
    y.length == 0
);

x = Number(x);
y = Number(y);

console.log(\`
\${x} + \${y} = \${(x+y)}
\${x} is divisible by \${y}? \${x%y==0}\`);
`
    },
    {
        number: "Q11)",
        type: "code",
        code: `
/*
==============================
Question 11
==============================
*/

let year1 = 1996;
let year2 = 1900;

let isLeapYear;

function evalYear(year) {

    isLeapYear = year % 4 === 0 && year % 100 !== 0 || year%400 === 0;

    console.log(year + " is a leap year? " + isLeapYear);
}

evalYear(year1);
evalYear(year2);
`
    },
    {
        number: "Q12)",
        type: "code",
        code: `
/*
==============================
Question 12
==============================
*/

const scanner = require("readline-sync");

let username;
let salary;

do {

    username = scanner.question("Enter your name: ");

} while(username === null ||
    username === undefined ||
    username.length === 0);

console.log(\`Hello \${username}!\`);

do {

    salary = scanner.question("Please enter your current salary: ");
    salary = salary.replaceAll("$","");


} while(salary === null ||
    salary === undefined ||
    salary.length == 0 ||
    Number.isNaN(Number(salary) ||
    Number(salary) == 0
));

salary = Number(salary);
let newsalary = salary;

switch (true) {

    case (newsalary<1000):

    newsalary += (0.2*newsalary);

    case (newsalary<2000 && newsalary>1000):

    newsalary += (newsalary*0.15);

    case (newsalary >= 2000):

    newsalary += (newsalary*0.1);
}

console.log(\`
Here\\'s the result....
Current Salary     Increment     New Salary
\${salary}              \${newsalary-salary}           \${newsalary}
\`);
`
    },
    {
        number: "Q13)",
        type: "code",
        code: `
/*
==============================
Question 13
==============================
*/

const scanner = require("readline-sync");

let x1;
let y1;
let x2;
let y2;
let distance = 0;

do {
    x1 = Number(scanner.question("x1: "));
    if (Number.isNaN(x1)) {
        console.log("Invalid Input of x1");
        continue;
    }
    y1 = Number(scanner.question("y1: "));
    if (Number.isNaN(y1)) {
        console.log("Invalid Input of y1");
        continue;
    }
    x2 = Number(scanner.question("x2: "));
    if (Number.isNaN(x2)) {
        console.log("Invalid Input of x2");
        continue;
    }
    y2 = Number(scanner.question("y2: "));
    if (Number.isNaN(x2)) {
        console.log("Invalid Input of y2");
        continue;
    }

    distance = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)));
    break;
} while (true);

console.log(distance);
`
    },
    {
        number: "Q14)",
        type: "code",
        code: `
/*
==============================
Question 14
==============================
*/

const scanner = require("readline-sync");

let theta1;
let theta2;

do {

theta1 = Number(scanner.question("First Angle: "));
theta2 = Number(scanner.question("Second Angle: "));

    if (theta1 + theta2 >= 180 || theta1 == 0 || theta2 == 0
        || Number.isNaN(theta1) || Number.isNaN(theta2)) {

        console.log("Invalid values");
        continue;
    } else {

        console.log(\`Third angle is $\{180 - theta1 - theta2} deegrees\`);

        break;
    }

} while (true);
`
    },
    {
        number: "Q14)",
        type: "code",
        code: `
/*
==============================
Question 15
==============================
*/

const q = require("readline-sync");

let value = Number(q.question("Enter Amount ($): "));


if (value < 0 || Number.isNaN(value) || !Number.isInteger(value)) {

    console.log("Invalid Value: Make sure its an integer");

} else {
    let thousands = parseInt(value / 1000);
    let remainder = value % 1000;


    let hundreds = parseInt(remainder / 100);
    remainder = remainder % 100;


    let fifties = parseInt(remainder / 50);
    remainder = remainder % 50;


    let tens = parseInt(remainder / 10);
    remainder = remainder % 10;


    let fives = parseInt(remainder / 5);
    remainder = remainder % 5;


    let twos = parseInt(remainder / 2);
    remainder = remainder % 2;


    let ones = parseInt(remainder / 1);

    console.log(\`

\${thousands} Note(s) of 1000.00\\n

\${hundreds} Note(s) of 100.00\\n

\${fifties} Note(s) of 50.00\\n

\${tens} Note(s) of 10.00\\n

\${fives} Note(s) of 5.00\\n

\${twos} Note(s) of 2.00\\n

\${ones} Note(s) of 1.00\\n

    \`);

}
`
    }

];

renderAnswers(answers, "answers-container");