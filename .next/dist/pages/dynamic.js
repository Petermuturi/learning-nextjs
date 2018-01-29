'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/mac/Desktop/learn-next/pages/dynamic.js?entry';


var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: '/post?title=' + props.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.title)));
};

var Content = _react2.default.createElement('div', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  }
}, _react2.default.createElement('h1', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
}, 'My Blog'), _react2.default.createElement('ul', {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  }
}, _react2.default.createElement(PostLink, { title: 'Hello Next.js', __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}), _react2.default.createElement(PostLink, { title: 'Learn Next.js is awesome', __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}), _react2.default.createElement(PostLink, { title: 'Deploy apps with Zeit', __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  }
})));

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { content: Content, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R5bmFtaWMuanMiXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsIlBvc3RMaW5rIiwicHJvcHMiLCJ0aXRsZSIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQUMsT0FBRDt5QkFDZixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssdUJBQXFCLE1BQTNCLEFBQWlDO2dCQUFqQztrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FIVyxBQUNmLEFBQ0UsQUFDRSxBQUFVO0FBSGhCOztBQVFBLElBQU0sMEJBQ0osY0FBQTs7Y0FBQTtnQkFBQSxBQUNFO0FBREY7QUFBQSxDQUFBLGtCQUNFLGNBQUE7O2NBQUE7Z0JBQUE7QUFBQTtBQUFBLEdBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7O2NBQUE7Z0JBQUEsQUFDRTtBQURGO0FBQUEsaUNBQ0UsQUFBQyxZQUFTLE9BQVYsQUFBZ0I7Y0FBaEI7Z0JBREYsQUFDRSxBQUNBO0FBREE7a0NBQ0EsQUFBQyxZQUFTLE9BQVYsQUFBZ0I7Y0FBaEI7Z0JBRkYsQUFFRSxBQUNBO0FBREE7a0NBQ0EsQUFBQyxZQUFTLE9BQVYsQUFBZ0I7Y0FBaEI7Z0JBTk4sQUFDRSxBQUVFLEFBR0UsQUFLTjtBQUxNOzs7a0JBS1MsWUFBQTt5QkFBTSxBQUFDLGtDQUFPLFNBQVIsQUFBaUI7Z0JBQWpCO2tCQUFOLEFBQU07QUFBQTtHQUFBO0FBQXJCIiwiZmlsZSI6ImR5bmFtaWMuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hYy9EZXNrdG9wL2xlYXJuLW5leHQifQ==