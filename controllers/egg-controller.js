const { join } = require('path');
const { sendFile } = require('fs');

module.exports.seeEggs = (req, res, next) => {
    res.sendFile(join(__dirname, "../templates/eggs.html"));
};