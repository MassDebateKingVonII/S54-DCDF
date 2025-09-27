// Import Model
const modulesModel = require('../model/moduleModel.js');

// Import Utils
const { handleInternalError, handleModelError } = require('../utils/express/errorHelper.js');

module.exports.getAllModules = (req, res, next) => {
    const fnName = "getAllModules";

    try {
        // Optionally get year_sem from query string, e.g., ?year_sem=year1_sem1
        const year_sem = req.query.year_sem;

        const callback = (error, results) => {
            if (error) {
                return handleModelError(res, fnName, "getAll", error);
            }
            if (!results || results.length === 0) {
                return res.status(404).json({ message: "No Modules Found" });
            }
            return res.status(200).json(results);
        };

        // Pass year_sem to the model
        modulesModel.getAllFiltered(year_sem, callback);

    } catch (error) {
        return handleInternalError(res, fnName, error);
    }
};
