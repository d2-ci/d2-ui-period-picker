'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.years = exports.sixMonthsNov = exports.sixMonthsApril = exports.sixMonths = exports.quarters = exports.biMonths = exports.months = exports.biWeeks = exports.weeks = exports.days = undefined;

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _distinctTypes = require('./distinctTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var days = exports.days = {
    name: _distinctTypes.DAY,
    label: _d2I18n2.default.t('Day'),
    options: createSequence(31).reduce(function (acc, val) {
        return setProperty(acc, val, val);
    }, {})
};

var weeks = exports.weeks = {
    name: _distinctTypes.WEEK,
    label: _d2I18n2.default.t('Week'),
    options: createSequence(53).reduce(function (acc, val) {
        return setProperty(acc, val, val);
    }, {})
};

var biWeekPrefix = _d2I18n2.default.t('Bi week');
var biWeeks = exports.biWeeks = {
    name: _distinctTypes.BI_WEEK,
    label: _d2I18n2.default.t('Bi week'),
    options: createSequence(27).reduce(function (acc, val) {
        return setProperty(acc, val, biWeekPrefix + ' ' + val);
    }, {})
};

var months = exports.months = {
    name: _distinctTypes.MONTH,
    label: _d2I18n2.default.t('Month'),
    options: {
        1: 'jan',
        2: 'feb',
        3: 'mar',
        4: 'apr',
        5: 'may',
        6: 'jun',
        7: 'jul',
        8: 'aug',
        9: 'sep',
        10: 'oct',
        11: 'nov',
        12: 'dec'
    }
};

var biMonths = exports.biMonths = {
    name: _distinctTypes.BI_MONTH,
    label: _d2I18n2.default.t('Bi Month'),
    options: {
        1: 'jan-feb',
        2: 'mar-apr',
        3: 'may-jun',
        4: 'jul-aug',
        5: 'sep-oct',
        6: 'nov-dec'
    }
};

var quarters = exports.quarters = {
    name: _distinctTypes.QUARTER,
    label: _d2I18n2.default.t('Quarter'),
    options: { 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4' }
};

var sixMonths = exports.sixMonths = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period'),
    options: { 1: 'jan-jun', 2: 'jul-dec' }
};

var sixMonthsApril = exports.sixMonthsApril = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period - April'),
    options: { 1: 'apr-sep', 2: 'oct-mar' }
};

var sixMonthsNov = exports.sixMonthsNov = {
    name: _distinctTypes.SIX_MONTH,
    label: _d2I18n2.default.t('Six month period - November'),
    options: { 1: 'nov-apr', 2: 'may-oct' }
};

var currentYear = new Date().getFullYear();
var startYear = 2014; // why?
var yearLength = currentYear + 5 - startYear; // why again?
var years = exports.years = {
    name: _distinctTypes.YEAR,
    label: _d2I18n2.default.t('Year'),
    options: createSequence(yearLength, startYear).reduce(function (acc, val) {
        return setProperty(acc, val, val);
    }, {})
};

function createSequence(length) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return (0, _from2.default)({ length: length }, function (v, i) {
        return (start + i).toString();
    });
}

function setProperty(obj, key, value) {
    obj[key] = value;
    return obj;
}