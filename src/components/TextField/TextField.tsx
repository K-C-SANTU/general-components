import React from "react";

import { TextFieldProps } from "@generic/components/TextField/TextField.types";

import TextFieldMui from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = (props) => <TextFieldMui {...props} />;
