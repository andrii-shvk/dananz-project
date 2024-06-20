import { SVGProps } from "react";

const LogoRightLine = (props: SVGProps<any>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={6}
      height={7}
      fill="none"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1.354 1.5 4.72 6"
      />
    </svg>
  );
};

export default LogoRightLine;
