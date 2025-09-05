import React from "react";

import { CheckboxProps } from "@generic/components/Checkbox/Checkbox.types";

import CheckboxMui from "@mui/material/Checkbox";

export const Checkbox: React.FC<CheckboxProps> = (props) => <CheckboxMui {...props} />;
