function Test(attr1) {
	this.attr1 = attr1;
	this.met1 = function() {
		console.log("attr1 is " + attr1);
	}
}

module.exports = Test;