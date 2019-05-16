'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PeriodPicker = exports.SHIFT_YEARS_FORTH = exports.SHIFT_YEARS_BACK = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _styles = require('@material-ui/core/styles');

var _parser = require('d2/period/parser');

var _parser2 = _interopRequireDefault(_parser);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../modules/helpers');

var _distinctTypes = require('../modules/distinctTypes');

var _PeriodTypes = require('../modules/PeriodTypes');

var _PeriodTypes2 = _interopRequireDefault(_PeriodTypes);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHIFT_YEARS_BACK = exports.SHIFT_YEARS_BACK = 'SHIFT_YEARS_BACK';
var SHIFT_YEARS_FORTH = exports.SHIFT_YEARS_FORTH = 'SHIFT_YEARS_FORTH';

var styles = function styles(theme) {
    return {
        label: {
            fontSize: '1.2rem',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.87)',
            padding: '16px 8px 0px',
            margin: '0px',
            flex: '1 0 120px'
        },
        flexContainer: {
            display: 'flex',
            marginRight: -16
        },
        error: {
            color: theme.colors.negative,
            margin: 8
        }
    };
};

var PeriodPicker = exports.PeriodPicker = function (_PureComponent) {
    (0, _inherits3.default)(PeriodPicker, _PureComponent);

    function PeriodPicker(props) {
        var _this$state;

        (0, _classCallCheck3.default)(this, PeriodPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PeriodPicker.__proto__ || (0, _getPrototypeOf2.default)(PeriodPicker)).call(this, props));

        _this.onChange = function (_ref, component) {
            var target = _ref.target;

            if (_this.isYearShiftElement(target)) {
                _this.shiftYears(target.value);
                return;
            }

            var state = (0, _extends4.default)({}, _this.state, (0, _defineProperty3.default)({}, target.name, target.value));
            var periodId = component.props['period-id'] || _this.findActivePeriodId(state, target.name);

            if (periodId) {
                _this.props.onChange(periodId);
            } else {
                var _this$setState;

                _this.setState((_this$setState = {}, (0, _defineProperty3.default)(_this$setState, target.name, target.value), (0, _defineProperty3.default)(_this$setState, 'yearFieldOpen', false), _this$setState));
            }
        };

        _this.onYearFieldOpen = function () {
            _this.setState({ yearFieldOpen: true });
        };

        _this.onYearFieldClose = function (_ref2) {
            var target = _ref2.target;

            var yearFieldOpen = _this.isYearShiftElement(target);
            var hasEmptyYearValue = !_this.state[_distinctTypes.YEAR];
            var isBackdropClick = target.getAttribute('role') !== 'option';

            _this.setState({ yearFieldOpen: yearFieldOpen });

            if (isBackdropClick && hasEmptyYearValue) {
                // initially the clicked element is the activeElement
                // but on the next tick, the Select itself will have focus
                // which looks weird when no value is selected because
                // of the floating label. So in that case we blur it.
                setTimeout(function () {
                    document.activeElement.blur();
                }, 0);
            }
        };

        var locale = props.d2.currentUser.userSettings.get('keyUiLocale');
        var pt = new _PeriodTypes2.default(locale);

        _this.periodTypeOptions = pt.getPeriodTypes();
        _this.getPeriodType = pt.getPeriodType.bind(pt);
        _this.getFields = pt.getFields.bind(pt);
        _this.getFieldUpdateObject = pt.getFieldUpdateObject.bind(pt);
        _this.findActivePeriodId = pt.findActivePeriodId.bind(pt);

        _this.state = (_this$state = {
            periodType: '',
            errorText: '',
            yearFieldOpen: false,
            yearOffset: 0
        }, (0, _defineProperty3.default)(_this$state, _distinctTypes.DAY, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.WEEK, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.BI_WEEK, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.BI_MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.QUARTER, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.SIX_MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.YEAR, ''), _this$state);
        return _this;
    }

    (0, _createClass3.default)(PeriodPicker, [{
        key: 'isYearShiftElement',
        value: function isYearShiftElement(target) {
            var value = target.value || target.getAttribute('data-value');
            return value === SHIFT_YEARS_BACK || value === SHIFT_YEARS_FORTH;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // This only does something in development
            (0, _helpers.checkForUnsupportedPeriodTypes)(this.props.d2, this.getPeriodType);
            this.updateStateFromPeriodId();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.value !== prevProps.value) {
                this.updateStateFromPeriodId();
            }
        }
    }, {
        key: 'shiftYears',
        value: function shiftYears(value) {
            var relativeOffset = value === SHIFT_YEARS_BACK ? -1 : 1;
            var yearOffset = this.state.yearOffset + relativeOffset;
            this.setState({ yearOffset: yearOffset, year: '' });
        }
    }, {
        key: 'updateStateFromPeriodId',
        value: function updateStateFromPeriodId() {
            var periodId = this.props.value;
            var periodType = this.state.periodType;
            var errorText = this.state.errorText;
            var periodFieldsUpdateObject = {};

            if (periodId) {
                try {
                    var period = (0, _parser2.default)(periodId);
                    periodType = period.type;
                    errorText = '';
                    periodFieldsUpdateObject = this.getFieldUpdateObject(period);
                } catch (error) {
                    // This should only be triggered when an invalid value is set via props
                    console.error(error);
                    errorText = error.message;
                }
            }
            this.setState((0, _extends4.default)({
                periodType: periodType,
                errorText: errorText,
                yearFieldOpen: false
            }, periodFieldsUpdateObject));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var fields = this.getFields(this.state);

            return _react2.default.createElement(
                _react.Fragment,
                null,
                this.props.label && _react2.default.createElement(
                    'h4',
                    { className: this.props.classes.label },
                    this.props.label
                ),
                _react2.default.createElement(_Select2.default, {
                    name: 'periodType',
                    label: _d2I18n2.default.t('Period type'),
                    value: this.state.periodType,
                    onChange: this.onChange,
                    options: this.periodTypeOptions
                }),
                this.state.periodType && _react2.default.createElement(
                    'div',
                    { className: this.props.classes.flexContainer },
                    (0, _keys2.default)(fields).map(function (key) {
                        return _react2.default.createElement(_Select2.default, {
                            key: fields[key].name,
                            name: fields[key].name,
                            label: fields[key].label,
                            value: _this2.state[fields[key].name],
                            onChange: _this2.onChange,
                            options: fields[key].options,
                            yearFieldOpen: _this2.state.yearFieldOpen,
                            onYearOpen: _this2.onYearFieldOpen,
                            onYearClose: _this2.onYearFieldClose
                        });
                    })
                ),
                this.state.errorText && _react2.default.createElement(
                    _core.FormHelperText,
                    { className: '' + this.props.classes.error },
                    this.state.errorText
                )
            );
        }
    }]);
    return PeriodPicker;
}(_react.PureComponent);

PeriodPicker.propTypes = {
    d2: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    classes: _propTypes2.default.object.isRequired
};

PeriodPicker.defaultProps = {
    label: '',
    value: ''
};

exports.default = (0, _styles.withStyles)(styles)(PeriodPicker);