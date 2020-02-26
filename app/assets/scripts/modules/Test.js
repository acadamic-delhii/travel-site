class Test {
	constructor(attr1) {
		this.attr1 = attr1;
	}
	
	met1() {
		console.log("test babel 22... attr1 is " + this.attr1);
	}
}

//module.exports = Test;
export default Test;