// utils/express/errorHelper.js

module.exports.handleModelError = (res, controllerFunc, modelFunc, error) => {
	console.error(`Error: [${controllerFunc}] -> [${modelFunc}]`, error);
	return res.status(500).json({
		message: "Database Error"
	});
};

module.exports.handleInternalError = (res, controllerFunc, error) => {
	console.error(`Error: [${controllerFunc}]`, error);
	return res.status(500).json({
		message: "Internal Server Error"
	});
};

