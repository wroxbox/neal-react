"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Testimonial = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _bootstrap = require("../helpers/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Testimonial = exports.Testimonial = function (_React$Component) {
    _inherits(Testimonial, _React$Component);

    function Testimonial() {
        _classCallCheck(this, Testimonial);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Testimonial).apply(this, arguments));
    }

    _createClass(Testimonial, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                Testimonial,
                { className: "testimonial test" },
                _react2.default.createElement(
                    _bootstrap.Container,
                    null,
                    _react2.default.createElement(
                        _bootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _bootstrap.Col,
                            { size: ["xs-12", "md-12"] },
                            this.renderSocialIcons(),
                            _react2.default.createElement(
                                "p",
                                null,
                                "AjaxCall"
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: "renderSocialIcons",
        value: function renderSocialIcons() {
            return _react2.default.createElement(
                "ul",
                { className: "nav navbar-nav neal-footer-social pull-right" },
                this.renderSocialIcon("fa-twitter", this.props.twitterUrl),
                this.renderSocialIcon("fa-facebook", this.props.facebookUrl),
                this.renderSocialIcon("fa-github", this.props.githubUrl)
            );
        }
    }, {
        key: "renderSocialIcon",
        value: function renderSocialIcon(iconClass, url) {
            if (!url || !iconClass) {
                return null;
            }
            return _react2.default.createElement(
                "li",
                { className: "nav-item neal-footer-social-icon " + iconClass.replace("fa-", "") },
                _react2.default.createElement(
                    "a",
                    { href: url, target: "_blank" },
                    _react2.default.createElement(
                        "span",
                        { className: "fa-stack" },
                        _react2.default.createElement("i", { className: "fa fa-circle fa-stack-2x" }),
                        _react2.default.createElement("i", { className: "fa " + iconClass + " fa-stack-1x fa-inverse" })
                    )
                )
            );
        }
    }]);

    return Testimonial;
}(_react2.default.Component);

Testimonial.propTypes = {
    facebookUrl: _react2.default.PropTypes.string,
    twitterUrl: _react2.default.PropTypes.string,
    githubUrl: _react2.default.PropTypes.string,
    email: _react2.default.PropTypes.node,
    address: _react2.default.PropTypes.node
};