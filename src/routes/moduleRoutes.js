/* 
====================
modulesRoutes.js
===================
*/

// Import Dependencies
const express = require('express');
const router = express.Router();

// Import controllers to reuse certain function, if not just one
const modulesController = require('../controller/moduleController.js');

router.get("/", 
    modulesController.getAllModules
);

module.exports = router;