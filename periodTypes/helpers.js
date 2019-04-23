'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getInvalidBiWeekNumberError = exports.getInvalidWeekNumberError = exports.getInvalidDayNumberError = exports.hasYearBasedValues = exports.hasSixMonthBasedValues = exports.hasWeekBasedValues = exports.hasValues = exports.createYearBasedPeriodFieldUpdater = exports.createSixMonthsBasedPeriodFieldUpdater = exports.createWeekBasedPeriodFieldUpdater = exports.createDayBasedPeriodFieldUpdater = exports.getYearFromId = exports.getMonthFromId = exports.zeroPad = exports.neverAnError = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _helpers = require('d2/period/helpers');

var _distinctTypes = require('./distinctTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neverAnError = exports.neverAnError = function neverAnError() {
    return '';
};

var zeroPad = exports.zeroPad = function zeroPad(str) {
    return ('0' + str).substr(-2);
};

var getMonthFromId = exports.getMonthFromId = function getMonthFromId(periodId) {
    return periodId.substr(4, 2);
};

var getYearFromId = exports.getYearFromId = function getYearFromId(periodId) {
    return periodId.substr(0, 4);
};

var createDayBasedPeriodFieldUpdater = exports.createDayBasedPeriodFieldUpdater = function createDayBasedPeriodFieldUpdater(_periodId, startDate) {
    var _ref;

    var date = new Date(startDate);
    return _ref = {}, (0, _defineProperty3.default)(_ref, _distinctTypes.DAY, date.getDay().toString()), (0, _defineProperty3.default)(_ref, _distinctTypes.MONTH, (date.getMonth() + 1).toString()), (0, _defineProperty3.default)(_ref, _distinctTypes.YEAR, date.getFullYear().toString()), _ref;
};

var createWeekBasedPeriodFieldUpdater = exports.createWeekBasedPeriodFieldUpdater = function createWeekBasedPeriodFieldUpdater(periodId) {
    var _ref2;

    return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _distinctTypes.WEEK, periodId.split('W')[1]), (0, _defineProperty3.default)(_ref2, _distinctTypes.YEAR, getYearFromId(periodId)), _ref2;
};

var createSixMonthsBasedPeriodFieldUpdater = exports.createSixMonthsBasedPeriodFieldUpdater = function createSixMonthsBasedPeriodFieldUpdater(periodId) {
    var _ref3;

    return _ref3 = {}, (0, _defineProperty3.default)(_ref3, _distinctTypes.SIX_MONTH, periodId.split('S')[1]), (0, _defineProperty3.default)(_ref3, _distinctTypes.YEAR, getYearFromId(periodId)), _ref3;
};

var createYearBasedPeriodFieldUpdater = exports.createYearBasedPeriodFieldUpdater = function createYearBasedPeriodFieldUpdater(periodId) {
    return (0, _defineProperty3.default)({}, _distinctTypes.YEAR, getYearFromId(periodId));
};

var hasValues = exports.hasValues = function hasValues(state, propKeys) {
    return propKeys.every(function (key) {
        return !!state[key];
    });
};

var hasWeekBasedValues = exports.hasWeekBasedValues = function hasWeekBasedValues(state) {
    return hasValues(state, [_distinctTypes.WEEK, _distinctTypes.YEAR]);
};

var hasSixMonthBasedValues = exports.hasSixMonthBasedValues = function hasSixMonthBasedValues(state) {
    return hasValues(state, [_distinctTypes.SIX_MONTH, _distinctTypes.YEAR]);
};

var hasYearBasedValues = exports.hasYearBasedValues = function hasYearBasedValues(state) {
    return !!state[_distinctTypes.YEAR];
};

var getInvalidDayNumberError = exports.getInvalidDayNumberError = function getInvalidDayNumberError(state) {
    var _asInts = asInts(state, [_distinctTypes.YEAR, _distinctTypes.MONTH, _distinctTypes.DAY]),
        _asInts2 = (0, _slicedToArray3.default)(_asInts, 3),
        year = _asInts2[0],
        month = _asInts2[1],
        day = _asInts2[2];

    var daysInMonth = new Date(year, month, 0).getDate();

    return day > daysInMonth ? _d2I18n2.default.t('Day number too high for current month') : '';
};

var getInvalidWeekNumberError = exports.getInvalidWeekNumberError = function getInvalidWeekNumberError(state) {
    var _asInts3 = asInts(state, [_distinctTypes.YEAR, _distinctTypes.WEEK]),
        _asInts4 = (0, _slicedToArray3.default)(_asInts3, 2),
        year = _asInts4[0],
        week = _asInts4[1];

    return isWeekNumberTooHigh(week, year) ? _d2I18n2.default.t('Week number too high for current year') : '';
};

var getInvalidBiWeekNumberError = exports.getInvalidBiWeekNumberError = function getInvalidBiWeekNumberError(state) {
    var _asInts5 = asInts(state, [_distinctTypes.YEAR, _distinctTypes.BI_WEEK]),
        _asInts6 = (0, _slicedToArray3.default)(_asInts5, 2),
        year = _asInts6[0],
        biWeek = _asInts6[1];

    var week = biWeek * 2 - 1;
    return isWeekNumberTooHigh(week, year) ? _d2I18n2.default.t('Bi-week number too high for current year') : '';
};

var asInts = function asInts(state, propKeys) {
    return propKeys.map(function (key) {
        return parseInt(state[key]);
    });
};

var isWeekNumberTooHigh = function isWeekNumberTooHigh(week, year) {
    return !(0, _helpers.is53WeekISOYear)(year) && week === 53;
};