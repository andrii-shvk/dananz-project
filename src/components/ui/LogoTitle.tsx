import LogoLeftLine from "../shared/icons/LogoTitle/LogoLeftLine";
import LogoMainLine from "../shared/icons/LogoTitle/LogoMainLine";
import LogoRightLine from "../shared/icons/LogoTitle/LogoRightLine";

interface LogoProps {
  className?: string;
}

const LogoTitle = ({ className = "" }: LogoProps) => {
  return (
    <div className="relative">
      <h1 className="logoTitle">Dananz</h1>
      <div className="absolute bottom-[6px] left-[54px]">
        <div className={`relative ${className}`}>
          <LogoRightLine className="absolute -bottom-1 right-0" />
          <LogoMainLine />
          <LogoLeftLine className="absolute -bottom-1" />
        </div>
      </div>
    </div>
  );
};

export default LogoTitle;
