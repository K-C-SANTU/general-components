import React from "react";

import { SwitchProps } from "@generic/components/Switch/Switch.types";

import SwitchMui from "@mui/material/Switch";

export const Switch: React.FC<SwitchProps> = (props) => <SwitchMui {...props} />;
