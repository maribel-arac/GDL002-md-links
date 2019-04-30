const fs = require('fs');
const path = require('path');
const pathFile = process.argv[2];
const links = require("./links");
const readFileResult = links(pathFile, null);


//función para verificar si esta el archivo(el campo esta vacío o completo)
function pathInserted (pathFile) {
if(pathFile != undefined) {
	console.log("true");
	return true
}
else {
	return false
}
};

//función para saber si existe la ruta
function pathExists (pathFile) {
	if(fs.existsSync(pathFile)){
		console.log("true")
		return true
	} else {
		console.log("false");
		return false
	}
	};

//función para verificar si la ruta es un directorio
function pathDirectory (pathFile){
  if(fs.statSync(pathFile).isDirectory()){
    return true
  } else{
    return false
  }
};

//función para saber si tiene una extension MD
 function mdExtension (pathFile){
		if (path.extname(pathFile) === ".md") {
			return true
		} else {
			return false
		}
	};

//leer el archivo
  readFileResult.then(
    (data)=> { // On Success
     console.log("Found links:");
     getLinks(data);
    },
    (err)=> { // On Error
        console.error(err);
    }
   );

//función que extrae los links
function getLinks(data) {
const mdLinkRgEx = /\[(.+?)\]\((.+?\))/g;
const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;
let allLinks = data.match(mdLinkRgEx);
let htmlLinks = [];
for (var x in allLinks) {
let grpdDta = mdLinkRgEx2.exec(allLinks[x]);
let grupoData = {
href: grpdDta[2], //es la posición donde empieza el link
text: grpdDta[1],
file: pathFile
}; 
 htmlLinks.push(grupoData);   
}
console.log(htmlLinks.length);
console.log(htmlLinks);
return (htmlLinks);
   
};

//es un 'dispensador' que llama conforme lo que se vaya necesitando
module.exports = {
"pathInserted": pathInserted,
"pathExists": pathExists,
"pathDirectory": pathDirectory,
"mdExtension": mdExtension,
"getLinks": getLinks,
"readFileResult": readFileResult,

};