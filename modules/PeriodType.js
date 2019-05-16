'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.YearlyPeriodType = exports.SixMonthlyPeriodType = exports.QuarterlyPeriodType = exports.BiMonthlyPeriodType = exports.MonthlyPeriodType = exports.BiWeeklyPeriodType = exports.WeeklyPeriodType = exports.DailyPeriodType = exports.PeriodType = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _parser = require('d2/period/parser');

var _parser2 = _interopRequireDefault(_parser);

var _helpers = require('d2/period/helpers');

var _distinctTypes = require('./distinctTypes');

var _helpers2 = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PeriodType = exports.PeriodType = function () {
    function PeriodType(_ref) {
        var _ref$locale = _ref.locale,
            locale = _ref$locale === undefined ? 'en' : _ref$locale,
            type = _ref.type,
            typeLabel = _ref.typeLabel,
            fieldLabel = _ref.fieldLabel,
            _ref$requiredSiblingF = _ref.requiredSiblingFields,
            requiredSiblingFields = _ref$requiredSiblingF === undefined ? [_distinctTypes.YEAR] : _ref$requiredSiblingF,
            _ref$infix = _ref.infix,
            infix = _ref$infix === undefined ? '' : _ref$infix,
            _ref$suffix = _ref.suffix,
            suffix = _ref$suffix === undefined ? '' : _ref$suffix;
        (0, _classCallCheck3.default)(this, PeriodType);

        this.locale = locale;
        this.type = type;
        this.typeLabel = typeLabel;
        this.fieldLabel = fieldLabel;
        this.infix = infix;
        this.suffix = suffix;
        this.requiredSiblingFields = requiredSiblingFields;
    }

    (0, _createClass3.default)(PeriodType, [{
        key: 'getFields',
        value: function getFields(state) {
            var fields = this.getFieldsWithEmptyOptions(state);

            if (!this.hasRequiredFields(state)) {
                return fields;
            }

            return this.getPeriodTypeFields(state, fields);
        }
    }, {
        key: 'getTypeLabel',
        value: function getTypeLabel() {
            return this.typeLabel;
        }
    }, {
        key: 'getFieldsWithEmptyOptions',
        value: function getFieldsWithEmptyOptions(state) {
            return (0, _defineProperty3.default)({
                years: (0, _helpers2.getYears)(state)
            }, this.type + 's', {
                name: this.type,
                label: this.fieldLabel,
                options: []
            });
        }
    }, {
        key: 'hasRequiredFields',
        value: function hasRequiredFields(state) {
            return this.requiredSiblingFields.every(function (fieldName) {
                return !!state[fieldName];
            });
        }
    }, {
        key: 'createPeriodOption',
        value: function createPeriodOption(periodId, value) {
            var period = (0, _parser2.default)(periodId);
            return {
                value: value,
                label: period.name,
                id: period.id
            };
        }
    }, {
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            return fields;
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(periodId) {
            var _ref3;

            return _ref3 = {}, (0, _defineProperty3.default)(_ref3, this.type, periodId.split(this.infix)[1]), (0, _defineProperty3.default)(_ref3, _distinctTypes.YEAR, (0, _helpers2.getYearFromId)(periodId)), _ref3;
        }
    }]);
    return PeriodType;
}();

var DailyPeriodType = exports.DailyPeriodType = function (_PeriodType) {
    (0, _inherits3.default)(DailyPeriodType, _PeriodType);

    function DailyPeriodType() {
        (0, _classCallCheck3.default)(this, DailyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (DailyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(DailyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(DailyPeriodType, [{
        key: 'getFieldsWithEmptyOptions',
        value: function getFieldsWithEmptyOptions(state) {
            return {
                years: (0, _helpers2.getYears)(state),
                months: (0, _helpers2.getMonths)(this.locale),
                days: {
                    name: this.type,
                    label: this.fieldLabel,
                    options: []
                }
            };
        }
    }, {
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this2 = this;

            var _asInts = (0, _helpers2.asInts)(state, [_distinctTypes.YEAR, _distinctTypes.MONTH]),
                _asInts2 = (0, _slicedToArray3.default)(_asInts, 2),
                year = _asInts2[0],
                month = _asInts2[1];

            var daysInMonth = new Date(year, month, 0).getDate();
            fields.days.options = (0, _helpers2.createSequence)(daysInMonth, true).map(function (dayNr) {
                var periodId = state[_distinctTypes.YEAR] + state[_distinctTypes.MONTH] + dayNr;
                return _this2.createPeriodOption(periodId, dayNr, true);
            });

            return fields;
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(_periodId, startDate) {
            var _ref4;

            var date = new Date(startDate);
            return _ref4 = {}, (0, _defineProperty3.default)(_ref4, _distinctTypes.DAY, (0, _helpers2.zeroPad)(date.getDate())), (0, _defineProperty3.default)(_ref4, _distinctTypes.MONTH, (0, _helpers2.zeroPad)(date.getMonth() + 1)), (0, _defineProperty3.default)(_ref4, _distinctTypes.YEAR, date.getFullYear().toString()), _ref4;
        }
    }]);
    return DailyPeriodType;
}(PeriodType);

var WeeklyPeriodType = exports.WeeklyPeriodType = function (_PeriodType2) {
    (0, _inherits3.default)(WeeklyPeriodType, _PeriodType2);

    function WeeklyPeriodType() {
        (0, _classCallCheck3.default)(this, WeeklyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (WeeklyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(WeeklyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(WeeklyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this4 = this;

            var weeksInYear = (0, _helpers.is53WeekISOYear)(parseInt(state[_distinctTypes.YEAR])) ? 53 : 52;
            fields.weeks.options = (0, _helpers2.createSequence)(weeksInYear).map(function (weekNr) {
                var periodId = state[_distinctTypes.YEAR] + _this4.infix + weekNr;
                return _this4.createPeriodOption(periodId, weekNr);
            });
            return fields;
        }
    }]);
    return WeeklyPeriodType;
}(PeriodType);

var BiWeeklyPeriodType = exports.BiWeeklyPeriodType = function (_PeriodType3) {
    (0, _inherits3.default)(BiWeeklyPeriodType, _PeriodType3);

    function BiWeeklyPeriodType() {
        (0, _classCallCheck3.default)(this, BiWeeklyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (BiWeeklyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(BiWeeklyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(BiWeeklyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this6 = this;

            var biWeeksInYear = (0, _helpers.is53WeekISOYear)(parseInt(state[_distinctTypes.YEAR])) ? 27 : 26;
            fields.biWeeks.options = (0, _helpers2.createSequence)(biWeeksInYear).map(function (biWeekNr) {
                var periodId = state[_distinctTypes.YEAR] + _this6.infix + biWeekNr;
                return _this6.createPeriodOption(periodId, biWeekNr);
            });
            return fields;
        }
    }]);
    return BiWeeklyPeriodType;
}(PeriodType);

var MonthlyPeriodType = exports.MonthlyPeriodType = function (_PeriodType4) {
    (0, _inherits3.default)(MonthlyPeriodType, _PeriodType4);

    function MonthlyPeriodType() {
        (0, _classCallCheck3.default)(this, MonthlyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (MonthlyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(MonthlyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(MonthlyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this8 = this;

            fields.months.options = (0, _helpers2.createSequence)(12, true).map(function (monthNr) {
                var periodId = state[_distinctTypes.YEAR] + monthNr;
                return _this8.createPeriodOption(periodId, monthNr);
            });
            return fields;
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(periodId) {
            var _ref5;

            return _ref5 = {}, (0, _defineProperty3.default)(_ref5, _distinctTypes.MONTH, (0, _helpers2.getMonthFromId)(periodId)), (0, _defineProperty3.default)(_ref5, _distinctTypes.YEAR, (0, _helpers2.getYearFromId)(periodId)), _ref5;
        }
    }]);
    return MonthlyPeriodType;
}(PeriodType);

var BiMonthlyPeriodType = exports.BiMonthlyPeriodType = function (_PeriodType5) {
    (0, _inherits3.default)(BiMonthlyPeriodType, _PeriodType5);

    function BiMonthlyPeriodType() {
        (0, _classCallCheck3.default)(this, BiMonthlyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (BiMonthlyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(BiMonthlyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(BiMonthlyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this10 = this;

            fields.biMonths.options = (0, _helpers2.createSequence)(6, true).map(function (biMonthNr) {
                var periodId = state[_distinctTypes.YEAR] + biMonthNr + _this10.suffix;
                return _this10.createPeriodOption(periodId, biMonthNr);
            });
            return fields;
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(periodId) {
            var _ref6;

            return _ref6 = {}, (0, _defineProperty3.default)(_ref6, _distinctTypes.BI_MONTH, periodId.substr(4, 2)), (0, _defineProperty3.default)(_ref6, _distinctTypes.YEAR, (0, _helpers2.getYearFromId)(periodId)), _ref6;
        }
    }]);
    return BiMonthlyPeriodType;
}(PeriodType);

var QuarterlyPeriodType = exports.QuarterlyPeriodType = function (_PeriodType6) {
    (0, _inherits3.default)(QuarterlyPeriodType, _PeriodType6);

    function QuarterlyPeriodType() {
        (0, _classCallCheck3.default)(this, QuarterlyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (QuarterlyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(QuarterlyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(QuarterlyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this12 = this;

            fields.quarters.options = (0, _helpers2.createSequence)(4).map(function (quarterNr) {
                var periodId = state[_distinctTypes.YEAR] + _this12.infix + quarterNr;
                return _this12.createPeriodOption(periodId, quarterNr);
            });
            return fields;
        }
    }]);
    return QuarterlyPeriodType;
}(PeriodType);

var SixMonthlyPeriodType = exports.SixMonthlyPeriodType = function (_PeriodType7) {
    (0, _inherits3.default)(SixMonthlyPeriodType, _PeriodType7);

    function SixMonthlyPeriodType() {
        (0, _classCallCheck3.default)(this, SixMonthlyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (SixMonthlyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(SixMonthlyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(SixMonthlyPeriodType, [{
        key: 'getPeriodTypeFields',
        value: function getPeriodTypeFields(state, fields) {
            var _this14 = this;

            fields.sixMonths.options = (0, _helpers2.createSequence)(2).map(function (sixMonthNr) {
                var periodId = state[_distinctTypes.YEAR] + _this14.infix + sixMonthNr;
                return _this14.createPeriodOption(periodId, sixMonthNr);
            });
            return fields;
        }
    }]);
    return SixMonthlyPeriodType;
}(PeriodType);

var YearlyPeriodType = exports.YearlyPeriodType = function (_PeriodType8) {
    (0, _inherits3.default)(YearlyPeriodType, _PeriodType8);

    function YearlyPeriodType() {
        (0, _classCallCheck3.default)(this, YearlyPeriodType);
        return (0, _possibleConstructorReturn3.default)(this, (YearlyPeriodType.__proto__ || (0, _getPrototypeOf2.default)(YearlyPeriodType)).apply(this, arguments));
    }

    (0, _createClass3.default)(YearlyPeriodType, [{
        key: 'getFields',

        // Note that this class is overriding the getFields method because
        // no sibling fields are required
        value: function getFields(state) {
            var _this16 = this;

            var fields = {
                years: (0, _helpers2.getYears)(state)
            };
            var options = fields.years.options.map(function (_ref7) {
                var value = _ref7.value;

                var periodId = value + _this16.suffix;
                return _this16.createPeriodOption(periodId, value);
            });
            fields.years.options = options;
            return fields;
        }
    }, {
        key: 'getFieldUpdateObject',
        value: function getFieldUpdateObject(periodId) {
            return (0, _defineProperty3.default)({}, _distinctTypes.YEAR, (0, _helpers2.getYearFromId)(periodId));
        }
    }]);
    return YearlyPeriodType;
}(PeriodType);