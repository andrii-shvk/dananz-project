import * as ICONS from "./index";

const IconsList = () => {
  if (!ICONS) return null;
  const iconsNames = Object.keys(ICONS) as Array<keyof typeof ICONS>;

  return (
    <div className="flex gap-8">
      {iconsNames.map((iconName, i) => {
        const Icon = ICONS[iconName];
        return <Icon key={i} />;
      })}
    </div>
  );
};

export default IconsList;
