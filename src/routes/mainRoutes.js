
/* 
====================
mainRoutes.js
===================
    To handle the paths for each endpoint
*/

// Import Dependencies

const express = require('express');
const router = express.Router();

// Import all the Routes
const modulesRoutes = require('./moduleRoutes.js');

router.use("/modules", modulesRoutes);

// Export the Routes to the app.js
module.exports = router;