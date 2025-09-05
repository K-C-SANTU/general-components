import React from "react";

import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
    children: React.ReactNode;
}
