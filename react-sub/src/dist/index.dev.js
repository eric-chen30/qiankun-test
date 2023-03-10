"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;
exports.mount = mount;
exports.unmount = unmount;

require("./public-path");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// function render(props) {
//   const { container } = props;
//   ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
// }
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function bootstrap() {
  return regeneratorRuntime.async(function bootstrap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('[react16] react app bootstraped');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function mount(props) {
  return regeneratorRuntime.async(function mount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('[react16] props from main framework', props);
          render(props);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function unmount(props) {
  var container;
  return regeneratorRuntime.async(function unmount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          container = props.container;

          _reactDom["default"].unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
} // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


(0, _reportWebVitals["default"])();