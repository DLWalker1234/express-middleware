//Something I was told I need...
const { join } = require('path');

const { sendFile } = require('fs');

module.exports.seeChickens = (req, res, next) => {
    res.sendFile(join(__dirname, "../templates/chickens.html"));
};