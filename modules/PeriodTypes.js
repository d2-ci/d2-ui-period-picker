'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PeriodTypes = undefined;

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _fieldLabels;

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _distinctTypes = require('./distinctTypes');

var _PeriodType = require('./PeriodType');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldLabels = (_fieldLabels = {}, (0, _defineProperty3.default)(_fieldLabels, _distinctTypes.WEEK, _d2I18n2.default.t('Week')), (0, _defineProperty3.default)(_fieldLabels, _distinctTypes.SIX_MONTH, _d2I18n2.default.t('Six month period')), (0, _defineProperty3.default)(_fieldLabels, _distinctTypes.YEAR, _d2I18n2.default.t('Year')), _fieldLabels);

var PeriodTypes = exports.PeriodTypes = function () {
    function PeriodTypes(locale) {
        (0, _classCallCheck3.default)(this, PeriodTypes);

        // const locale = d2.currentUser.userSettings.get('keyUiLocale');
        this.types = new _map2.default([['Daily', new _PeriodType.DailyPeriodType({
            type: _distinctTypes.DAY,
            typeLabel: _d2I18n2.default.t('Daily'),
            fieldLabel: _d2I18n2.default.t('Day'),
            requiredSiblingFields: [_distinctTypes.YEAR, _distinctTypes.MONTH],
            locale: locale
        })], ['Weekly', new _PeriodType.WeeklyPeriodType({
            type: _distinctTypes.WEEK,
            typeLabel: _d2I18n2.default.t('Weekly'),
            fieldLabel: fieldLabels[_distinctTypes.WEEK],
            infix: 'W'
        })], ['WeeklyWednesday', new _PeriodType.WeeklyPeriodType({
            type: _distinctTypes.WEEK,
            typeLabel: _d2I18n2.default.t('Weekly Wednesday'),
            fieldLabel: fieldLabels[_distinctTypes.WEEK],
            infix: 'WedW'
        })], ['WeeklyThursday', new _PeriodType.WeeklyPeriodType({
            type: _distinctTypes.WEEK,
            typeLabel: _d2I18n2.default.t('Weekly Thursday'),
            fieldLabel: fieldLabels[_distinctTypes.WEEK],
            infix: 'ThuW'
        })], ['WeeklySaturday', new _PeriodType.WeeklyPeriodType({
            type: _distinctTypes.WEEK,
            typeLabel: _d2I18n2.default.t('Weekly Saturday'),
            fieldLabel: fieldLabels[_distinctTypes.WEEK],
            infix: 'SatW'
        })], ['WeeklySunday', new _PeriodType.WeeklyPeriodType({
            type: _distinctTypes.WEEK,
            typeLabel: _d2I18n2.default.t('Weekly Sunday'),
            fieldLabel: fieldLabels[_distinctTypes.WEEK],
            infix: 'SunW'
        })], ['BiWeekly', new _PeriodType.BiWeeklyPeriodType({
            type: _distinctTypes.BI_WEEK,
            typeLabel: _d2I18n2.default.t('Bi weekly'),
            fieldLabel: _d2I18n2.default.t('Bi Week'),
            infix: 'BiW'
        })], ['Monthly', new _PeriodType.MonthlyPeriodType({
            type: _distinctTypes.MONTH,
            typeLabel: _d2I18n2.default.t('Monthly'),
            fieldLabel: _d2I18n2.default.t('Month')
        })], ['BiMonthly', new _PeriodType.BiMonthlyPeriodType({
            type: _distinctTypes.BI_MONTH,
            typeLabel: _d2I18n2.default.t('Bi-monthly'),
            fieldLabel: _d2I18n2.default.t('Bi-month'),
            suffix: 'B'
        })], ['Quarterly', new _PeriodType.QuarterlyPeriodType({
            type: _distinctTypes.QUARTER,
            typeLabel: _d2I18n2.default.t('Quarterly'),
            fieldLabel: _d2I18n2.default.t('Quarter'),
            infix: 'Q'
        })], ['SixMonthly', new _PeriodType.SixMonthlyPeriodType({
            type: _distinctTypes.SIX_MONTH,
            typeLabel: _d2I18n2.default.t('Six monthly'),
            fieldLabel: fieldLabels[_distinctTypes.SIX_MONTH],
            infix: 'S'
        })], ['SixMonthlyApril', new _PeriodType.SixMonthlyPeriodType({
            type: _distinctTypes.SIX_MONTH,
            typeLabel: _d2I18n2.default.t('Six monthly starting in April'),
            fieldLabel: fieldLabels[_distinctTypes.SIX_MONTH],
            infix: 'AprilS'
        })], ['SixMonthlyNov', new _PeriodType.SixMonthlyPeriodType({
            type: _distinctTypes.SIX_MONTH,
            typeLabel: _d2I18n2.default.t('Six monthly starting in November'),
            fieldLabel: fieldLabels[_distinctTypes.SIX_MONTH],
            infix: 'NovS'
        })], ['Yearly', new _PeriodType.YearlyPeriodType({
            type: _distinctTypes.YEAR,
            typeLabel: _d2I18n2.default.t('Yearly'),
            fieldLabel: fieldLabels[_distinctTypes.YEAR]
        })], ['FinancialApril', new _PeriodType.YearlyPeriodType({
            type: _distinctTypes.YEAR,
            typeLabel: _d2I18n2.default.t('Financial year starting in April'),
            fieldLabel: fieldLabels[_distinctTypes.YEAR],
            suffix: 'April'
        })], ['FinancialJuly', new _PeriodType.YearlyPeriodType({
            type: _distinctTypes.YEAR,
            typeLabel: _d2I18n2.default.t('Financial year starting in July'),
            fieldLabel: fieldLabels[_distinctTypes.YEAR],
            suffix: 'July'
        })], ['FinancialOct', new _PeriodType.YearlyPeriodType({
            type: _distinctTypes.YEAR,
            typeLabel: _d2I18n2.default.t('Financial year starting in October'),
            fieldLabel: fieldLabels[_distinctTypes.YEAR],
            suffix: 'Oct'
        })], ['FinancialNov', new _PeriodType.YearlyPeriodType({
            type: _distinctTypes.YEAR,
            typeLabel: _d2I18n2.default.t('Financial year starting in November'),
            fieldLabel: fieldLabels[_distinctTypes.YEAR],
            suffix: 'Nov'
        })]]);
    }

    (0, _createClass3.default)(PeriodTypes, [{
        key: 'getPeriodTypes',
        value: function getPeriodTypes() {
            var periodTypes = [];
            this.types.forEach(function (type, key) {
                periodTypes.push({ label: type.getTypeLabel(), value: key });
            });
            return periodTypes;
        }
    }, {
        key: 'getPeriodType',
        value: function getPeriodType(name) {
            return this.types.get(name);
        }
    }, {
        key: 'getFields',
        value: function getFields(state) {
            if (!state.periodType) {
                return {};
            }
            return this.types.get(state.periodType).getFields(state);
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(_ref) {
            var type = _ref.type,
                id = _ref.id,
                startDate = _ref.startDate;

            return this.types.get(type).getFieldUpdateObject(id, startDate);
        }
    }, {
        key: 'findActivePeriodId',
        value: function findActivePeriodId(state, fieldKeyToSkip) {
            var fields = this.getFields(state);
            var option = void 0;

            for (var fieldKey in fields) {
                if (fieldKey !== fieldKeyToSkip) {
                    var _ret = function () {
                        var field = fields[fieldKey];
                        var fieldValue = state[field.name];
                        option = field.options.find(function (option) {
                            return option.id && option.value === fieldValue;
                        });
                        // Stop looping once found
                        if (option) {
                            return 'break';
                        }
                    }();

                    if (_ret === 'break') break;
                }
            }
            return option ? option.id : null;
        }
    }]);
    return PeriodTypes;
}();

exports.default = PeriodTypes;