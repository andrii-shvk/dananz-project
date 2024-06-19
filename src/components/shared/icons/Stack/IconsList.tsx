import * as ICONS from "./index";

const IconsList = () => {
  if (!ICONS) return null;
  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

  return (
    <div>
      {/* {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];
        return (
          <Icon
            key={i}
            className="dark:text-text-dark h-12 w-12 max-lg:h-[38px] max-lg:w-[38px]"
          />
        )
      })} */}
    </div>
  );
};

export default IconsList;
