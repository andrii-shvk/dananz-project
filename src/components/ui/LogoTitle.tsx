import LogoLeftLine from "../shared/icons/LogoTitle/LogoLeftLine";
import LogoMainLine from "../shared/icons/LogoTitle/LogoMainLine";
import LogoRightLine from "../shared/icons/LogoTitle/LogoRightLine";

const LogoTitle = () => {
  return (
    <div className="relative">
      <h1 className="logoTitle">Dananz</h1>
      <div className="absolute bottom-[6px] left-[54px]">
        <div className='relative'>
          <LogoRightLine className="absolute -bottom-1 right-0" />
          <LogoMainLine />
          <LogoLeftLine className="absolute -bottom-1" />
        </div>
      </div>
    </div>
  );
};

export default LogoTitle;
