let scrambles = {};
scrambles.clock = require("./scrambles/clock.js");
scrambles.mega = require("./scrambles/mega.js");
scrambles.pyra = require("./scrambles/pyra.js");
scrambles.redi = require("./scrambles/redi.js");
scrambles.skewb = require("./scrambles/skewb.js");
scrambles.squan = require("./scrambles/squan.js");

function Egg(cube, amount) {
	if(!amount || isNaN(amount)) amount = 1;
//  using later for NNN cubes: scrambles = require(`./scrambles/NNN/${NNN}.js`);
	return scrambles[cube].run(amount);
}

module.exports = Egg;
