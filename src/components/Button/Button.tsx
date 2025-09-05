import React from "react";

import { ButtonProps } from "@generic/components/Button/Button.types";

import ButtonMui from "@mui/material/Button";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <ButtonMui {...props}>{children}</ButtonMui>
);

export default Button;
