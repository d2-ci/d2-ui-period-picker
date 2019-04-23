'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('@material-ui/core/styles');

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _lookup = require('../periodTypes/lookup');

var _lookup2 = _interopRequireDefault(_lookup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        flexContainer: {
            display: 'flex',
            marginRight: -16
        }
    };
};

var PeriodFields = function PeriodFields(_ref) {
    var periodType = _ref.periodType,
        onChange = _ref.onChange,
        getValue = _ref.getValue,
        classes = _ref.classes;

    var periodFields = _lookup2.default.get(periodType).getPeriodFields();

    return _react2.default.createElement(
        'div',
        { className: classes.flexContainer },
        (0, _keys2.default)(periodFields).map(function (key) {
            return _react2.default.createElement(_Select2.default, {
                key: periodFields[key].name,
                name: periodFields[key].name,
                label: periodFields[key].label,
                value: getValue(periodFields[key].name),
                onChange: onChange,
                options: periodFields[key].options
            });
        })
    );
};

PeriodFields.propTypes = {
    periodType: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    getValue: _propTypes2.default.func.isRequired,
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(PeriodFields);