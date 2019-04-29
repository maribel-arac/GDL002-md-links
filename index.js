const fs = require('fs');
const path = require('path');


module.exports = {

//función para verificar si esta el archivo(el campo esta vacío o completo)
pathInserted: function(pathFile) {
if(pathFile != undefined) {
	console.log("true");
	return true
}
else {
	return false
}
},

//función para saber si existe la ruta
pathExists: function(pathFile) {
	if(fs.existsSync(pathFile)){
		console.log("true")
		return true
	} else {
		console.log("false");
		return false
	}
	},

//función para verificar si la ruta es un directorio
pathDirectory: function(pathFile){
  if(fs.statSync(pathFile).isDirectory()){
    return true
  } else{
    return false
  }
},

//función para saber si tiene una extension MD
mdExtension: function (pathFile){
		if (path.extname(pathFile) == ".md") {
			return true
		} else {
			return false
		}
	},

	// Para leer el archivo 
	// readingFileMD: function(pathFile) {
	// let file = fs.readFileSync(pathFile, 'utf-8');
	// console.log(file);
	// return true;
	// },

//leer el archivo para saber si tiene extensión MD (asincrono con una promesa)
readFileMd : function(pathFile, options){
return new Promise((resolve, reject)=> {
  // Leer el archivo
  fs.readFile(pathFile, function(err, data){
    if (err){
      return reject(err);
    }
    resolve(data.toString());
  });
});
},


//función para saber si contiene md-links
	containsMdLinks:() => {

	},

//para extraer el link
urlify: function(data) {
  // console.log(txt);
  const mdLinkRgEx = /\[(.+?)\]\(.+?\)/g;
  const mdLinkRgEx2 = /\[(.+?)\]\((.+?)\)/;

  let allLinks = data.match(mdLinkRgEx);
  var htmlLinks = [];
  for (var x in allLinks) {
    var grpdDta = mdLinkRgEx2.exec(allLinks[x]);
    var linkified = "<a href=\"" + grpdDta[2] + "\">" + grpdDta[1] + "<a>";
    console.log(linkified);
    htmlLinks.push(linkified);
  }
  return htmlLinks;
}

};

console.log(module.exports.urlify("./README.md"));
