'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _styles = require('@material-ui/core/styles');

var _parser = require('d2/period/parser');

var _parser2 = _interopRequireDefault(_parser);

var _PeriodFields = require('./PeriodFields');

var _PeriodFields2 = _interopRequireDefault(_PeriodFields);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        error: {
            color: theme.colors.negative
        },
        helper: {
            margin: 8
        }
    };
};

var Form = function Form(_ref) {
    var periodTypes = _ref.periodTypes,
        periodType = _ref.periodType,
        onPeriodTypeChange = _ref.onPeriodTypeChange,
        onPeriodFieldChange = _ref.onPeriodFieldChange,
        getFieldValue = _ref.getFieldValue,
        errorText = _ref.errorText,
        value = _ref.value,
        classes = _ref.classes;
    return _react2.default.createElement(
        _react.Fragment,
        null,
        periodTypes && _react2.default.createElement(_Select2.default, {
            name: 'periodType',
            label: _d2I18n2.default.t('Period type'),
            value: periodType,
            onChange: onPeriodTypeChange,
            options: periodTypes
        }),
        periodType && _react2.default.createElement(_PeriodFields2.default, {
            periodType: periodType,
            onChange: onPeriodFieldChange,
            getValue: getFieldValue
        }),
        errorText && _react2.default.createElement(
            _FormHelperText2.default,
            { className: classes.error + ' ' + classes.helper },
            errorText
        ),
        value && !errorText && _react2.default.createElement(
            _FormHelperText2.default,
            { className: classes.helper },
            (0, _parser2.default)(value).name
        )
    );
};

Form.propTypes = {
    periodTypes: _propTypes2.default.object.isRequired,
    periodType: _propTypes2.default.string.isRequired,
    onPeriodTypeChange: _propTypes2.default.func.isRequired,
    onPeriodFieldChange: _propTypes2.default.func.isRequired,
    getFieldValue: _propTypes2.default.func.isRequired,
    errorText: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.string.isRequired,
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Form);