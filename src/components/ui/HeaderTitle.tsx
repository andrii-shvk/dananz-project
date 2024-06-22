interface IHeaderTitle {
  title: string;
  subtitle: string;
  aboutWidth?: boolean;
}

const HeaderTitle = (props: IHeaderTitle) => {
  const { title, subtitle, aboutWidth } = props;
  return (
    <div className={`mx-auto flex ${aboutWidth ? 'w-[580px]' : 'w-[520px]'} flex-col items-center gap-9 text-center`}>
      <h1 className="text-[56px] font-bold">{title}</h1>
      <p className="text-lg">{subtitle}</p>
    </div>
  );
};

export default HeaderTitle;
