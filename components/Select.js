'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _distinctTypes = require('../modules/distinctTypes');

var _PeriodPicker = require('./PeriodPicker');

var _KeyboardArrowDown = require('@material-ui/icons/KeyboardArrowDown');

var _KeyboardArrowDown2 = _interopRequireDefault(_KeyboardArrowDown);

var _KeyboardArrowUp = require('@material-ui/icons/KeyboardArrowUp');

var _KeyboardArrowUp2 = _interopRequireDefault(_KeyboardArrowUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        formControl: {
            margin: theme.spacing.unit,
            width: '100%'
        },
        eventLess: {
            pointerEvents: 'none'
        }
    };
};

var Select = exports.Select = function Select(_ref) {
    var name = _ref.name,
        label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange,
        options = _ref.options,
        classes = _ref.classes,
        yearFieldOpen = _ref.yearFieldOpen,
        onYearOpen = _ref.onYearOpen,
        onYearClose = _ref.onYearClose;

    var isYearField = name === _distinctTypes.YEAR;
    var yearFieldProps = isYearField ? {
        open: yearFieldOpen,
        onOpen: onYearOpen,
        onClose: onYearClose // just keep it open
    } : {};

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
            (0, _extends3.default)({
                value: value,
                onChange: onChange,
                autoWidth: true,
                inputProps: {
                    name: name,
                    id: name
                },
                disabled: options.length === 0
            }, yearFieldProps),
            isYearField && _react2.default.createElement(
                _MenuItem2.default,
                { key: _PeriodPicker.SHIFT_YEARS_BACK, value: _PeriodPicker.SHIFT_YEARS_BACK },
                _react2.default.createElement(_KeyboardArrowUp2.default, { className: classes.eventLess })
            ),
            options.map(function (_ref2) {
                var value = _ref2.value,
                    label = _ref2.label,
                    id = _ref2.id;
                return _react2.default.createElement(
                    _MenuItem2.default,
                    { key: value, value: value, 'period-id': id },
                    label
                );
            }),
            isYearField && _react2.default.createElement(
                _MenuItem2.default,
                { key: _PeriodPicker.SHIFT_YEARS_FORTH, value: _PeriodPicker.SHIFT_YEARS_FORTH },
                _react2.default.createElement(_KeyboardArrowDown2.default, { className: classes.eventLess })
            )
        )
    );
};

Select.propTypes = {
    name: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.array.isRequired,
    yearFieldOpen: _propTypes2.default.bool,
    onYearOpen: _propTypes2.default.func,
    onYearClose: _propTypes2.default.func,
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Select);