const fs = require("fs");
const path = require("path");

const _ = require("lodash");

const BASE_PATH = "./src/AIcon/";
const FOLDER = process.argv[2];
const SVG_PATH = path.join(BASE_PATH, "SVG-icons", FOLDER);
const JS_PATH = path.join(BASE_PATH, "Icons", FOLDER);

fs.readdir(SVG_PATH, (err, files) => {
  files.forEach(file => {
    const SVG_FILE_PATH = path.join(SVG_PATH, file);
    const FILE_NAME = `${ _.upperFirst(_.camelCase(file.split(".")[0])) }.js`;
    const JS_FILE_PATH = path.join(JS_PATH, FILE_NAME);
    fs.readFile(SVG_FILE_PATH, "utf8", function(err, data) {
      if (err) {
        throw err; 
      }
      const JS_TEXT = setJsFromSvg(data);
      fs.writeFileSync(JS_FILE_PATH, JS_TEXT, "utf8");
    });
  });
});


function setJsFromSvg(svgText) {
  return `export default \`${ svgText }\`;\n`;
}
