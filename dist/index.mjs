var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/components/Button.tsx
import React from "react";
var Button = (_a) => {
  var _b = _a, { variant = "primary", children } = _b, props = __objRest(_b, ["variant", "children"]);
  const base = "px-4 py-2 rounded-lg font-semibold transition";
  const styles = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-900 hover:bg-gray-300";
  return /* @__PURE__ */ React.createElement("button", __spreadValues({ className: `${base} ${styles}` }, props), children);
};

// src/components/CustomCard.tsx
import React2 from "react";
import { Card, CardContent, Typography, Button as Button2 } from "@mui/material";
var CustomCard = ({
  title,
  description,
  onClick
}) => {
  return /* @__PURE__ */ React2.createElement(Card, { className: "rounded-2xl shadow-lg border border-gray-200" }, /* @__PURE__ */ React2.createElement(CardContent, null, /* @__PURE__ */ React2.createElement(Typography, { variant: "h5", className: "font-bold mb-2" }, title), /* @__PURE__ */ React2.createElement(Typography, { variant: "body2", className: "text-gray-600 mb-4" }, description), /* @__PURE__ */ React2.createElement(
    Button2,
    {
      variant: "contained",
      color: "primary",
      onClick,
      className: "!bg-blue-600 hover:!bg-blue-700"
    },
    "Learn More"
  )));
};
export {
  Button,
  CustomCard
};
