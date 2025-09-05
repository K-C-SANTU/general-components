import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export interface CustomCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  onClick,
}) => {
  return (
    <Card className="rounded-2xl shadow-lg border border-gray-200">
      <CardContent>
        <Typography variant="h5" className="font-bold mb-2">
          {title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 mb-4">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onClick}
          className="!bg-blue-600 hover:!bg-blue-700"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};
