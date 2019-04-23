'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _core = require('@material-ui/core');

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
    return {
        loader: {
            padding: 16,
            textAlign: 'center'
        }
    };
};

var Loader = function Loader(_ref) {
    var classes = _ref.classes;

    return _react2.default.createElement(
        'div',
        { className: classes.loader },
        _react2.default.createElement(_core.CircularProgress, { size: 29.5, thickness: 2.5 })
    );
};

Loader.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Loader);