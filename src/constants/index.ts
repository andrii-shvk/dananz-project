import { StaticImageData } from "next/image";
import InteriorDesignImg from "@/assets/img/services/Achievement/InteriorDesign.jpg";
import ConsultantImg from "@/assets/img/services/Achievement/Consultant.jpg";
import Construction from "@/assets/img/services/Achievement/Construction.jpg";
import ImgOne from "@/assets/img/ourteams/CreativePerson/ImgOne.jpg";
import ImgTwo from "@/assets/img/ourteams/CreativePerson/ImgTwo.jpg";
import ImgThree from "@/assets/img/ourteams/CreativePerson/ImgThree.jpg";
import ImgFour from "@/assets/img/ourteams/CreativePerson/ImgFour.jpg";
import ImgFive from "@/assets/img/ourteams/CreativePerson/ImgFive.jpg";
import ImgSix from "@/assets/img/ourteams/CreativePerson/ImgSix.jpg";
import ImgSeven from "@/assets/img/ourteams/CreativePerson/ImgSeven.jpg";
import ImgEight from "@/assets/img/ourteams/CreativePerson/ImgEight.jpg";

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

interface IPersonsList {
  Image: string | StaticImageData;
  name: string;
  position: string;
}

export const personsList: IPersonsList[] = [
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
  {
    Image: ImgTwo,
    name: "John Stinger",
    position: "CEO",
  },
];
