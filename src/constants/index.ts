import InteriorDesignImg from "@/assets/img/services/InteriorDesign.jpg";
import ConsultantImg from "@/assets/img/services/Consultant.jpg";
import Construction from "@/assets/img/services/Construction.jpg";
import { StaticImageData } from "next/image";

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

interface IChooseUs {
  title: string;
  subtitle: string;
}

export const chooseUsItems: IChooseUs[] = [
  {
    title: "High Quality",
    subtitle:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    title: "Professional Designer",
    subtitle:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    title: "The Best Services",
    subtitle:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
];

interface IAchievementList {
  Image: string | StaticImageData;
  title: string;
  description?: string;
}

export const achievementList: IAchievementList[] = [
  {
    Image: InteriorDesignImg,
    title: "Interior design",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    Image: ConsultantImg,
    title: "Consultant",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
  {
    Image: Construction,
    title: "Construction consultant",
    description:
      "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
  },
];
