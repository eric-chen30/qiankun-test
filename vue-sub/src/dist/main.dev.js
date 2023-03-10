"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;
exports.mount = mount;
exports.unmount = unmount;

require("./public-path");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;
var instance = null;

function render() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var container = props.container,
      routerBase = props.routerBase;
  var router = new _vueRouter["default"]({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes: _router["default"]
  });
  instance = new _vue["default"]({
    router: router,
    render: function render(h) {
      return h(_App["default"]);
    }
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function bootstrap() {
  return regeneratorRuntime.async(function bootstrap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('[vue] vue app bootstraped');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
} // 子应用挂载后，可通过 props 获取主应用传递的数据


function mount(props) {
  return regeneratorRuntime.async(function mount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('[vue] props from main framework', props);
          render(props);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function unmount() {
  return regeneratorRuntime.async(function unmount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          instance.$destroy();
          instance.$el.innerHTML = '';
          instance = null;

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}