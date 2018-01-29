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
  }, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
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
}, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js', __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  }
}), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome', __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  }
}), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2R5bmFtaWMuanMiXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsIlBvc3RMaW5rIiwicHJvcHMiLCJpZCIsInRpdGxlIiwiQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBQyxPQUFEO3lCQUNmLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxZQUFVLE1BQWhCLEFBQXNCLElBQU0sdUJBQXFCLE1BQWpELEFBQXVEO2dCQUF2RDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FIVyxBQUNmLEFBQ0UsQUFDRSxBQUFVO0FBSGhCOztBQVFBLElBQU0sMEJBQ0osY0FBQTs7Y0FBQTtnQkFBQSxBQUNFO0FBREY7QUFBQSxDQUFBLGtCQUNFLGNBQUE7O2NBQUE7Z0JBQUE7QUFBQTtBQUFBLEdBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7O2NBQUE7Z0JBQUEsQUFDRTtBQURGO0FBQUEsaUNBQ0UsQUFBQyxZQUFTLElBQVYsQUFBYSxnQkFBZSxPQUE1QixBQUFrQztjQUFsQztnQkFERixBQUNFLEFBQ0E7QUFEQTtrQ0FDQSxBQUFDLFlBQVMsSUFBVixBQUFhLGdCQUFlLE9BQTVCLEFBQWtDO2NBQWxDO2dCQUZGLEFBRUUsQUFDQTtBQURBO2tDQUNBLEFBQUMsWUFBUyxJQUFWLEFBQWEsaUJBQWdCLE9BQTdCLEFBQW1DO2NBQW5DO2dCQU5OLEFBQ0UsQUFFRSxBQUdFLEFBS047QUFMTTs7O2tCQUtTLFlBQUE7eUJBQU0sQUFBQyxrQ0FBTyxTQUFSLEFBQWlCO2dCQUFqQjtrQkFBTixBQUFNO0FBQUE7R0FBQTtBQUFyQiIsImZpbGUiOiJkeW5hbWljLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYWMvRGVza3RvcC9sZWFybi1uZXh0In0=