const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

/*
const mainRoutes = require('./routes/mainRoutes.js');
const jwtMiddleware = require('./middleware/auth/jwtMiddleware.js');
const cronMiddleware = require('./middleware/cronMiddleware.js');

*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//////////////////////////////////////////////////////
// STATIC ACCESS CONTROL SETUP
//////////////////////////////////////////////////////


// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "Hello World!"
//     })
// });

app.use(express.static(path.join(__dirname, "..", "public")));

// Main index page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// Settings Page
app.get("/settings", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "..", "views", "settings", "main.html"));
    } catch (error) {
        return res.status(404).json({
            message: "Not found"
        })
    }
});

// Year 1, Sem 1
app.get("/year1/sem1/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_one", "navigation.html"));
});

// Year 1, Sem 2
app.get("/year1/sem2/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_two", "navigation.html"));
});


// FOP
app.get("/fop/:page", (req, res) => {
    const page = req.params.page;
    const validPages = ["intro", "tut", "papers", "references"];

    if (validPages.includes(page)) {
        res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_one", "fop", `${page}.html`));
    } else {
        res.status(404).json({
            message: "Not Found"
        })
    }
});

app.get("/fop/tut/:tutorialNo", (req, res) => {
    const tutorialNo = req.params.tutorialNo;
    const validtutorialNo = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if (validtutorialNo.includes(tutorialNo)) {
        res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_one", "fop", "tutorial", `${tutorialNo}.html`));
    }
});


// FOC
app.get("/foc/:page", (req, res) => {
    const page = req.params.page;
    const validPages = ["intro", "tut", "papers", "projects", "references"];

    if (validPages.includes(page)) {
        res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_one", "foc", `${page}.html`));
    } else {
        res.status(404).json({
            message: "Not Found"
        })
    }
});

app.get("/foc/tut/:tutorialNo", (req, res) => {
    const tutorialNo = req.params.tutorialNo;
    const validtutorialNo = ["1A", "1B", "2", "3", "4", "5", "6", "7", "8", "9A", "9B", "10"];

    if (validtutorialNo.includes(tutorialNo)) {
        res.sendFile(path.join(__dirname, "..", "views", "year_one", "semester_one", "foc", "tutorial", `${tutorialNo}.html`));
    }
});

module.exports = app;

