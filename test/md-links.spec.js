const mdLinks = require('../index.js');
const readFile = require('../links.js');


describe('mdLinks', () => {
	it('is an object',()=>{
		expect(typeof mdLinks).toBe('object');

	});
});

describe('pathInserted', () => {
	it('should be a function',()=>{
		expect(typeof mdLinks.pathInserted).toBe('function'); //mdLinks es el nombre de la función 
	});
});

describe('pathExists', () => {
	it('should be a function',()=>{
		expect(typeof mdLinks.pathExists).toBe('function');  
	});
});

describe('pathDirectory', () => {
	it('should be true', () => {
		expect(mdLinks.pathDirectory("/Users/Maribel/Desktop/GDL002-md-links")).toBe(true);
	});
});

describe('mdExtension', () => {
	it('should be a function',()=>{
		expect(typeof mdLinks.mdExtension).toBe('function');  
	});
});

describe('readFileResult', () => {
	it("is an object", () => {
		expect(typeof mdLinks.readFileResult("./prueba.md")).toBe('object');
	});
});

// describe('containsMdLinks', () => {
// 	it('should be a function', () => {
// 		expect(typeof mdLinks.containsMdLinks).toBe('function');
// 	});
// })

// describe("urlify", () =>{
//   it("Should be true", ()=> {
//     expect(mdLinks.urlify("./README.md")).toBe(htmlLinks);
//   });
// });