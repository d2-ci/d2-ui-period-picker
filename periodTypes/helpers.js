'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zeroPad = exports.getYearFromId = exports.getMonthFromId = exports.neverAnError = exports.createGetPeriodId = exports.createGetPeriodFields = exports.createHasRequiredValues = exports.getInvalidBiWeekNumberError = exports.getInvalidWeekNumberError = exports.getInvalidDayNumberError = exports.errorMessages = exports.createYearBasedPeriodFieldUpdater = exports.createSixMonthsBasedPeriodFieldUpdater = exports.createQuarterlyPeriodFieldUpdater = exports.createBiMonthlyPeriodFieldUpdater = exports.createMonthlyPeriodFieldUpdater = exports.createBiWeeklyPeriodFieldUpdater = exports.createWeekBasedPeriodFieldUpdater = exports.createDayBasedPeriodFieldUpdater = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _helpers = require('d2/period/helpers');

var _distinctTypes = require('./distinctTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////
////  PERIOD FIELD UPDATERS  ////
/////////////////////////////////

var createDayBasedPeriodFieldUpdater = exports.createDayBasedPeriodFieldUpdater = function createDayBasedPeriodFieldUpdater(_periodId, startDate) {
    var _ref;

    var date = new Date(startDate);
    return _ref = {}, (0, _defineProperty3.default)(_ref, _distinctTypes.DAY, zeroPad(date.getDate())), (0, _defineProperty3.default)(_ref, _distinctTypes.MONTH, zeroPad(date.getMonth() + 1)), (0, _defineProperty3.default)(_ref, _distinctTypes.YEAR, date.getFullYear().toString()), _ref;
};

var createWeekBasedPeriodFieldUpdater = exports.createWeekBasedPeriodFieldUpdater = function createWeekBasedPeriodFieldUpdater(periodId) {
    var _ref2;

    return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _distinctTypes.WEEK, periodId.substring(periodId.lastIndexOf('W') + 1)), (0, _defineProperty3.default)(_ref2, _distinctTypes.YEAR, getYearFromId(periodId)), _ref2;
};

var createBiWeeklyPeriodFieldUpdater = exports.createBiWeeklyPeriodFieldUpdater = function createBiWeeklyPeriodFieldUpdater(periodId) {
    var _ref3;

    return _ref3 = {}, (0, _defineProperty3.default)(_ref3, _distinctTypes.BI_WEEK, periodId.split('BiW')[1]), (0, _defineProperty3.default)(_ref3, _distinctTypes.YEAR, getYearFromId(periodId)), _ref3;
};

var createMonthlyPeriodFieldUpdater = exports.createMonthlyPeriodFieldUpdater = function createMonthlyPeriodFieldUpdater(periodId) {
    var _ref4;

    return _ref4 = {}, (0, _defineProperty3.default)(_ref4, _distinctTypes.MONTH, getMonthFromId(periodId)), (0, _defineProperty3.default)(_ref4, _distinctTypes.YEAR, getYearFromId(periodId)), _ref4;
};

var createBiMonthlyPeriodFieldUpdater = exports.createBiMonthlyPeriodFieldUpdater = function createBiMonthlyPeriodFieldUpdater(periodId) {
    var _ref5;

    return _ref5 = {}, (0, _defineProperty3.default)(_ref5, _distinctTypes.BI_MONTH, periodId.substr(4, 2)), (0, _defineProperty3.default)(_ref5, _distinctTypes.YEAR, getYearFromId(periodId)), _ref5;
};

var createQuarterlyPeriodFieldUpdater = exports.createQuarterlyPeriodFieldUpdater = function createQuarterlyPeriodFieldUpdater(periodId) {
    var _ref6;

    return _ref6 = {}, (0, _defineProperty3.default)(_ref6, _distinctTypes.QUARTER, periodId.split('Q')[1]), (0, _defineProperty3.default)(_ref6, _distinctTypes.YEAR, getYearFromId(periodId)), _ref6;
};

var createSixMonthsBasedPeriodFieldUpdater = exports.createSixMonthsBasedPeriodFieldUpdater = function createSixMonthsBasedPeriodFieldUpdater(periodId) {
    var _ref7;

    return _ref7 = {}, (0, _defineProperty3.default)(_ref7, _distinctTypes.SIX_MONTH, periodId.split('S')[1]), (0, _defineProperty3.default)(_ref7, _distinctTypes.YEAR, getYearFromId(periodId)), _ref7;
};

var createYearBasedPeriodFieldUpdater = exports.createYearBasedPeriodFieldUpdater = function createYearBasedPeriodFieldUpdater(periodId) {
    return (0, _defineProperty3.default)({}, _distinctTypes.YEAR, getYearFromId(periodId));
};

/////////////////////////
////  ERROR HELPERS  ////
/////////////////////////
var errorMessages = exports.errorMessages = {
    dayTooHigh: _d2I18n2.default.t('Day number too high for current month'),
    weekTooHigh: _d2I18n2.default.t('Week number too high for current year'),
    biWeekTooHigh: _d2I18n2.default.t('Bi-week number too high for current year')
};
var getInvalidDayNumberError = exports.getInvalidDayNumberError = function getInvalidDayNumberError(state) {
    var _asInts = asInts(state, [_distinctTypes.YEAR, _distinctTypes.MONTH, _distinctTypes.DAY]),
        _asInts2 = (0, _slicedToArray3.default)(_asInts, 3),
        year = _asInts2[0],
        month = _asInts2[1],
        day = _asInts2[2];

    var daysInMonth = new Date(year, month, 0).getDate();

    return day > daysInMonth ? errorMessages.dayTooHigh : '';
};

var getInvalidWeekNumberError = exports.getInvalidWeekNumberError = function getInvalidWeekNumberError(state) {
    var _asInts3 = asInts(state, [_distinctTypes.YEAR, _distinctTypes.WEEK]),
        _asInts4 = (0, _slicedToArray3.default)(_asInts3, 2),
        year = _asInts4[0],
        week = _asInts4[1];

    return isWeekNumberTooHigh(week, year) ? errorMessages.weekTooHigh : '';
};

var getInvalidBiWeekNumberError = exports.getInvalidBiWeekNumberError = function getInvalidBiWeekNumberError(state) {
    var _asInts5 = asInts(state, [_distinctTypes.YEAR, _distinctTypes.BI_WEEK]),
        _asInts6 = (0, _slicedToArray3.default)(_asInts5, 2),
        year = _asInts6[0],
        biWeek = _asInts6[1];

    var week = biWeek * 2 - 1;
    return isWeekNumberTooHigh(week, year) ? errorMessages.biWeekTooHigh : '';
};

////////////////////
////  ASSORTED  ////
////////////////////
var createHasRequiredValues = exports.createHasRequiredValues = function createHasRequiredValues(keys) {
    return function (state) {
        return keys.every(function (key) {
            return !!state[key];
        });
    };
};

var createGetPeriodFields = exports.createGetPeriodFields = function createGetPeriodFields(fieldConfig) {
    return function () {
        return fieldConfig;
    };
};

var createGetPeriodId = exports.createGetPeriodId = function createGetPeriodId(templ) {
    return function (state) {
        return templ.replace(_distinctTypes.BI_MONTH, state[_distinctTypes.BI_MONTH]).replace(_distinctTypes.BI_WEEK, state[_distinctTypes.BI_WEEK]).replace(_distinctTypes.DAY, state[_distinctTypes.DAY]).replace(_distinctTypes.MONTH, state[_distinctTypes.MONTH]).replace(_distinctTypes.QUARTER, state[_distinctTypes.QUARTER]).replace(_distinctTypes.SIX_MONTH, state[_distinctTypes.SIX_MONTH]).replace(_distinctTypes.WEEK, state[_distinctTypes.WEEK]).replace(_distinctTypes.YEAR, state[_distinctTypes.YEAR]);
    };
};

var neverAnError = exports.neverAnError = function neverAnError() {
    return '';
};

var getMonthFromId = exports.getMonthFromId = function getMonthFromId(periodId) {
    return periodId.substr(4, 2);
};

var getYearFromId = exports.getYearFromId = function getYearFromId(periodId) {
    return periodId.substr(0, 4);
};

var zeroPad = exports.zeroPad = function zeroPad(str) {
    return ('0' + str).substr(-2);
};

var asInts = function asInts(state, propKeys) {
    return propKeys.map(function (key) {
        return parseInt(state[key]);
    });
};

var isWeekNumberTooHigh = function isWeekNumberTooHigh(week, year) {
    return !(0, _helpers.is53WeekISOYear)(year) && week === 53;
};