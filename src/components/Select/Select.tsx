import React from "react";

import { SelectProps } from "@generic/components/Select/Select.types";

import SelectMui from "@mui/material/Select";

export const Select: React.FC<SelectProps> = (props) => <SelectMui {...props} />;
