'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkForUnsupportedPeriodTypes;

var _periodTypeMap = require('./periodTypeMap');

function checkForUnsupportedPeriodTypes(periodTypes) {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    var unsupportedPeriodTypes = periodTypes.filter(function (_ref) {
        var name = _ref.name;
        return !_periodTypeMap.periodTypeMap.get(name);
    }).map(function (_ref2) {
        var name = _ref2.name;
        return name;
    }).join(', ');

    if (unsupportedPeriodTypes) {
        console.warn(['WARNING: Unsupported period type(s) detected', 'The PeriodPicker component needs to be updated to support the following period type(s):', unsupportedPeriodTypes].join('\n'));
    }
}