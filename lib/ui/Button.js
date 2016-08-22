'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  .button {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box; \n  }\n\n  .button:hover, button:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; \n  }\n\n  .primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; \n  }\n\n  .primary:hover, .primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; \n  }\n'], ['\n  .button {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box; \n  }\n\n  .button:hover, button:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; \n  }\n\n  .primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; \n  }\n\n  .primary:hover, .primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; \n  }\n']);

function Button(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    'button',
_extends({ type: 'button' }, props, { className: [styles.button, props.className] }),
    children
  );
}

Button.styles = function (css) {
  return css(_templateObject);
};

exports['default'] = Button;