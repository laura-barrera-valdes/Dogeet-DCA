/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/screens/dashboard.css":
/*!***********************************!*\
  !*** ./src/screens/dashboard.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* display: flex;\\r\\nflex-direction: row;\\r\\njustify-content: space-between; \\r\\nfont-family: 'Montserrat', sans-serif;\\r\\n*/\\r\\n\\r\\n\\r\\n* {\\r\\n   margin: 0px;\\r\\n   padding: 0px;\\r\\n   font-family: 'Montserrat', sans-serif;/*esta es la tipogrfia de css que corrio el navegador*/\\r\\n}\\r\\n\\r\\n\\r\\n.accept {\\r\\n   width: 1200px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/screens/dashboard.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dogeet-dca/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dogeet-dca/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Chatlist/Chatlist.ts":
/*!*********************************************!*\
  !*** ./src/components/Chatlist/Chatlist.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chatlistAttribute\": () => (/* binding */ chatlistAttribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar chatlistAttribute;\n(function (chatlistAttribute) {\n    chatlistAttribute[\"chatlistimage\"] = \"chatlistimage\";\n    chatlistAttribute[\"chatlistname\"] = \"chatlistname\";\n    chatlistAttribute[\"chatlisttext\"] = \"chatlisttext\";\n    chatlistAttribute[\"chatlistwhen\"] = \"chatlistwhen\";\n})(chatlistAttribute || (chatlistAttribute = {}));\nclass chatlistCard extends HTMLElement {\n    static get observedAttributes() {\n        const chatattrs = {\n            chatlistimage: null,\n            chatlistname: null,\n            chatlisttext: null,\n            chatlistwhen: null,\n        };\n        return Object.keys(chatattrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <section class=\"chatlistCard\">\r\n            <img class=\"chatlistimg\" src=\"${this.chatlistimage}\">\r\n            <h4 class=\"chatlistname\">${this.chatlistname}</h4>\r\n            <p class=\"chatlisttext\">${this.chatlisttext}</p>\r\n            <p class=\"chatlistwhen\">${this.chatlistwhen}</p>\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"chat-list\", chatlistCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chatlistCard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/Chatlist/Chatlist.ts?");

/***/ }),

/***/ "./src/components/Community/Community.ts":
/*!***********************************************!*\
  !*** ./src/components/Community/Community.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"communityAttribute\": () => (/* binding */ communityAttribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar communityAttribute;\n(function (communityAttribute) {\n    communityAttribute[\"communityimage\"] = \"communityimage\";\n    communityAttribute[\"communityname\"] = \"communityname\";\n    communityAttribute[\"communitybreed\"] = \"communitybreed\";\n})(communityAttribute || (communityAttribute = {}));\nclass CommunityCard extends HTMLElement {\n    static get observedAttributes() {\n        const comattrs = {\n            communityimage: null,\n            communityname: null,\n            communitybreed: null,\n        };\n        return Object.keys(comattrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <section class=\"communityCard\">\r\n            <img src=\"${this.communityimage}\">\r\n            <h4 class=\"communityname\">${this.communityname}</h4>\r\n            <p class=\"communitybreed\">${this.communitybreed}</p>\r\n            <button class=\"communitybtn\">2</button>\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"my-community\", CommunityCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunityCard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/Community/Community.ts?");

/***/ }),

/***/ "./src/components/MyProfile/MyProfile.ts":
/*!***********************************************!*\
  !*** ./src/components/MyProfile/MyProfile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"myprofileAttribute\": () => (/* binding */ myprofileAttribute)\n/* harmony export */ });\nvar myprofileAttribute;\n(function (myprofileAttribute) {\n    myprofileAttribute[\"mybackground\"] = \"mybackground\";\n    myprofileAttribute[\"myprofileimage\"] = \"myprofileimage\";\n    myprofileAttribute[\"myname\"] = \"myname\";\n    myprofileAttribute[\"mygender\"] = \"mygender\";\n    myprofileAttribute[\"myage\"] = \"myage\";\n    myprofileAttribute[\"mydescription\"] = \"mydescription\";\n    myprofileAttribute[\"mybreed\"] = \"mybreed\";\n    myprofileAttribute[\"myactivity\"] = \"myactivity\";\n    myprofileAttribute[\"mylocation\"] = \"mylocation\";\n})(myprofileAttribute || (myprofileAttribute = {}));\nclass MyprofileCard extends HTMLElement {\n    static get observedAttributes() {\n        const myattrs = {\n            mybackground: null,\n            myprofileimage: null,\n            myname: null,\n            mygender: null,\n            myage: null,\n            mydescription: null,\n            mybreed: null,\n            myactivity: null,\n            mylocation: null,\n        };\n        return Object.keys(myattrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <section class=\"myprofilecard\">\r\n            <img src=\"${this.mybackground}\">\r\n            <img src=\"${this.myprofileimage}\">\r\n            <article class=\"mygender\">\r\n                <img src=\"./assets/icon/my_profile/gender.png\">\r\n                 <p>${this.mygender}</p>\r\n            </article>\r\n\r\n            <article class=\"myage\">\r\n                <img src=\"./assets/icon/my_profile/age.png\">\r\n                <p>${this.myage}</p>\r\n            </article>\r\n            \r\n            \r\n                <section class=\"myinfo\">\r\n                    <p class=\"mydescription\">${this.mydescription}</p>\r\n\r\n                    <article class=\"mybreed\">\r\n                        <img src=\"./assets/icon/my_profile/breed.png\">\r\n                        <p>${this.mybreed}</p>\r\n                    </article>\r\n\r\n                    <article class=\"myactivity\">\r\n                        <img src=\"./assets/icon/my_profile/activity.png\">\r\n                        <p>${this.myactivity}</p>\r\n                    </article>\r\n\r\n                    <article class=\"mylocation\">\r\n                        <img src=\"./assets/icon/my_profile/location.png\">\r\n                        <p>${this.mylocation}</p>\r\n                    </article>\r\n                </section>\r\n\r\n                <button class=\"editprofile\">Edit Profile</button>\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"myprofile-card\", MyprofileCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyprofileCard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/MyProfile/MyProfile.ts?");

/***/ }),

/***/ "./src/components/Navbar/Navbar.ts":
/*!*****************************************!*\
  !*** ./src/components/Navbar/Navbar.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"navbarAttribute\": () => (/* binding */ navbarAttribute)\n/* harmony export */ });\nvar navbarAttribute;\n(function (navbarAttribute) {\n    navbarAttribute[\"navbarlogo\"] = \"navbarlogo\";\n    navbarAttribute[\"navbarhome\"] = \"navbarhome\";\n    navbarAttribute[\"navbarcommunity\"] = \"navbarcommunity\";\n    navbarAttribute[\"navbarchat\"] = \"navbarchat\";\n    navbarAttribute[\"navbarnotifications\"] = \"navbarnotifications\";\n    navbarAttribute[\"navbarnameprofile\"] = \"navbarnameprofile\";\n    navbarAttribute[\"navbarprofile\"] = \"navbarprofile\";\n})(navbarAttribute || (navbarAttribute = {}));\nclass NavbarCard extends HTMLElement {\n    static get observedAttributes() {\n        const navattrs = {\n            navbarlogo: null,\n            navbarhome: null,\n            navbarcommunity: null,\n            navbarchat: null,\n            navbarnotifications: null,\n            navbarnameprofile: null,\n            navbarprofile: null,\n        };\n        return Object.keys(navattrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        this[propName] = newValue;\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <section class=\"communityCard\">\r\n            <img src=\"${this.navbarlogo}\">\r\n                <section class=\"menu\">\r\n                    <img src=\"${this.navbarhome}\">\r\n                    <img src=\"${this.navbarcommunity}\">\r\n                    <img src=\"${this.navbarchat}\">\r\n                </section>\r\n                <section class=\"navprofile\">\r\n                    <img src=\"${this.navbarnotifications}\">\r\n                    <p>${this.navbarnameprofile}</p>\r\n                    <img src=\"${this.navbarprofile}\">\r\n                </section>\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"nav-bar\", NavbarCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavbarCard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/Navbar/Navbar.ts?");

/***/ }),

/***/ "./src/components/Profile/Profile.ts":
/*!*******************************************!*\
  !*** ./src/components/Profile/Profile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"profileAttribute\": () => (/* binding */ profileAttribute)\n/* harmony export */ });\nvar profileAttribute;\n(function (profileAttribute) {\n    profileAttribute[\"profileimage\"] = \"profileimage\";\n    profileAttribute[\"name\"] = \"name\";\n    profileAttribute[\"icon\"] = \"icon\";\n    profileAttribute[\"gender\"] = \"gender\";\n    profileAttribute[\"breed\"] = \"breed\";\n    profileAttribute[\"age\"] = \"age\";\n    profileAttribute[\"activity\"] = \"activity\";\n    profileAttribute[\"location\"] = \"location\";\n})(profileAttribute || (profileAttribute = {}));\nclass ProfileCard extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            profileimage: null,\n            name: null,\n            icon: null,\n            gender: null,\n            breed: null,\n            age: null,\n            activity: null,\n            location: null,\n        };\n        return Object.keys(attrs);\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        // switch (propName) {\n        //     case profileAttribute.age:\n        //     this.age = newValue ? Number(newValue) : undefined;\n        //     break;\n        //     default:\n        this[propName] = newValue;\n        //     break;\n        // }\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        <img class=\"accept\" src=\"./assets/icon/profile/accept_profile.png\">\r\n        <img class=\"delete\" src=\"./assets/icon/profile/delete_profile.png\">\r\n        <section class=\"fullcard\">\r\n        \r\n            <article class=\"left\">\r\n                <img src= \"${this.profileimage}\">\r\n            </article>\r\n            <article class=\"right\">\r\n                <section class= \"nametitle\">\r\n                    <h3 class=\"name\">${this.name}</h3>\r\n                </section>\r\n                <section class= \"info\">\r\n                    <section class=\"pairs1\">\r\n                        <article class=\"icontext1\">\r\n                            <img src= \"./assets/icon/profile/gender.png\">\r\n                            <p>${this.gender}</p>\r\n                        </article>\r\n                        <article class=\"icontext2\">\r\n                            <img src= \"./assets/icon/profile/breed.png\">\r\n                            <p>${this.breed}</p>\r\n                        </article>\r\n                    </section>\r\n                    <section class=\"pairs2\">\r\n                        <article class=\"icontext3\">\r\n                            <img src= \"./assets/icon/profile/age.png\">\r\n                            <p>${this.age}</p>\r\n                        </article>\r\n                        <article class=\"icontext4\">\r\n                            <img src= \"./assets/icon/profile/activity.png\">\r\n                            <p>${this.activity}</p>\r\n                        </article>\r\n                    </section>\r\n                        <article class=\"icontext5\">\r\n                            <img src= \"./assets/icon/profile/location.png\">\r\n                            <p>${this.location}</p>\r\n                        </article>\r\n                </section>\r\n            </article>\r\n        </section>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"profile-card\", ProfileCard);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileCard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/Profile/Profile.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Profile_Profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile/Profile */ \"./src/components/Profile/Profile.ts\");\n/* harmony import */ var _Community_Community__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Community/Community */ \"./src/components/Community/Community.ts\");\n/* harmony import */ var _Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/Chatlist */ \"./src/components/Chatlist/Chatlist.ts\");\n/* harmony import */ var _MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyProfile/MyProfile */ \"./src/components/MyProfile/MyProfile.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dogeet-dca/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.css */ \"./src/screens/dashboard.css\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getData */ \"./src/services/getData.ts\");\n/* harmony import */ var _components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Profile/Profile */ \"./src/components/Profile/Profile.ts\");\n/* harmony import */ var _components_Community_Community__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Community/Community */ \"./src/components/Community/Community.ts\");\n/* harmony import */ var _components_Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Chatlist/Chatlist */ \"./src/components/Chatlist/Chatlist.ts\");\n/* harmony import */ var _components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyProfile/MyProfile */ \"./src/components/MyProfile/MyProfile.ts\");\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar/Navbar */ \"./src/components/Navbar/Navbar.ts\");\n\n\n\n\n\n\n\n\nconsole.log(_dashboard_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.profiles = [];\n        this.friends = [];\n        this.chats = [];\n        this.myprofiles = [];\n        this.navbars = [];\n        this.attachShadow({ mode: \"open\" });\n        _services_getData__WEBPACK_IMPORTED_MODULE_2__.dataProfile.forEach((user) => {\n            const profileContainer = this.ownerDocument.createElement(\"profile-card\");\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.profileimage, user.profileimage);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.name, user.name);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.gender, user.gender);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.breed, user.breed);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.age, user.age);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.activity, user.activity);\n            profileContainer.setAttribute(_components_Profile_Profile__WEBPACK_IMPORTED_MODULE_3__.profileAttribute.location, user.location);\n            this.profiles.push(profileContainer);\n        });\n        _services_getData__WEBPACK_IMPORTED_MODULE_2__.dataCommunity.forEach((friend) => {\n            const communityContainer = this.ownerDocument.createElement(\"my-community\");\n            communityContainer.setAttribute(_components_Community_Community__WEBPACK_IMPORTED_MODULE_4__.communityAttribute.communityimage, friend.communityimage);\n            communityContainer.setAttribute(_components_Community_Community__WEBPACK_IMPORTED_MODULE_4__.communityAttribute.communityname, friend.communityname);\n            communityContainer.setAttribute(_components_Community_Community__WEBPACK_IMPORTED_MODULE_4__.communityAttribute.communitybreed, friend.commmunitybreed);\n            this.friends.push(communityContainer);\n        });\n        _services_getData__WEBPACK_IMPORTED_MODULE_2__.dataChatlist.forEach((chat) => {\n            const chatlistContainer = this.ownerDocument.createElement(\"chat-list\");\n            chatlistContainer.setAttribute(_components_Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_5__.chatlistAttribute.chatlistimage, chat.chatlistimage);\n            chatlistContainer.setAttribute(_components_Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_5__.chatlistAttribute.chatlistname, chat.chatlistname);\n            chatlistContainer.setAttribute(_components_Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_5__.chatlistAttribute.chatlisttext, chat.chatlisttext);\n            chatlistContainer.setAttribute(_components_Chatlist_Chatlist__WEBPACK_IMPORTED_MODULE_5__.chatlistAttribute.chatlistwhen, chat.chatlistwhen);\n            this.chats.push(chatlistContainer);\n        });\n        _services_getData__WEBPACK_IMPORTED_MODULE_2__.dataMyprofile.forEach((me) => {\n            const myprofileContainer = this.ownerDocument.createElement(\"myprofile-card\");\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.mybackground, me.mybackground);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.myprofileimage, me.myprofileimage);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.myname, me.myname);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.mygender, me.mygender);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.mybreed, me.mybreed);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.myage, me.myage);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.mydescription, me.mydescription);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.myactivity, me.myactivity);\n            myprofileContainer.setAttribute(_components_MyProfile_MyProfile__WEBPACK_IMPORTED_MODULE_6__.myprofileAttribute.mylocation, me.mylocation);\n            this.myprofiles.push(myprofileContainer);\n        });\n        _services_getData__WEBPACK_IMPORTED_MODULE_2__.dataNavbar.forEach((nav) => {\n            const navbarContainer = this.ownerDocument.createElement(\"nav-bar\");\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarlogo, nav.navbarlogo);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarhome, nav.navbarhome);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarcommunity, nav.navbarcommunity);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarchat, nav.navbarchat);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarnotifications, nav.navbarnotifications);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarnameprofile, nav.navbarnameprofile);\n            navbarContainer.setAttribute(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_7__.navbarAttribute.navbarprofile, nav.navbarprofile);\n            this.navbars.push(navbarContainer);\n        });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <style>${_dashboard_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}</style>\r\n            `;\n            this.profiles.forEach((profile) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);\n            });\n            this.friends.forEach((friend) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(friend);\n            });\n            this.chats.forEach((chat) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(chat);\n            });\n            this.myprofiles.forEach((me) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(me);\n            });\n            this.navbars.forEach((nav) => {\n                var _a;\n                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(nav);\n            });\n        }\n    }\n}\ncustomElements.define(\"app-dashboard\", Dashboard);\n\n\n//# sourceURL=webpack://dogeet-dca/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getData.ts":
/*!*********************************!*\
  !*** ./src/services/getData.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataChatlist\": () => (/* binding */ dataChatlist),\n/* harmony export */   \"dataCommunity\": () => (/* binding */ dataCommunity),\n/* harmony export */   \"dataMyprofile\": () => (/* binding */ dataMyprofile),\n/* harmony export */   \"dataNavbar\": () => (/* binding */ dataNavbar),\n/* harmony export */   \"dataProfile\": () => (/* binding */ dataProfile)\n/* harmony export */ });\nconst dataProfile = [\n    {\n        id: 1,\n        profileimage: \"./assets/image/profile/Pepito.png\",\n        name: \"Pepito\",\n        gender: \"male\",\n        breed: \"teckel\",\n        age: \"2 years\",\n        activity: \"Love to play in the park\",\n        location: \"Cali, Colombia\"\n    },\n    {\n        id: 2,\n        profileimage: \"./assets/image/profile/Almendra.png\",\n        name: \"Almendra\",\n        gender: \"female\",\n        breed: \"Husky\",\n        age: \"4 years\",\n        activity: \"Loves to chill\",\n        location: \"Cali, Colombia\"\n    },\n    {\n        id: 3,\n        profileimage: \"./assets/image/profile/Josefo.png\",\n        name: \"Josefo\",\n        gender: \"male\",\n        breed: \"Pug\",\n        age: \"1 years\",\n        activity: \"Loves to play with water\",\n        location: \"Cali, Colombia\"\n    },\n];\nconst dataCommunity = [\n    {\n        communityimage: \"./assets/image/my_community/Bluey.png\",\n        communityname: \"Bluey\",\n        commmunitybreed: \"German Shepherd\",\n    },\n    {\n        communityimage: \"./assets/image/my_community/Bruno.png\",\n        communityname: \"Bruno\",\n        commmunitybreed: \"Husky\",\n    },\n    {\n        communityimage: \"./assets/image/my_community/Kathia.png\",\n        communityname: \"Kathia\",\n        commmunitybreed: \"Chihuahua\",\n    },\n];\nconst dataChatlist = [\n    {\n        chatlistimage: \"./assets/image/chat_img/Luna.png\",\n        chatlistname: \"Luna\",\n        chatlisttext: \"Yes, of course\",\n        chatlistwhen: \"Today\",\n    },\n    {\n        chatlistimage: \"./assets/image/chat_img/Tobbby.png\",\n        chatlistname: \"Tobby\",\n        chatlisttext: \"I'd like to...\",\n        chatlistwhen: \"Yesterday\",\n    },\n    {\n        chatlistimage: \"./assets/image/chat_img/Lorenzo.png\",\n        chatlistname: \"Lorenzo\",\n        chatlisttext: \"See you!\",\n        chatlistwhen: \"Yesterday\",\n    },\n    {\n        chatlistimage: \"./assets/image/chat_img/Sofia.png\",\n        chatlistname: \"Sofia\",\n        chatlisttext: \"She loves to play\",\n        chatlistwhen: \"Friday\",\n    },\n];\nconst dataMyprofile = [\n    {\n        mybackground: \"./assets/image/my_profile/background.png\",\n        myprofileimage: \"./assets/image/my_profile/Kathia.png\",\n        myname: \"Kathia\",\n        mygender: \"Female\",\n        myage: \"2 years\",\n        mydescription: \"Hi! i’m Kathia, i’m a coquer spaniel little dog and i’m looking for another dog friend to play in afternoons\",\n        mybreed: \"Coquer Spaniel\",\n        myactivity: \"Play with ball\",\n        mylocation: \"Cali, Colombia - Pampalinda\",\n    },\n];\nconst dataNavbar = [\n    {\n        navbarlogo: \"./assets/logo/Dogeet.png\",\n        navbarhome: \"./assets/icon/nav/on/home_on.png\",\n        navbarcommunity: \"./assets/icon/nav/off/my_community_off.png\",\n        navbarchat: \"./assets/icon/nav/off/chats_off.png\",\n        navbarnotifications: \"./assets/icon/nav/bell.png\",\n        navbarnameprofile: \"Kathia\",\n        navbarprofile: \"./assets/image/my_profile/Kathia.png\",\n    }\n];\n\n\n//# sourceURL=webpack://dogeet-dca/./src/services/getData.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;