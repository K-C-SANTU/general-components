"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  CustomCard: () => CustomCard
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));
var Button = (_a) => {
  var _b = _a, { variant = "primary", children } = _b, props = __objRest(_b, ["variant", "children"]);
  const base = "px-4 py-2 rounded-lg font-semibold transition";
  const styles = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300";
  return /* @__PURE__ */ import_react.default.createElement("button", __spreadValues({ className: `${base} ${styles}` }, props), children);
};

// src/components/CustomCard.tsx
var import_react2 = __toESM(require("react"));
var import_material = require("@mui/material");
var CustomCard = ({
  title,
  description,
  onClick
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(import_material.Card, { className: "rounded-2xl shadow-lg border border-gray-200" }, /* @__PURE__ */ import_react2.default.createElement(import_material.CardContent, null, /* @__PURE__ */ import_react2.default.createElement(import_material.Typography, { variant: "h5", className: "font-bold mb-2" }, title), /* @__PURE__ */ import_react2.default.createElement(import_material.Typography, { variant: "body2", className: "text-gray-600 mb-4" }, description), /* @__PURE__ */ import_react2.default.createElement(
    import_material.Button,
    {
      variant: "contained",
      color: "primary",
      onClick,
      className: "!bg-blue-600 hover:!bg-blue-700"
    },
    "Learn More"
  )));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  CustomCard
});
