import React from "react";

import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
    children: React.ReactNode;
}
