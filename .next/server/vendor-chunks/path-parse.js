"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/path-parse";
exports.ids = ["vendor-chunks/path-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsMERBQTBELElBQUk7O0FBRTVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQzs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzbV9iYW5raW5nLy4vbm9kZV9tb2R1bGVzL3BhdGgtcGFyc2UvaW5kZXguanM/MjM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIGludG8gW2Rpciwgcm9vdCwgYmFzZW5hbWUsIG5hbWUsIGV4dF1cbnZhciBzcGxpdFdpbmRvd3NSZSA9XG4gICAgL14oKCg/OlthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/W1xcXFxcXC9dPykoPzpbXlxcXFxcXC9dKltcXFxcXFwvXSkqKSgoXFwuezEsMn18W15cXFxcXFwvXSs/fCkoXFwuW14uXFwvXFxcXF0qfCkpW1xcXFxcXC9dKiQvO1xuXG52YXIgd2luMzIgPSB7fTtcblxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0V2luZG93c1JlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufVxuXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gd2luMzJTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcm9vdDogYWxsUGFydHNbMV0sXG4gICAgZGlyOiBhbGxQYXJ0c1swXSA9PT0gYWxsUGFydHNbMV0gPyBhbGxQYXJ0c1swXSA6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdXG4gIH07XG59O1xuXG5cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKChcXC8/KSg/OlteXFwvXSpcXC8pKikoKFxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSlbXFwvXSokLztcbnZhciBwb3NpeCA9IHt9O1xuXG5cbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxuXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gcG9zaXhTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0uc2xpY2UoMCwgLTEpLFxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxuICAgIGV4dDogYWxsUGFydHNbNF0sXG4gICAgbmFtZTogYWxsUGFydHNbM10sXG4gIH07XG59O1xuXG5cbmlmIChpc1dpbmRvd3MpXG4gIG1vZHVsZS5leHBvcnRzID0gd2luMzIucGFyc2U7XG5lbHNlIC8qIHBvc2l4ICovXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXgucGFyc2U7XG5cbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXgucGFyc2U7XG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyLnBhcnNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/path-parse/index.js\n");

/***/ }),

/***/ "(instrument)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL3BhdGgtcGFyc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixFQUFFLDBEQUEwRCxJQUFJOztBQUU1Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLElBQUk7QUFDbkM7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc21fYmFua2luZy8uL25vZGVfbW9kdWxlcy9wYXRoLXBhcnNlL2luZGV4LmpzPzI2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcblxuLy8gUmVnZXggdG8gc3BsaXQgYSB3aW5kb3dzIHBhdGggaW50byBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdXG52YXIgc3BsaXRXaW5kb3dzUmUgPVxuICAgIC9eKCgoPzpbYS16QS1aXTp8W1xcXFxcXC9dezJ9W15cXFxcXFwvXStbXFxcXFxcL10rW15cXFxcXFwvXSspP1tcXFxcXFwvXT8pKD86W15cXFxcXFwvXSpbXFxcXFxcL10pKikoKFxcLnsxLDJ9fFteXFxcXFxcL10rP3wpKFxcLlteLlxcL1xcXFxdKnwpKVtcXFxcXFwvXSokLztcblxudmFyIHdpbjMyID0ge307XG5cbmZ1bmN0aW9uIHdpbjMyU3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFdpbmRvd3NSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxud2luMzIucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHdpbjMyU3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0gPT09IGFsbFBhcnRzWzFdID8gYWxsUGFydHNbMF0gOiBhbGxQYXJ0c1swXS5zbGljZSgwLCAtMSksXG4gICAgYmFzZTogYWxsUGFydHNbMl0sXG4gICAgZXh0OiBhbGxQYXJ0c1s0XSxcbiAgICBuYW1lOiBhbGxQYXJ0c1szXVxuICB9O1xufTtcblxuXG5cbi8vIFNwbGl0IGEgZmlsZW5hbWUgaW50byBbZGlyLCByb290LCBiYXNlbmFtZSwgbmFtZSwgZXh0XSwgdW5peCB2ZXJzaW9uXG4vLyAncm9vdCcgaXMganVzdCBhIHNsYXNoLCBvciBub3RoaW5nLlxudmFyIHNwbGl0UGF0aFJlID1cbiAgICAvXigoXFwvPykoPzpbXlxcL10qXFwvKSopKChcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpW1xcL10qJC87XG52YXIgcG9zaXggPSB7fTtcblxuXG5mdW5jdGlvbiBwb3NpeFNwbGl0UGF0aChmaWxlbmFtZSkge1xuICByZXR1cm4gc3BsaXRQYXRoUmUuZXhlYyhmaWxlbmFtZSkuc2xpY2UoMSk7XG59XG5cblxucG9zaXgucGFyc2UgPSBmdW5jdGlvbihwYXRoU3RyaW5nKSB7XG4gIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBcIlBhcmFtZXRlciAncGF0aFN0cmluZycgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHBhdGhTdHJpbmdcbiAgICApO1xuICB9XG4gIHZhciBhbGxQYXJ0cyA9IHBvc2l4U3BsaXRQYXRoKHBhdGhTdHJpbmcpO1xuICBpZiAoIWFsbFBhcnRzIHx8IGFsbFBhcnRzLmxlbmd0aCAhPT0gNSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIHBhdGggJ1wiICsgcGF0aFN0cmluZyArIFwiJ1wiKTtcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICByb290OiBhbGxQYXJ0c1sxXSxcbiAgICBkaXI6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdLFxuICB9O1xufTtcblxuXG5pZiAoaXNXaW5kb3dzKVxuICBtb2R1bGUuZXhwb3J0cyA9IHdpbjMyLnBhcnNlO1xuZWxzZSAvKiBwb3NpeCAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IHBvc2l4LnBhcnNlO1xuXG5tb2R1bGUuZXhwb3J0cy5wb3NpeCA9IHBvc2l4LnBhcnNlO1xubW9kdWxlLmV4cG9ydHMud2luMzIgPSB3aW4zMi5wYXJzZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/path-parse/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/path-parse/index.js":
/*!******************************************!*\
  !*** ./node_modules/path-parse/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nvar isWindows = process.platform === 'win32';\n\n// Regex to split a windows path into into [dir, root, basename, name, ext]\nvar splitWindowsRe =\n    /^(((?:[a-zA-Z]:|[\\\\\\/]{2}[^\\\\\\/]+[\\\\\\/]+[^\\\\\\/]+)?[\\\\\\/]?)(?:[^\\\\\\/]*[\\\\\\/])*)((\\.{1,2}|[^\\\\\\/]+?|)(\\.[^.\\/\\\\]*|))[\\\\\\/]*$/;\n\nvar win32 = {};\n\nfunction win32SplitPath(filename) {\n  return splitWindowsRe.exec(filename).slice(1);\n}\n\nwin32.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = win32SplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  return {\n    root: allParts[1],\n    dir: allParts[0] === allParts[1] ? allParts[0] : allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3]\n  };\n};\n\n\n\n// Split a filename into [dir, root, basename, name, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^((\\/?)(?:[^\\/]*\\/)*)((\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))[\\/]*$/;\nvar posix = {};\n\n\nfunction posixSplitPath(filename) {\n  return splitPathRe.exec(filename).slice(1);\n}\n\n\nposix.parse = function(pathString) {\n  if (typeof pathString !== 'string') {\n    throw new TypeError(\n        \"Parameter 'pathString' must be a string, not \" + typeof pathString\n    );\n  }\n  var allParts = posixSplitPath(pathString);\n  if (!allParts || allParts.length !== 5) {\n    throw new TypeError(\"Invalid path '\" + pathString + \"'\");\n  }\n  \n  return {\n    root: allParts[1],\n    dir: allParts[0].slice(0, -1),\n    base: allParts[2],\n    ext: allParts[4],\n    name: allParts[3],\n  };\n};\n\n\nif (isWindows)\n  module.exports = win32.parse;\nelse /* posix */\n  module.exports = posix.parse;\n\nmodule.exports.posix = posix.parse;\nmodule.exports.win32 = win32.parse;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGF0aC1wYXJzZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLEVBQUUsMERBQTBELElBQUk7O0FBRTVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsSUFBSTtBQUNuQzs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzbV9iYW5raW5nLy4vbm9kZV9tb2R1bGVzL3BhdGgtcGFyc2UvaW5kZXguanM/NzAzMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuXG4vLyBSZWdleCB0byBzcGxpdCBhIHdpbmRvd3MgcGF0aCBpbnRvIGludG8gW2Rpciwgcm9vdCwgYmFzZW5hbWUsIG5hbWUsIGV4dF1cbnZhciBzcGxpdFdpbmRvd3NSZSA9XG4gICAgL14oKCg/OlthLXpBLVpdOnxbXFxcXFxcL117Mn1bXlxcXFxcXC9dK1tcXFxcXFwvXStbXlxcXFxcXC9dKyk/W1xcXFxcXC9dPykoPzpbXlxcXFxcXC9dKltcXFxcXFwvXSkqKSgoXFwuezEsMn18W15cXFxcXFwvXSs/fCkoXFwuW14uXFwvXFxcXF0qfCkpW1xcXFxcXC9dKiQvO1xuXG52YXIgd2luMzIgPSB7fTtcblxuZnVuY3Rpb24gd2luMzJTcGxpdFBhdGgoZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0V2luZG93c1JlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufVxuXG53aW4zMi5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gd2luMzJTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIHJldHVybiB7XG4gICAgcm9vdDogYWxsUGFydHNbMV0sXG4gICAgZGlyOiBhbGxQYXJ0c1swXSA9PT0gYWxsUGFydHNbMV0gPyBhbGxQYXJ0c1swXSA6IGFsbFBhcnRzWzBdLnNsaWNlKDAsIC0xKSxcbiAgICBiYXNlOiBhbGxQYXJ0c1syXSxcbiAgICBleHQ6IGFsbFBhcnRzWzRdLFxuICAgIG5hbWU6IGFsbFBhcnRzWzNdXG4gIH07XG59O1xuXG5cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtkaXIsIHJvb3QsIGJhc2VuYW1lLCBuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKChcXC8/KSg/OlteXFwvXSpcXC8pKikoKFxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSlbXFwvXSokLztcbnZhciBwb3NpeCA9IHt9O1xuXG5cbmZ1bmN0aW9uIHBvc2l4U3BsaXRQYXRoKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn1cblxuXG5wb3NpeC5wYXJzZSA9IGZ1bmN0aW9uKHBhdGhTdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBwYXRoU3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIFwiUGFyYW1ldGVyICdwYXRoU3RyaW5nJyBtdXN0IGJlIGEgc3RyaW5nLCBub3QgXCIgKyB0eXBlb2YgcGF0aFN0cmluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGFsbFBhcnRzID0gcG9zaXhTcGxpdFBhdGgocGF0aFN0cmluZyk7XG4gIGlmICghYWxsUGFydHMgfHwgYWxsUGFydHMubGVuZ3RoICE9PSA1KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgcGF0aCAnXCIgKyBwYXRoU3RyaW5nICsgXCInXCIpO1xuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIHJvb3Q6IGFsbFBhcnRzWzFdLFxuICAgIGRpcjogYWxsUGFydHNbMF0uc2xpY2UoMCwgLTEpLFxuICAgIGJhc2U6IGFsbFBhcnRzWzJdLFxuICAgIGV4dDogYWxsUGFydHNbNF0sXG4gICAgbmFtZTogYWxsUGFydHNbM10sXG4gIH07XG59O1xuXG5cbmlmIChpc1dpbmRvd3MpXG4gIG1vZHVsZS5leHBvcnRzID0gd2luMzIucGFyc2U7XG5lbHNlIC8qIHBvc2l4ICovXG4gIG1vZHVsZS5leHBvcnRzID0gcG9zaXgucGFyc2U7XG5cbm1vZHVsZS5leHBvcnRzLnBvc2l4ID0gcG9zaXgucGFyc2U7XG5tb2R1bGUuZXhwb3J0cy53aW4zMiA9IHdpbjMyLnBhcnNlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/path-parse/index.js\n");

/***/ })

};
;