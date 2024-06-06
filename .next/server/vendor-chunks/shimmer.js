"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shimmer";
exports.ids = ["vendor-chunks/shimmer"];
exports.modules = {

/***/ "(instrument)/./node_modules/shimmer/index.js":
/*!***************************************!*\
  !*** ./node_modules/shimmer/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("\n\nfunction isFunction (funktion) {\n  return typeof funktion === 'function'\n}\n\n// Default to complaining loudly when things don't go according to plan.\nvar logger = console.error.bind(console)\n\n// Sets a property on an object, preserving its enumerability.\n// This function assumes that the property is already writable.\nfunction defineProperty (obj, name, value) {\n  var enumerable = !!obj[name] && obj.propertyIsEnumerable(name)\n  Object.defineProperty(obj, name, {\n    configurable: true,\n    enumerable: enumerable,\n    writable: true,\n    value: value\n  })\n}\n\n// Keep initialization idempotent.\nfunction shimmer (options) {\n  if (options && options.logger) {\n    if (!isFunction(options.logger)) logger(\"new logger isn't a function, not replacing\")\n    else logger = options.logger\n  }\n}\n\nfunction wrap (nodule, name, wrapper) {\n  if (!nodule || !nodule[name]) {\n    logger('no original function ' + name + ' to wrap')\n    return\n  }\n\n  if (!wrapper) {\n    logger('no wrapper function')\n    logger((new Error()).stack)\n    return\n  }\n\n  if (!isFunction(nodule[name]) || !isFunction(wrapper)) {\n    logger('original object and wrapper must be functions')\n    return\n  }\n\n  var original = nodule[name]\n  var wrapped = wrapper(original, name)\n\n  defineProperty(wrapped, '__original', original)\n  defineProperty(wrapped, '__unwrap', function () {\n    if (nodule[name] === wrapped) defineProperty(nodule, name, original)\n  })\n  defineProperty(wrapped, '__wrapped', true)\n\n  defineProperty(nodule, name, wrapped)\n  return wrapped\n}\n\nfunction massWrap (nodules, names, wrapper) {\n  if (!nodules) {\n    logger('must provide one or more modules to patch')\n    logger((new Error()).stack)\n    return\n  } else if (!Array.isArray(nodules)) {\n    nodules = [nodules]\n  }\n\n  if (!(names && Array.isArray(names))) {\n    logger('must provide one or more functions to wrap on modules')\n    return\n  }\n\n  nodules.forEach(function (nodule) {\n    names.forEach(function (name) {\n      wrap(nodule, name, wrapper)\n    })\n  })\n}\n\nfunction unwrap (nodule, name) {\n  if (!nodule || !nodule[name]) {\n    logger('no function to unwrap.')\n    logger((new Error()).stack)\n    return\n  }\n\n  if (!nodule[name].__unwrap) {\n    logger('no original to unwrap to -- has ' + name + ' already been unwrapped?')\n  } else {\n    return nodule[name].__unwrap()\n  }\n}\n\nfunction massUnwrap (nodules, names) {\n  if (!nodules) {\n    logger('must provide one or more modules to patch')\n    logger((new Error()).stack)\n    return\n  } else if (!Array.isArray(nodules)) {\n    nodules = [nodules]\n  }\n\n  if (!(names && Array.isArray(names))) {\n    logger('must provide one or more functions to unwrap on modules')\n    return\n  }\n\n  nodules.forEach(function (nodule) {\n    names.forEach(function (name) {\n      unwrap(nodule, name)\n    })\n  })\n}\n\nshimmer.wrap = wrap\nshimmer.massWrap = massWrap\nshimmer.unwrap = unwrap\nshimmer.massUnwrap = massUnwrap\n\nmodule.exports = shimmer\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGluc3RydW1lbnQpLy4vbm9kZV9tb2R1bGVzL3NoaW1tZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNtX2JhbmtpbmcvLi9ub2RlX21vZHVsZXMvc2hpbW1lci9pbmRleC5qcz8zY2FjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uIChmdW5rdGlvbikge1xuICByZXR1cm4gdHlwZW9mIGZ1bmt0aW9uID09PSAnZnVuY3Rpb24nXG59XG5cbi8vIERlZmF1bHQgdG8gY29tcGxhaW5pbmcgbG91ZGx5IHdoZW4gdGhpbmdzIGRvbid0IGdvIGFjY29yZGluZyB0byBwbGFuLlxudmFyIGxvZ2dlciA9IGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKVxuXG4vLyBTZXRzIGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LCBwcmVzZXJ2aW5nIGl0cyBlbnVtZXJhYmlsaXR5LlxuLy8gVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgd3JpdGFibGUuXG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSAob2JqLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgZW51bWVyYWJsZSA9ICEhb2JqW25hbWVdICYmIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZShuYW1lKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pXG59XG5cbi8vIEtlZXAgaW5pdGlhbGl6YXRpb24gaWRlbXBvdGVudC5cbmZ1bmN0aW9uIHNoaW1tZXIgKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sb2dnZXIpIHtcbiAgICBpZiAoIWlzRnVuY3Rpb24ob3B0aW9ucy5sb2dnZXIpKSBsb2dnZXIoXCJuZXcgbG9nZ2VyIGlzbid0IGEgZnVuY3Rpb24sIG5vdCByZXBsYWNpbmdcIilcbiAgICBlbHNlIGxvZ2dlciA9IG9wdGlvbnMubG9nZ2VyXG4gIH1cbn1cblxuZnVuY3Rpb24gd3JhcCAobm9kdWxlLCBuYW1lLCB3cmFwcGVyKSB7XG4gIGlmICghbm9kdWxlIHx8ICFub2R1bGVbbmFtZV0pIHtcbiAgICBsb2dnZXIoJ25vIG9yaWdpbmFsIGZ1bmN0aW9uICcgKyBuYW1lICsgJyB0byB3cmFwJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghd3JhcHBlcikge1xuICAgIGxvZ2dlcignbm8gd3JhcHBlciBmdW5jdGlvbicpXG4gICAgbG9nZ2VyKChuZXcgRXJyb3IoKSkuc3RhY2spXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoIWlzRnVuY3Rpb24obm9kdWxlW25hbWVdKSB8fCAhaXNGdW5jdGlvbih3cmFwcGVyKSkge1xuICAgIGxvZ2dlcignb3JpZ2luYWwgb2JqZWN0IGFuZCB3cmFwcGVyIG11c3QgYmUgZnVuY3Rpb25zJylcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBvcmlnaW5hbCA9IG5vZHVsZVtuYW1lXVxuICB2YXIgd3JhcHBlZCA9IHdyYXBwZXIob3JpZ2luYWwsIG5hbWUpXG5cbiAgZGVmaW5lUHJvcGVydHkod3JhcHBlZCwgJ19fb3JpZ2luYWwnLCBvcmlnaW5hbClcbiAgZGVmaW5lUHJvcGVydHkod3JhcHBlZCwgJ19fdW53cmFwJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChub2R1bGVbbmFtZV0gPT09IHdyYXBwZWQpIGRlZmluZVByb3BlcnR5KG5vZHVsZSwgbmFtZSwgb3JpZ2luYWwpXG4gIH0pXG4gIGRlZmluZVByb3BlcnR5KHdyYXBwZWQsICdfX3dyYXBwZWQnLCB0cnVlKVxuXG4gIGRlZmluZVByb3BlcnR5KG5vZHVsZSwgbmFtZSwgd3JhcHBlZClcbiAgcmV0dXJuIHdyYXBwZWRcbn1cblxuZnVuY3Rpb24gbWFzc1dyYXAgKG5vZHVsZXMsIG5hbWVzLCB3cmFwcGVyKSB7XG4gIGlmICghbm9kdWxlcykge1xuICAgIGxvZ2dlcignbXVzdCBwcm92aWRlIG9uZSBvciBtb3JlIG1vZHVsZXMgdG8gcGF0Y2gnKVxuICAgIGxvZ2dlcigobmV3IEVycm9yKCkpLnN0YWNrKVxuICAgIHJldHVyblxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG5vZHVsZXMpKSB7XG4gICAgbm9kdWxlcyA9IFtub2R1bGVzXVxuICB9XG5cbiAgaWYgKCEobmFtZXMgJiYgQXJyYXkuaXNBcnJheShuYW1lcykpKSB7XG4gICAgbG9nZ2VyKCdtdXN0IHByb3ZpZGUgb25lIG9yIG1vcmUgZnVuY3Rpb25zIHRvIHdyYXAgb24gbW9kdWxlcycpXG4gICAgcmV0dXJuXG4gIH1cblxuICBub2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZHVsZSkge1xuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHdyYXAobm9kdWxlLCBuYW1lLCB3cmFwcGVyKVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVud3JhcCAobm9kdWxlLCBuYW1lKSB7XG4gIGlmICghbm9kdWxlIHx8ICFub2R1bGVbbmFtZV0pIHtcbiAgICBsb2dnZXIoJ25vIGZ1bmN0aW9uIHRvIHVud3JhcC4nKVxuICAgIGxvZ2dlcigobmV3IEVycm9yKCkpLnN0YWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFub2R1bGVbbmFtZV0uX191bndyYXApIHtcbiAgICBsb2dnZXIoJ25vIG9yaWdpbmFsIHRvIHVud3JhcCB0byAtLSBoYXMgJyArIG5hbWUgKyAnIGFscmVhZHkgYmVlbiB1bndyYXBwZWQ/JylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kdWxlW25hbWVdLl9fdW53cmFwKClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXNzVW53cmFwIChub2R1bGVzLCBuYW1lcykge1xuICBpZiAoIW5vZHVsZXMpIHtcbiAgICBsb2dnZXIoJ211c3QgcHJvdmlkZSBvbmUgb3IgbW9yZSBtb2R1bGVzIHRvIHBhdGNoJylcbiAgICBsb2dnZXIoKG5ldyBFcnJvcigpKS5zdGFjaylcbiAgICByZXR1cm5cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShub2R1bGVzKSkge1xuICAgIG5vZHVsZXMgPSBbbm9kdWxlc11cbiAgfVxuXG4gIGlmICghKG5hbWVzICYmIEFycmF5LmlzQXJyYXkobmFtZXMpKSkge1xuICAgIGxvZ2dlcignbXVzdCBwcm92aWRlIG9uZSBvciBtb3JlIGZ1bmN0aW9ucyB0byB1bndyYXAgb24gbW9kdWxlcycpXG4gICAgcmV0dXJuXG4gIH1cblxuICBub2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZHVsZSkge1xuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHVud3JhcChub2R1bGUsIG5hbWUpXG4gICAgfSlcbiAgfSlcbn1cblxuc2hpbW1lci53cmFwID0gd3JhcFxuc2hpbW1lci5tYXNzV3JhcCA9IG1hc3NXcmFwXG5zaGltbWVyLnVud3JhcCA9IHVud3JhcFxuc2hpbW1lci5tYXNzVW53cmFwID0gbWFzc1Vud3JhcFxuXG5tb2R1bGUuZXhwb3J0cyA9IHNoaW1tZXJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(instrument)/./node_modules/shimmer/index.js\n");

/***/ })

};
;