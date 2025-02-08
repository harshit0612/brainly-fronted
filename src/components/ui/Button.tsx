import { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?: boolean;
    loading?: boolean
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-500"
}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-1.5 px-3",
    "lg": "py-2 px-4"
}

const defaultStyle = "rounded-xl flex m-1 font-extralight justify-center items-centerr cursor-pointer";

export const Button = (props: ButtonProps) => {
    return(
       <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyle} ${props.fullWidth ? " w-full" : "" } ${props.loading ? "disabled opacity-50" : ""}` } disabled={props.loading}>
        <div className="flex items-center">
            {props.startIcon ? <div className="pr-1.5">{props.startIcon}</div> : null }   {props.text} {props.endIcon}
        </div>
        </button>
    )
} 
