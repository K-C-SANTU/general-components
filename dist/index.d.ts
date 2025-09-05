import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
}
declare const Button: React.FC<ButtonProps>;

interface CustomCardProps {
    title: string;
    description: string;
    onClick?: () => void;
}
declare const CustomCard: React.FC<CustomCardProps>;

export { Button, type ButtonProps, CustomCard, type CustomCardProps };
