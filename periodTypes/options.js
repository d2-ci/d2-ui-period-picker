'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.yearlyOptionList = exports.weeklyOptionList = exports.years = exports.sixMonthsNov = exports.sixMonthsApril = exports.sixMonths = exports.quarters = exports.biMonths = exports.months = exports.biWeeks = exports.weeks = exports.days = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _distinctTypes = require('./distinctTypes');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// always double digit
var days = exports.days = {
    name: _distinctTypes.DAY,
    label: _d2I18n2.default.t('Day'),
    options: createSequence(31).map(createOptionMapper({ zeroPad: true }))
};

// single digit
var weeks = exports.weeks = {
    name: _distinctTypes.WEEK,
    label: _d2I18n2.default.t('Week'),
    options: createSequence(53).map(createOptionMapper())
};

// Single digit
var biWeeks = exports.biWeeks = {
    name: _distinctTypes.BI_WEEK,
    label: _d2I18n2.default.t('Bi week'),
    options: createSequence(27).map(createOptionMapper({ prefix: _d2I18n2.default.t('Bi week') }))
};

// always double digit
var months = exports.months = {
    name: _distinctTypes.MONTH,
    label: _d2I18n2.default.t('Month'),
    options: [{ value: '01', label: 'jan' }, { value: '02', label: 'feb' }, { value: '03', label: 'mar' }, { value: '04', label: 'apr' }, { value: '05', label: 'may' }, { value: '06', label: 'jun' }, { value: '07', label: 'jul' }, { value: '08', label: 'aug' }, { value: '09', label: 'sep' }, { value: '10', label: 'oct' }, { value: '11', label: 'nov' }, { value: '12', label: 'dec' }]
};

// always double digit
var biMonths = exports.biMonths = {
    name: _distinctTypes.BI_MONTH,
    label: _d2I18n2.default.t('Bi Month'),
    options: [{ value: '01', label: 'jan-feb' }, { value: '02', label: 'mar-apr' }, { value: '03', label: 'may-jun' }, { value: '04', label: 'jul-aug' }, { value: '05', label: 'sep-oct' }, { value: '06', label: 'nov-dec' }]
};

// single digit
var quarters = exports.quarters = {
    name: _distinctTypes.QUARTER,
    label: _d2I18n2.default.t('Quarter'),
    options: [{ value: '1', label: 'Q1' }, { value: '2', label: 'Q2' }, { value: '3', label: 'Q3' }, { value: '4', label: 'Q4' }]
};

// single digit
var sixMonths = exports.sixMonths = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period'),
    options: [{ value: '1', label: 'jan-jun' }, { value: '2', label: 'jul-dec' }]
};

// single digit
var sixMonthsApril = exports.sixMonthsApril = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period - April'),
    options: [{ value: '1', label: 'apr-sep' }, { value: '2', label: 'oct-mar' }]
};

// single digit
var sixMonthsNov = exports.sixMonthsNov = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period - November'),
    options: [{ value: '1', label: 'nov-apr' }, { value: '2', label: 'may-oct' }]
};

// single digit
var currentYear = new Date().getFullYear();
var startYear = 2014; // why?
var yearLength = currentYear + 5 - startYear; // why again?
var years = exports.years = {
    name: _distinctTypes.YEAR,
    label: _d2I18n2.default.t('Year'),
    options: createSequence(yearLength, startYear).map(createOptionMapper())
};

var weeklyOptionList = exports.weeklyOptionList = { weeks: weeks, years: years };
var yearlyOptionList = exports.yearlyOptionList = { years: years };

function createSequence(length) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return (0, _from2.default)({ length: length }, function (v, i) {
        return (start + i).toString();
    });
}

function createOptionMapper() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (value) {
        return {
            label: config.prefix ? config.prefix + ' ' + value : value,
            value: config.zeroPad ? (0, _helpers.zeroPad)(value) : value
        };
    };
}