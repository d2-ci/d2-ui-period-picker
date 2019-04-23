'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _distinctTypes = require('./distinctTypes');

var _options = require('./options');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weeklyOptionList = { weeks: _options.weeks, years: _options.years };
var yearlyOptionList = { years: _options.years };

var periodTypeLookup = new _map2.default([['Daily', {
    label: _d2I18n2.default.t('Daily'),
    // YYYYMMDD
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + (0, _helpers.zeroPad)(state[_distinctTypes.MONTH]) + (0, _helpers.zeroPad)(state[_distinctTypes.DAY]);
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return (0, _helpers.hasValues)(state, [_distinctTypes.DAY, _distinctTypes.MONTH, _distinctTypes.YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { days: _options.days, months: _options.months, years: _options.years };
    },
    createPeriodFieldUpdater: _helpers.createDayBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidDayNumberError
}], ['Weekly', {
    label: _d2I18n2.default.t('Weekly'),
    // YYYY"W"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'W' + (0, _helpers.zeroPad)(state[_distinctTypes.WEEK]);
    },
    hasRequiredValues: _helpers.hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklyWednesday', {
    label: _d2I18n2.default.t('Weekly Wednesday'),
    // YYYY"WedW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'WedW' + (0, _helpers.zeroPad)(state[_distinctTypes.WEEK]);
    },
    hasRequiredValues: _helpers.hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklyThursday', {
    label: _d2I18n2.default.t('Weekly Thursday'),
    // YYYY"ThuW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'ThuW"' + (0, _helpers.zeroPad)(state[_distinctTypes.WEEK]);
    },
    hasRequiredValues: _helpers.hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklySaturday', {
    label: _d2I18n2.default.t('Weekly Saturday'),
    // YYYY"SatW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'SatW' + (0, _helpers.zeroPad)(state[_distinctTypes.WEEK]);
    },
    hasRequiredValues: _helpers.hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklySunday', {
    label: _d2I18n2.default.t('Weekly Sunday'),
    // YYYY"SunW"[1-53]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'SunW' + (0, _helpers.zeroPad)(state[_distinctTypes.WEEK]);
    },
    hasRequiredValues: _helpers.hasWeekBasedValues,
    getPeriodFields: function getPeriodFields() {
        return weeklyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['BiWeekly', {
    label: _d2I18n2.default.t('Bi weekly'),
    // YYYY"BiW"[1-27]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'BiW' + (0, _helpers.zeroPad)(state[_distinctTypes.BI_WEEK]);
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return (0, _helpers.hasValues)(state, [_distinctTypes.BI_WEEK, _distinctTypes.YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { biWeeks: _options.biWeeks, years: _options.years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref;

        return _ref = {}, (0, _defineProperty3.default)(_ref, _distinctTypes.BI_WEEK, periodId.split('BiW')[1]), (0, _defineProperty3.default)(_ref, _distinctTypes.YEAR, (0, _helpers.getYearFromId)(periodId)), _ref;
    },
    getError: _helpers.getInvalidBiWeekNumberError
}], ['Monthly', {
    label: _d2I18n2.default.t('Monthly'),
    // YYYYMM
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + (0, _helpers.zeroPad)(state[_distinctTypes.MONTH]);
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return (0, _helpers.hasValues)(state, [_distinctTypes.MONTH, _distinctTypes.YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { months: _options.months, years: _options.years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref2;

        return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _distinctTypes.MONTH, (0, _helpers.getMonthFromId)(periodId)), (0, _defineProperty3.default)(_ref2, _distinctTypes.YEAR, (0, _helpers.getYearFromId)(periodId)), _ref2;
    }
}], ['BiMonthly', {
    label: _d2I18n2.default.t('Bi-monthly'),
    // YYYY0[1-6]"B"
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + (0, _helpers.zeroPad)(state[_distinctTypes.BI_MONTH]) + 'B';
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return (0, _helpers.hasValues)(state, [_distinctTypes.BI_MONTH, _distinctTypes.YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { biMonths: _options.biMonths, years: _options.years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref3;

        return _ref3 = {}, (0, _defineProperty3.default)(_ref3, _distinctTypes.BI_MONTH, parseInt(periodId.substr(4, 2)).toString()), (0, _defineProperty3.default)(_ref3, _distinctTypes.YEAR, (0, _helpers.getYearFromId)(periodId)), _ref3;
    }
}], ['Quarterly', {
    label: _d2I18n2.default.t('Quarterly'),
    // YYYY"Q"[1-4]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'Q' + state[_distinctTypes.QUARTER];
    },
    hasRequiredValues: function hasRequiredValues(state) {
        return (0, _helpers.hasValues)(state, [_distinctTypes.QUARTER, _distinctTypes.YEAR]);
    },
    getPeriodFields: function getPeriodFields() {
        return { quarters: _options.quarters, years: _options.years };
    },
    createPeriodFieldUpdater: function createPeriodFieldUpdater(periodId) {
        var _ref4;

        return _ref4 = {}, (0, _defineProperty3.default)(_ref4, _distinctTypes.QUARTER, periodId.split('Q')[1]), (0, _defineProperty3.default)(_ref4, _distinctTypes.YEAR, (0, _helpers.getYearFromId)(periodId)), _ref4;
    }
}], ['SixMonthly', {
    label: _d2I18n2.default.t('Six monthly'),
    // YYYY"S"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'S' + state[_distinctTypes.SIX_MONTH];
    },
    hasRequiredValues: _helpers.hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonths: _options.sixMonths, years: _options.years };
    },
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater
}], ['SixMonthlyApril', {
    label: _d2I18n2.default.t('Six monthly starting in April'),
    // YYYY"AprilS"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'AprilS' + state[_distinctTypes.SIX_MONTH];
    },
    hasRequiredValues: _helpers.hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonthsApril: _options.sixMonthsApril, years: _options.years };
    },
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater
}], ['SixMonthlyNov', {
    label: _d2I18n2.default.t('Six monthly starting in November'),
    // YYYY"NovS"[1/2]
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'NovS' + state[_distinctTypes.SIX_MONTH];
    },
    hasRequiredValues: _helpers.hasSixMonthBasedValues,
    getPeriodFields: function getPeriodFields() {
        return { sixMonthsNov: _options.sixMonthsNov, years: _options.years };
    },
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater
}], ['Yearly', {
    label: _d2I18n2.default.t('Yearly'),
    // YYYY
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR];
    },
    hasRequiredValues: _helpers.hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater
}], ['FinancialApril', {
    label: _d2I18n2.default.t('Financial year starting in April'),
    // YYYY"April"
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'April';
    },
    hasRequiredValues: _helpers.hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater
}], ['FinancialJuly', {
    label: _d2I18n2.default.t('Financial year starting in July'),
    // YYYY"July"
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'July';
    },
    hasRequiredValues: _helpers.hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater
}], ['FinancialOct', {
    label: _d2I18n2.default.t('Financial year starting in October'),
    // YYYY"Oct"
    getPeriodId: function getPeriodId(state) {
        return state[_distinctTypes.YEAR] + 'Oct';
    },
    hasRequiredValues: _helpers.hasYearBasedValues,
    getPeriodFields: function getPeriodFields() {
        return yearlyOptionList;
    },
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater
}]]);

periodTypeLookup.forEach(function (periodType) {
    if (!periodType.getError) {
        periodType.getError = _helpers.neverAnError;
    }
});

exports.default = periodTypeLookup;