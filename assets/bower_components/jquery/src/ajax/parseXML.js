define(["../core"],function(e){return e.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new window.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+t),n},e.parseXML});