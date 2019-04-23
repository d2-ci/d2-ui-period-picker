'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputLabel = require('@material-ui/core/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require('@material-ui/core/Select');

var _Select2 = _interopRequireDefault(_Select);

var _styles = require('@material-ui/core/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        formControl: {
            margin: theme.spacing.unit,
            width: '100%'
        }
    };
};

var Select = function Select(_ref) {
    var name = _ref.name,
        label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange,
        options = _ref.options,
        classes = _ref.classes;
    return _react2.default.createElement(
        _FormControl2.default,
        { className: classes.formControl },
        _react2.default.createElement(
            _InputLabel2.default,
            { htmlFor: name },
            label
        ),
        _react2.default.createElement(
            _Select2.default,
            {
                value: value,
                onChange: onChange,
                autoWidth: true,
                inputProps: {
                    name: name,
                    id: name
                }
            },
            (0, _keys2.default)(options).map(function (key) {
                return _react2.default.createElement(
                    _MenuItem2.default,
                    { key: key, value: key },
                    options[key]
                );
            })
        )
    );
};

Select.propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.object.isRequired,
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Select);