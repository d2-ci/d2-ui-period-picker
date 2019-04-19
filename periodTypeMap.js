'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.periodTypeMap = exports.YEAR = exports.SIX_MONTH = exports.QUARTER = exports.BI_MONTH = exports.MONTH = exports.BI_WEEK = exports.WEEK = exports.DAY = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _helpers = require('d2/period/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DAY = exports.DAY = 'day';
var WEEK = exports.WEEK = 'week';
var BI_WEEK = exports.BI_WEEK = 'biWeek';
var MONTH = exports.MONTH = 'month';
var BI_MONTH = exports.BI_MONTH = 'biMonth';
var QUARTER = exports.QUARTER = 'quarter';
var SIX_MONTH = exports.SIX_MONTH = 'sixMonth';
var YEAR = exports.YEAR = 'year';

var days = getDays();
var weeks = getWeeks();
var biWeeks = getBiWeeks();
var months = getMonths();
var biMonths = getBiMonths();
var quarters = getQuarters();
var years = getYears();
var sixMonths = getSixMonthly();
var sixMonthsApril = getSixMonthlyApril();
var sixMonthsNov = getSixMonthlyNov();

var weeklyOptionList = { weeks: weeks, years: years };
var yearlyOptionList = { years: years };

var periodTypeMap = exports.periodTypeMap = new _map2.default([['Daily', {
    label: _d2I18n2.default.t('Daily'),
    // YYYYMMDD
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + zeroPad(state[MONTH]) + zeroPad(state[DAY]);
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return hasValues(state, [DAY, MONTH, YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { days: days, months: months, years: years };
    },
    createPeriodFieldUpdater: createDayBasedPeriodFieldUpdater,
    getError: getInvalidDayNumberError
}], ['Weekly', {
    label: _d2I18n2.default.t('Weekly'),
    // YYYY"W"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'W' + zeroPad(state[WEEK]);
    },
    hasRequiredValues: hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: createWeekBasedPeriodFieldUpdater,
    getError: getInvalidWeekNumberError
}], ['WeeklyWednesday', {
    label: _d2I18n2.default.t('Weekly Wednesday'),
    // YYYY"WedW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'WedW' + zeroPad(state[WEEK]);
    },
    hasRequiredValues: hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    crxeatePeriodFieldUpdater: createWeekBasedPeriodFieldUpdater,
    getError: getInvalidWeekNumberError
}], ['WeeklyThursday', {
    label: _d2I18n2.default.t('Weekly Thursday'),
    // YYYY"ThuW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'ThuW"' + zeroPad(state[WEEK]);
    },
    hasRequiredValues: hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: createWeekBasedPeriodFieldUpdater,
    getError: getInvalidWeekNumberError
}], ['WeeklySaturday', {
    label: _d2I18n2.default.t('Weekly Saturday'),
    // YYYY"SatW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'SatW' + zeroPad(state[WEEK]);
    },
    hasRequiredValues: hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: createWeekBasedPeriodFieldUpdater,
    getError: getInvalidWeekNumberError
}], ['WeeklySunday', {
    label: _d2I18n2.default.t('Weekly Sunday'),
    // YYYY"SunW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'SunW' + zeroPad(state[WEEK]);
    },
    hasRequiredValues: hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: createWeekBasedPeriodFieldUpdater,
    getError: getInvalidWeekNumberError
}], ['BiWeekly', {
    label: _d2I18n2.default.t('Bi weekly'),
    // YYYY"BiW"[1-27]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'BiW' + zeroPad(state[BI_WEEK]);
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return hasValues(state, [BI_WEEK, YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { biWeeks: biWeeks, years: years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref;

        return _ref = {}, (0, _defineProperty3.default)(_ref, BI_WEEK, periodId.split('BiW')[1]), (0, _defineProperty3.default)(_ref, YEAR, getYearFromId(periodId)), _ref;
    },
    getError: getInvalidBiWeekNumberError
}], ['Monthly', {
    label: _d2I18n2.default.t('Monthly'),
    // YYYYMM
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + state[MONTH];
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return hasValues(state, [MONTH, YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { months: months, years: years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref2;

        return _ref2 = {}, (0, _defineProperty3.default)(_ref2, MONTH, getMonthFromId(periodId)), (0, _defineProperty3.default)(_ref2, YEAR, getYearFromId(periodId)), _ref2;
    }
}], ['BiMonthly', {
    label: _d2I18n2.default.t('Bi-monthly'),
    // YYYY0[1-6]"B"
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + zeroPad(state[BI_MONTH]) + 'B';
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return hasValues(state, [BI_MONTH, YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { biMonths: biMonths, years: years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref3;

        return _ref3 = {}, (0, _defineProperty3.default)(_ref3, BI_MONTH, periodId.substr(4, 2)), (0, _defineProperty3.default)(_ref3, YEAR, getYearFromId(periodId)), _ref3;
    }
}], ['Quarterly', {
    label: _d2I18n2.default.t('Quarterly'),
    // YYYY"Q"[1-4]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'Q' + state[QUARTER];
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return hasValues(state, [QUARTER, YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { quarters: quarters, years: years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref4;

        return _ref4 = {}, (0, _defineProperty3.default)(_ref4, QUARTER, periodId.split('Q')[1]), (0, _defineProperty3.default)(_ref4, YEAR, getYearFromId(periodId)), _ref4;
    }
}], ['SixMonthly', {
    label: _d2I18n2.default.t('Six monthly'),
    // YYYY"S"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'S' + state[SIX_MONTH];
    },
    hasRequiredValues: hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonths: sixMonths, years: years };
    },
    createPeriodFieldUpdater: createSixMonthsBasedPeriodFieldUpdater
}], ['SixMonthlyApril', {
    label: _d2I18n2.default.t('Six monthly starting in April'),
    // YYYY"AprilS"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'AprilS' + state[SIX_MONTH];
    },
    hasRequiredValues: hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonthsApril: sixMonthsApril, years: years };
    },
    createPeriodFieldUpdater: createSixMonthsBasedPeriodFieldUpdater
}], ['SixMonthlyNov', {
    label: _d2I18n2.default.t('Six monthly starting in November'),
    // YYYY"NovS"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'NovS' + state[SIX_MONTH];
    },
    hasRequiredValues: hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonthsNov: sixMonthsNov, years: years };
    },
    createPeriodFieldUpdater: createSixMonthsBasedPeriodFieldUpdater
}], ['Yearly', {
    label: _d2I18n2.default.t('Yearly'),
    // YYYY
    getPeriodId: function getPeriodId(state) {
        return state[YEAR];
    },
    hasRequiredValues: hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: createYearBasedPeriodFieldUpdater
}], ['FinancialApril', {
    label: _d2I18n2.default.t('Financial year starting in April'),
    // YYYY"April"
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'April';
    },
    hasRequiredValues: hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: createYearBasedPeriodFieldUpdater
}], ['FinancialJuly', {
    label: _d2I18n2.default.t('Financial year starting in July'),
    // YYYY"July"
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'July';
    },
    hasRequiredValues: hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: createYearBasedPeriodFieldUpdater
}], ['FinancialOct', {
    label: _d2I18n2.default.t('Financial year starting in October'),
    // YYYY"Oct"
    getPeriodId: function getPeriodId(state) {
        return state[YEAR] + 'Oct';
    },
    hasRequiredValues: hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: createYearBasedPeriodFieldUpdater
}]]);

var neverAnError = function neverAnError() {
    return null;
};
periodTypeMap.forEach(function (periodType) {
    if (!periodType.getError) {
        periodType.getError = neverAnError;
    }
});

function getDays() {
    return {
        name: DAY,
        label: _d2I18n2.default.t('Day'),
        options: createSequence(31).reduce(function (acc, val) {
            return setProperty(acc, val, val);
        }, {})
    };
}

function getWeeks() {
    return {
        name: WEEK,
        label: _d2I18n2.default.t('Week'),
        options: createSequence(53).reduce(function (acc, val) {
            return setProperty(acc, val, val);
        }, {})
    };
}

function getBiWeeks() {
    var prefix = _d2I18n2.default.t('Bi week');
    return {
        name: BI_WEEK,
        label: _d2I18n2.default.t('Bi week'),
        options: createSequence(27).reduce(function (acc, val) {
            return setProperty(acc, val, prefix + ' ' + val);
        }, {})
    };
}

function getMonths() {
    return {
        name: MONTH,
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
}

function getBiMonths() {
    return {
        name: BI_MONTH,
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
}

function getQuarters() {
    return {
        name: QUARTER,
        label: _d2I18n2.default.t('Quarter'),
        options: { 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4' }
    };
}

function getSixMonthly() {
    return {
        name: SIX_MONTH,
        label: _d2I18n2.default.t('Six month period'),
        options: { 1: 'jan-jun', 2: 'jul-dec' }
    };
}

function getSixMonthlyApril() {
    return {
        name: SIX_MONTH,
        label: _d2I18n2.default.t('Six month period - April'),
        options: { 1: 'apr-sep', 2: 'oct-mar' }
    };
}

function getSixMonthlyNov() {
    return {
        name: SIX_MONTH,
        label: _d2I18n2.default.t('Six month period - November'),
        options: { 1: 'nov-apr', 2: 'may-oct' }
    };
}

function getYears() {
    var currentYear = new Date().getFullYear();
    var startYear = 2014; // why?
    var length = currentYear + 5 - startYear; // why again?

    return {
        name: YEAR,
        label: _d2I18n2.default.t('Year'),
        options: createSequence(length, startYear).reduce(function (acc, val) {
            return setProperty(acc, val, val);
        }, {})
    };
}

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

function zeroPad(str) {
    return ('0' + str).substr(-2);
}

function getMonthFromId(periodId) {
    return periodId.substr(4, 2);
}

function getYearFromId(periodId) {
    return periodId.substr(0, 4);
}

function createDayBasedPeriodFieldUpdater(_periodId, startDate) {
    var _ref5;

    var date = new Date(startDate);
    return _ref5 = {}, (0, _defineProperty3.default)(_ref5, DAY, date.getDay().toString()), (0, _defineProperty3.default)(_ref5, MONTH, (date.getMonth() + 1).toString()), (0, _defineProperty3.default)(_ref5, YEAR, date.getFullYear().toString()), _ref5;
}

function createWeekBasedPeriodFieldUpdater(periodId) {
    var _ref6;

    return _ref6 = {}, (0, _defineProperty3.default)(_ref6, WEEK, periodId.split('W')[1]), (0, _defineProperty3.default)(_ref6, YEAR, getYearFromId(periodId)), _ref6;
}

function createSixMonthsBasedPeriodFieldUpdater(periodId) {
    var _ref7;

    return _ref7 = {}, (0, _defineProperty3.default)(_ref7, SIX_MONTH, periodId.split('S')[1]), (0, _defineProperty3.default)(_ref7, YEAR, getYearFromId(periodId)), _ref7;
}

function createYearBasedPeriodFieldUpdater(periodId) {
    return (0, _defineProperty3.default)({}, YEAR, getYearFromId(periodId));
}

function hasValues(state, propKeys) {
    return propKeys.every(function (key) {
        return !!state[key];
    });
}

function hasWeekBasedValues(state) {
    return hasValues(state, [WEEK, YEAR]);
}

function hasSixMonthBasedValues(state) {
    return hasValues(state, [SIX_MONTH, YEAR]);
}

function hasYearBasedValues(state) {
    return !!state[YEAR];
}

function asInts(state, propKeys) {
    return propKeys.map(function (key) {
        return parseInt(state[key]);
    });
}

function getInvalidDayNumberError(state) {
    var _asInts = asInts(state, [YEAR, MONTH, DAY]),
        _asInts2 = (0, _slicedToArray3.default)(_asInts, 3),
        year = _asInts2[0],
        month = _asInts2[1],
        day = _asInts2[2];

    var daysInMonth = new Date(year, month, 0).getDate();

    if (day <= daysInMonth) {
        return null;
    }
    return _d2I18n2.default.t('Day number too high for current month');
}

function isWeekNumberTooHigh(week, year) {
    return !(0, _helpers.is53WeekISOYear)(year) && week === 53;
}

function getInvalidWeekNumberError(state) {
    var _asInts3 = asInts(state, [YEAR, WEEK]),
        _asInts4 = (0, _slicedToArray3.default)(_asInts3, 2),
        year = _asInts4[0],
        week = _asInts4[1];

    if (isWeekNumberTooHigh(week, year)) {
        return _d2I18n2.default.t('Week number too high for current year');
    }
    return null;
}

function getInvalidBiWeekNumberError(state) {
    var _asInts5 = asInts(state, [YEAR, BI_WEEK]),
        _asInts6 = (0, _slicedToArray3.default)(_asInts5, 2),
        year = _asInts6[0],
        biWeek = _asInts6[1];

    var week = biWeek * 2 - 1;
    if (isWeekNumberTooHigh(week, year)) {
        return _d2I18n2.default.t('Bi-week number too high for current year');
    }
}