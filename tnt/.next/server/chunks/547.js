exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 7151:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__ubBbX",
	"menu-spacing": "Header_menu-spacing__ivWQP",
	"sideItems": "Header_sideItems__fqPDd",
	"nav": "Header_nav__7eR_W",
	"menu": "Header_menu__a3Ygk",
	"menuItems": "Header_menuItems___hczp"
};


/***/ }),

/***/ 2547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/Header.module.scss
var Header_module = __webpack_require__(7151);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mdi/react"
var react_ = __webpack_require__(7796);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: external "@mdi/js"
var js_ = __webpack_require__(2853);
;// CONCATENATED MODULE: ./components/header.js








function Header(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Tnt e-commerce"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "No 1 e-commerce website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `${(Header_module_default()).header} container`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).logoContainer
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: (Header_module_default()).nav,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: (Header_module_default()).menu,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).menuItems,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).menuItems,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about-us",
                                        children: "About us"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).menuItems,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/service",
                                        children: "Service"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Header_module_default()).menuItems,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contact",
                                        children: "Contact"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).sideItems,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: (Header_module_default()).menuItems,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/login",
                                    children: "Login"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                className: "btn btn-large btn-black",
                                children: [
                                    "Shop Now  ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((react_default()), {
                                        className: "icon",
                                        path: js_.mdiArrowRight
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./components/footer.js


function Footer(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {});
}
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: ./layouts/layouts.js




function Layouts({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
}
/* harmony default export */ const layouts = (Layouts);


/***/ })

};
;