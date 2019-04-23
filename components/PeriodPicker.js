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

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _styles = require('@material-ui/core/styles');

var _parser = require('d2/period/parser');

var _parser2 = _interopRequireDefault(_parser);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkForUnsupportedPeriodTypes = require('../periodTypes/checkForUnsupportedPeriodTypes');

var _checkForUnsupportedPeriodTypes2 = _interopRequireDefault(_checkForUnsupportedPeriodTypes);

var _distinctTypes = require('../periodTypes/distinctTypes');

var _lookup = require('../periodTypes/lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Loader = require('./Loader');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
    return {
        label: {
            fontSize: '1.2rem',
            fontWeight: '300',
            color: 'rgba(0, 0, 0, 0.87)',
            padding: '16px 8px 0px',
            margin: '0px',
            flex: '1 0 120px'
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
            isLoading: true,
            periodType: '',
            errorText: ''
        }, (0, _defineProperty3.default)(_this$state, _distinctTypes.DAY, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.WEEK, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.BI_WEEK, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.BI_MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.QUARTER, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.SIX_MONTH, ''), (0, _defineProperty3.default)(_this$state, _distinctTypes.YEAR, ''), _this$state), _this.api = _this.props.d2.Api.getApi(), _this.onChange = function (_ref2) {
            var _this$setState2;

            var target = _ref2.target;

            _this.setState((0, _defineProperty3.default)({}, target.name, target.value));
            var errorText = _this.state.errorText;
            var futureState = (0, _extends4.default)({}, _this.state, (0, _defineProperty3.default)({}, target.name, target.value));
            var periodType = _lookup2.default.get(futureState.periodType);

            if (periodType.hasRequiredValues(futureState)) {
                errorText = periodType.getError(futureState);

                if (!errorText) {
                    var periodId = periodType.getPeriodId(futureState);

                    try {
                        var period = (0, _parser2.default)(periodId);
                        // All is well: proceed
                        errorText = '';
                        _this.props.onChange(period.id);
                    } catch (error) {
                        errorText = error.message;
                    }
                }
            }

            _this.setState((_this$setState2 = {}, (0, _defineProperty3.default)(_this$setState2, target.name, target.value), (0, _defineProperty3.default)(_this$setState2, 'errorText', errorText), _this$setState2));
        }, _this.getValueForPeriodFieldType = function (type) {
            return _this.state[type];
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PeriodPicker, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var errorText;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (periodTypes) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.prev = 1;
                                _context.next = 4;
                                return this.fetchPeriodTypes();

                            case 4:
                                this.updateStateFromPeriodId();
                                _context.next = 12;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](1);

                                console.error(_context.t0);
                                errorText = _d2I18n2.default.t('Could not load period types');

                                this.setState({ errorText: errorText, isLoading: false });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[1, 7]]);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.value !== prevProps.value) {
                this.updateStateFromPeriodId();
            }
        }
    }, {
        key: 'fetchPeriodTypes',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var response;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.api.get('periodTypes');

                            case 2:
                                response = _context2.sent;

                                periodTypes = response.periodTypes.reduce(function (acc, _ref5) {
                                    var name = _ref5.name;

                                    var supportedPeriod = _lookup2.default.get(name);
                                    if (supportedPeriod) {
                                        acc[name] = supportedPeriod.label;
                                    }
                                    return acc;
                                }, {});
                                (0, _checkForUnsupportedPeriodTypes2.default)(response.periodTypes);

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function fetchPeriodTypes() {
                return _ref4.apply(this, arguments);
            }

            return fetchPeriodTypes;
        }()
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
                    periodFieldsUpdateObject = _lookup2.default.get(periodType).createPeriodFieldUpdater(period.id, period.startDate);
                } catch (error) {
                    // This should only be triggered when an invalid value is set via props
                    console.error(error);
                    errorText = error.message;
                }
            }
            this.setState((0, _extends4.default)({
                periodType: periodType,
                errorText: errorText,
                isLoading: false
            }, periodFieldsUpdateObject));
        }
    }, {
        key: 'renderFormFields',
        value: function renderFormFields() {
            return;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react.Fragment,
                null,
                this.props.label && _react2.default.createElement(
                    'h4',
                    { className: this.props.classes.label },
                    this.props.label
                ),
                this.state.isLoading ? _react2.default.createElement(_Loader2.default, null) : _react2.default.createElement(_Form2.default, {
                    periodTypes: periodTypes,
                    periodType: this.state.periodType,
                    onChange: this.onChange,
                    getFieldValue: this.getValueForPeriodFieldType,
                    errorText: this.state.errorText,
                    value: this.props.value
                })
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