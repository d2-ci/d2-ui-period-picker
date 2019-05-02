'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _distinctTypes = require('./distinctTypes');

var _helpers = require('./helpers');

var _options = require('./options');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var periodTypeLookup = new _map2.default([['Daily', {
    label: _d2I18n2.default.t('Daily'),
    // YYYYMMDD
    getPeriodId: (0, _helpers.createGetPeriodId)('' + _distinctTypes.YEAR + _distinctTypes.MONTH + _distinctTypes.DAY),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.DAY, _distinctTypes.MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ days: _options.days, months: _options.months, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createDayBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidDayNumberError
}], ['Weekly', {
    label: _d2I18n2.default.t('Weekly'),
    // YYYY"W"[1-53]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'W' + _distinctTypes.WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.weeklyOptionList),
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklyWednesday', {
    label: _d2I18n2.default.t('Weekly Wednesday'),
    // YYYY"WedW"[1-53]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'WedW' + _distinctTypes.WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.weeklyOptionList),
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklyThursday', {
    label: _d2I18n2.default.t('Weekly Thursday'),
    // YYYY"ThuW"[1-53]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'ThuW' + _distinctTypes.WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.weeklyOptionList),
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklySaturday', {
    label: _d2I18n2.default.t('Weekly Saturday'),
    // YYYY"SatW"[1-53]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'SatW' + _distinctTypes.WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.weeklyOptionList),
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['WeeklySunday', {
    label: _d2I18n2.default.t('Weekly Sunday'),
    // YYYY"SunW"[1-53]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'SunW' + _distinctTypes.WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.weeklyOptionList),
    createPeriodFieldUpdater: _helpers.createWeekBasedPeriodFieldUpdater,
    getError: _helpers.getInvalidWeekNumberError
}], ['BiWeekly', {
    label: _d2I18n2.default.t('Bi weekly'),
    // YYYY"BiW"[1-27]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'BiW' + _distinctTypes.BI_WEEK),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.BI_WEEK, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ biWeeks: _options.biWeeks, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createBiWeeklyPeriodFieldUpdater,
    getError: _helpers.getInvalidBiWeekNumberError
}], ['Monthly', {
    label: _d2I18n2.default.t('Monthly'),
    // YYYYMM
    getPeriodId: (0, _helpers.createGetPeriodId)('' + _distinctTypes.YEAR + _distinctTypes.MONTH),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ months: _options.months, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createMonthlyPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['BiMonthly', {
    label: _d2I18n2.default.t('Bi-monthly'),
    // YYYY0[1-6]"B"
    getPeriodId: (0, _helpers.createGetPeriodId)('' + _distinctTypes.YEAR + _distinctTypes.BI_MONTH + 'B'),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.BI_MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ biMonths: _options.biMonths, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createBiMonthlyPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['Quarterly', {
    label: _d2I18n2.default.t('Quarterly'),
    // YYYY"Q"[1-4]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'Q' + _distinctTypes.QUARTER),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.QUARTER, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ quarters: _options.quarters, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createQuarterlyPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['SixMonthly', {
    label: _d2I18n2.default.t('Six monthly'),
    // YYYY"S"[1/2]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'S' + _distinctTypes.SIX_MONTH),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.SIX_MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ sixMonths: _options.sixMonths, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['SixMonthlyApril', {
    label: _d2I18n2.default.t('Six monthly starting in April'),
    // YYYY"AprilS"[1/2]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'AprilS' + _distinctTypes.SIX_MONTH),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.SIX_MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ sixMonthsApril: _options.sixMonthsApril, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['SixMonthlyNov', {
    label: _d2I18n2.default.t('Six monthly starting in November'),
    // YYYY"NovS"[1/2]
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'NovS' + _distinctTypes.SIX_MONTH),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.SIX_MONTH, _distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)({ sixMonthsNov: _options.sixMonthsNov, years: _options.years }),
    createPeriodFieldUpdater: _helpers.createSixMonthsBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['Yearly', {
    label: _d2I18n2.default.t('Yearly'),
    // YYYY
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.yearlyOptionList),
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['FinancialApril', {
    label: _d2I18n2.default.t('Financial year starting in April'),
    // YYYY"April"
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'April'),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.yearlyOptionList),
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['FinancialJuly', {
    label: _d2I18n2.default.t('Financial year starting in July'),
    // YYYY"July"
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'July'),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.yearlyOptionList),
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['FinancialOct', {
    label: _d2I18n2.default.t('Financial year starting in October'),
    // YYYY"Oct"
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'Oct'),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.yearlyOptionList),
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}], ['FinancialNov', {
    label: _d2I18n2.default.t('Financial year starting in November'),
    // YYYY"Oct"
    getPeriodId: (0, _helpers.createGetPeriodId)(_distinctTypes.YEAR + 'Nov'),
    hasRequiredValues: (0, _helpers.createHasRequiredValues)([_distinctTypes.YEAR]),
    getPeriodFields: (0, _helpers.createGetPeriodFields)(_options.yearlyOptionList),
    createPeriodFieldUpdater: _helpers.createYearBasedPeriodFieldUpdater,
    getError: _helpers.neverAnError
}]]);

exports.default = periodTypeLookup;