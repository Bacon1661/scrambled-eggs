const fs = require("fs");
let scrambles = {};

(function loadFiles(dir = "./scrambles") {
	fs.readdirSync(dir).map(file => {
		file = file.split(".");
		return file[1] ? scrambles[file[0]] = require(`${dir}/${file[0]}.js`) : loadFiles(`${dir}/${file[0]}`);
	});
}());

function Egg(cube, amount) {
	if(!amount || isNaN(amount)) amount = 1;
	return scrambles[cube].run(amount);
}

module.exports = Egg;
