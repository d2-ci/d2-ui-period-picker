'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkForUnsupportedPeriodTypes = exports.getYearFromId = exports.getMonthFromId = exports.asInts = exports.zeroPad = exports.createSequence = exports.getMonths = exports.getYears = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _helpers = require('d2/period/helpers');

var _distinctTypes = require('./distinctTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getYears = exports.getYears = function getYears(_ref) {
    var _ref$yearOffset = _ref.yearOffset,
        yearOffset = _ref$yearOffset === undefined ? 0 : _ref$yearOffset;

    var len = 8;
    var start = new Date().getFullYear() - len / 2 + yearOffset * len;
    return {
        name: _distinctTypes.YEAR,
        label: _d2I18n2.default.t('Year'),
        options: createSequence(len, false, start).map(function (year) {
            return {
                value: year,
                label: year
            };
        })
    };
};

var getMonths = exports.getMonths = function getMonths() {
    var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

    var monthNames = (0, _helpers.getMonthNamesForLocale)(locale);
    return {
        name: _distinctTypes.MONTH,
        label: _d2I18n2.default.t('Month'),
        options: monthNames.map(function (name, index) {
            return {
                label: name,
                value: zeroPad(index + 1)
            };
        })
    };
};

var createSequence = exports.createSequence = function createSequence(length) {
    var shouldPad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return (0, _from2.default)({ length: length }, function (v, i) {
        return shouldPad ? zeroPad(start + i) : (start + i).toString();
    });
};

var zeroPad = exports.zeroPad = function zeroPad(str) {
    return ('0' + str).substr(-2);
};

var asInts = exports.asInts = function asInts(state, propKeys) {
    return propKeys.map(function (key) {
        return parseInt(state[key]);
    });
};

var getMonthFromId = exports.getMonthFromId = function getMonthFromId(periodId) {
    return periodId.substr(4, 2);
};

var getYearFromId = exports.getYearFromId = function getYearFromId(periodId) {
    return periodId.substr(0, 4);
};

var checkForUnsupportedPeriodTypes = exports.checkForUnsupportedPeriodTypes = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(d2, getPeriodType) {
        var api, response, unsupportedPeriodTypes;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(process.env.NODE_ENV !== 'development')) {
                            _context.next = 2;
                            break;
                        }

                        return _context.abrupt('return');

                    case 2:
                        api = d2.Api.getApi();
                        _context.next = 5;
                        return api.get('periodTypes');

                    case 5:
                        response = _context.sent;
                        unsupportedPeriodTypes = response.periodTypes.filter(function (_ref3) {
                            var name = _ref3.name;
                            return !getPeriodType(name);
                        }).map(function (_ref4) {
                            var name = _ref4.name;
                            return name;
                        }).join(', ');


                        if (unsupportedPeriodTypes) {
                            console.warn(['WARNING: Unsupported period type(s) detected', 'The PeriodPicker component needs to be updated to support the following period type(s):', unsupportedPeriodTypes].join('\n'));
                        }

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function checkForUnsupportedPeriodTypes(_x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();