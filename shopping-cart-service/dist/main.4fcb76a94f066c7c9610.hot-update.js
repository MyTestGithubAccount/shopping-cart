exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/routes/index.ts\"));\r\ndotenv.config();\r\nif (!process.env.PORT) {\r\n    process.exit(1);\r\n}\r\nvar PORT = parseInt(process.env.PORT, 10);\r\nvar app = express_1.default();\r\napp.use(helmet_1.default());\r\napp.use(cors_1.default());\r\napp.use(express_1.default.json());\r\napp.use(\"/\", routes_1.default);\r\nvar server = app.listen(PORT, function () {\r\n    console.log(\"Listening on port \" + PORT);\r\n});\r\nif (true) {\r\n    module.hot.accept();\r\n    module.hot.dispose(function () { return server.close(); });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ })

};