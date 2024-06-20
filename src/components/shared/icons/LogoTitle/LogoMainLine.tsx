import { SVGProps } from "react";

const LogoMainLine = (props: SVGProps<any>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={46} height={15} fill="none" {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1.615 1v12.5H45V1"
      />
    </svg>
  );
};

export default LogoMainLine;
