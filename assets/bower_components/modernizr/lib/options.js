function options(e,t){var n;return file.walkSync(srcRoot,function(e,r,i){n=_.chain(i).map(function(n){var r=fs.readFileSync(e+"/"+n,"utf8"),i=r.match(jsdocRE);if(i){i=i.map(stripComments).map(function(e){return jsdoc.parse(e,{sloppy:!0,tags:["access","author","class","example","function","memberOf","memberof","name","optionName","optionProp","param","params","preserve","private","returns","type"]})});var o=_.chain(i).flatten().filter(function(e){return t?!0:e&&_.some(e.tags,{title:"optionName"})}).map(function(e){if(t)return e;var n=e.tags.filter(function(e){return 0===e.title.indexOf("option")});return{name:_.filter(n,{title:"optionName"})[0].description,property:_.filter(n,{title:"optionProp"})[0].description}}).value();return o}}).filter(function(e){return e&&e.length}).flatten().value()}),e&&e(n),n}var fs=require("fs"),_=require("lodash"),file=require("file"),jsdoc=require("doctrine"),srcRoot=fs.realpathSync(__dirname+"/../src"),commentRE=/^(\s+)?(\/\*)?\*(\/)?\s?/gm,jsdocRE=/[^\S\r\n]*\/(?:\*{2})([\W\w]+?)\*\//gm,stripComments=function(e){return e.replace(commentRE,"")};module.exports=options;