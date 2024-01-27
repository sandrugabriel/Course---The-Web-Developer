
String.prototype.yell = function() {
	return `hey!!! ${this.toUpperCase()}!!!!! !`;
};

'bees'.yell(); 

Array.prototype.pop = function() {
	return 'error!';
};
const nums = [ 6, 7, 8, 9 ];
nums.pop(); 

//Factory Function

function makeColor(r, g, b) {
	const color = {};
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = function() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	};
	color.hex = function() {
		const { r, g, b } = this;
		return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
	};
	return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); 
firstColor.rgb();

const black = makeColor(0, 0, 0);
black.rgb(); 
black.hex(); 

//Constructor

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}
Color(35, 60, 190);

Color.prototype.rgb = function() {
	const { r, g, b } = this;
	return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
	const { r, g, b } = this;
	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
	const { r, g, b } = this;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

//
//CLASSES
//

class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
	}
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

//Mostenire
class Pet {
	constructor(name, age) {
		console.log('dog constructor!');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating!`;
	}
}

class Cat extends Pet {
	constructor(name, age, livesLeft = 9) {
		console.log('cat constructor!');
		super(name, age);
		this.livesLeft = livesLeft;
	}
	meow() {
		return 'MEOWWWW!!';
	}
}

class Dog extends Pet {
	bark() {
		return 'WOOOF!!';
	}
	eat() {
		return `${this.name} scarfs his food!`;
	}
}
