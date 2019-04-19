'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _parser = require('d2/period/parser');

var _parser2 = _interopRequireDefault(_parser);

var _FormHelperText = require('@material-ui/core/FormHelperText');

var _FormHelperText2 = _interopRequireDefault(_FormHelperText);

var _styles = require('@material-ui/core/styles');

var _periodTypeMap = require('./periodTypeMap');

var _checkForUnsupportedPeriodTypes = require('./checkForUnsupportedPeriodTypes');

var _checkForUnsupportedPeriodTypes2 = _interopRequireDefault(_checkForUnsupportedPeriodTypes);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _PeriodFields = require('./PeriodFields');

var _PeriodFields2 = _interopRequireDefault(_PeriodFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        error: {
            color: theme.colors.negative
        },
        helper: {
            margin: 8
        }
    };
};

// Period types can be cached for the entire app lifecycle
// because they won't change
var periodTypes = void 0;

var PeriodPicker = function (_PureComponent) {
    (0, _inherits3.default)(PeriodPicker, _PureComponent);

    function PeriodPicker() {
        var _ref, _this$state;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, PeriodPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PeriodPicker.__proto__ || (0, _getPrototypeOf2.default)(PeriodPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = {
            ready: false,
            periodType: '',
            errorText: ''
        }, (0, _defineProperty3.default)(_this$state, _periodTypeMap.DAY, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.WEEK, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.BI_WEEK, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.MONTH, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.BI_MONTH, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.QUARTER, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.SIX_MONTH, ''), (0, _defineProperty3.default)(_this$state, _periodTypeMap.YEAR, ''), _this$state), _this.api = _this.props.d2.Api.getApi(), _this.onPeriodTypeChange = function (_ref2) {
            var target = _ref2.target;

            _this.setState({ periodType: target.value, errorText: '' });
        }, _this.onPeriodFieldChange = function (_ref3) {
            var target = _ref3.target;

            _this.setState((0, _defineProperty3.default)({}, target.name, target.value));

            var futureState = (0, _extends4.default)({}, _this.state, (0, _defineProperty3.default)({}, target.name, target.value));
            var periodType = _periodTypeMap.periodTypeMap.get(futureState.periodType);

            if (periodType.hasRequiredValues(futureState)) {
                var errorText = periodType.getError(futureState);

                if (errorText) {
                    _this.setState({ errorText: errorText });
                } else {
                    var periodId = periodType.getPeriodId(futureState);
                    console.log(periodId);

                    try {
                        var period = (0, _parser2.default)(periodId);
                        _this.setState({ errorText: '' });
                        _this.props.onChange(period.id);
                    } catch (error) {
                        _this.setState({ errorText: error.message });
                    }
                }
            }
        }, _this.getValueForPeriodFieldType = function (type) {
            return _this.state[type];
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PeriodPicker, [{
        key: 'componentDidMount',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (periodTypes) {
                                    _context.next = 3;
                                    break;
                                }

                                _context.next = 3;
                                return this.fetchPeriodTypes();

                            case 3:
                                this.updateStateFromProps();

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.value !== prevProps.value) {
                this.updateStateFromProps();
            }
        }
    }, {
        key: 'fetchPeriodTypes',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var response;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return this.api.get('periodTypes');

                            case 3:
                                response = _context2.sent;

                                periodTypes = response.periodTypes.reduce(function (acc, _ref6) {
                                    var name = _ref6.name;

                                    var supportedPeriod = _periodTypeMap.periodTypeMap.get(name);
                                    if (supportedPeriod) {
                                        acc[name] = supportedPeriod.label;
                                    }
                                    return acc;
                                }, {});
                                (0, _checkForUnsupportedPeriodTypes2.default)(response.periodTypes);
                                _context2.next = 12;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);

                                console.error(_context2.t0);
                                this.setState({
                                    errorText: _d2I18n2.default.t('There was a problem fetching the period types')
                                });

                            case 12:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function fetchPeriodTypes() {
                return _ref5.apply(this, arguments);
            }

            return fetchPeriodTypes;
        }()
    }, {
        key: 'updateStateFromProps',
        value: function updateStateFromProps() {
            var periodId = this.props.value;
            var periodType = '';
            var errorText = '';
            var updateObject = {};
            if (periodId) {
                try {
                    var period = (0, _parser2.default)(periodId);
                    periodType = period.type;
                    updateObject = _periodTypeMap.periodTypeMap.get(periodType).createPeriodFieldUpdater(period.id, period.startDate);
                } catch (error) {
                    // This should only be triggered when an invalid value is set via props
                    console.error(error);
                    errorText = _d2I18n2.default.t('Invalid period detected');
                }
            }
            this.setState((0, _extends4.default)({ periodType: periodType, errorText: errorText, ready: true }, updateObject));
        }
    }, {
        key: 'render',
        value: function render() {
            if (!periodTypes) {
                return _react2.default.createElement(
                    'h1',
                    null,
                    'Loading...'
                );
            }

            return _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(_Select2.default, {
                    name: 'periodType',
                    label: _d2I18n2.default.t('Period type'),
                    value: this.state.periodType,
                    onChange: this.onPeriodTypeChange,
                    options: periodTypes
                }),
                this.state.periodType && _react2.default.createElement(_PeriodFields2.default, {
                    periodFields: _periodTypeMap.periodTypeMap.get(this.state.periodType).getPeriodFields(),
                    onChange: this.onPeriodFieldChange,
                    getValue: this.getValueForPeriodFieldType
                }),
                this.state.errorText && _react2.default.createElement(
                    _FormHelperText2.default,
                    {
                        className: this.props.classes.error + '  ' + this.props.classes.helper
                    },
                    this.state.errorText
                ),
                this.props.value && !this.state.errorText && _react2.default.createElement(
                    _FormHelperText2.default,
                    { className: this.props.classes.helper },
                    (0, _parser2.default)(this.props.value).name
                )
            );
        }
    }]);
    return PeriodPicker;
}(_react.PureComponent);

PeriodPicker.propTypes = {
    d2: _propTypes2.default.object.isRequired,
    value: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(PeriodPicker);