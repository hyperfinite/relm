(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Checkbox"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["Checkbox"] = factory();
})(this, function() {
return webpackJsonprelm__name_([14],{

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["default"] = Checkbox;var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  .toggle {\n    text-align: center;\n    width: 40px;\n    height: auto;\n    position: absolute;\n    top: 5px;\n    margin: auto 0;\n    border: none;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: none;\n  }\n\n  .toggle:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n  }\n\n  .toggle:checked:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n  }\n'], ['\n  .toggle {\n    text-align: center;\n    width: 40px;\n    height: auto;\n    position: absolute;\n    top: 5px;\n    margin: auto 0;\n    border: none;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: none;\n  }\n\n  .toggle:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n  }\n\n  .toggle:checked:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Checkbox(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;

  return h('input', _extends({ className: styles.toggle, type: 'checkbox' }, props));
}

Checkbox.styles = function (css) {
  return css(_templateObject);
};

/***/ }

},[315])
});
;