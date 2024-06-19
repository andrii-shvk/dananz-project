interface INavLinks {
  title: string;
  route: string;
}

export const navLinks: INavLinks[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Services",
    route: "/services",
  },
  {
    title: "Our Teams",
    route: "/ourteam",
  },
];

interface IAboutProjects {
  title: string;
  subtitle: string;
}

export const aboutProjects: IAboutProjects[] = [
  { title: "350+", subtitle: "Project Completed" },
  { title: "23+", subtitle: "Professional Teams" },
  { title: "15+", subtitle: "Years Experience" },
];

interface IProductThemes {
  numberTitle: string;
  title: string;
  arrowRight?: string;
  description?: string;
}

export const serviceItems: IProductThemes[] = [
  { numberTitle: "01", title: "Interior Design" },
  { numberTitle: "02", title: "Consultant" },
  { numberTitle: "03", title: "Construction Consultant" },
];

export const productThemes: IProductThemes[] = [
  {
    numberTitle: "01",
    title: "Vintage",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    numberTitle: "02",
    title: "Minimalist",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    numberTitle: "03",
    title: "Modern",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
  {
    numberTitle: "04",
    title: "Transitional",
    description:
      "the use of simple and limited elements to get the best effect or impression.",
  },
];