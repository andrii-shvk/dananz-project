import clsx from "clsx";
import { ReactNode } from "react";

type VariantBtn = "blue" | "white";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: VariantBtn;
  onClick?: () => void;
  active?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant = "blue",
    onClick,
    active = false,
  } = props;

  return (
    <button
      className={clsx(
        className,
        {
          blue: "btn bg-bgBlue text-white hover:bg-opacity-90 active:bg-btnBlueActive",
          white:
            "btn bg-btnWhite text-text-primary hover:bg-btnWhiteHover hover:text-white active:bg-btnWhiteActive",
        }[variant],
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
