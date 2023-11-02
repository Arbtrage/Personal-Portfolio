export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Upcoming",
    techs: ["ReactJS (NextJS)", "react-query", "zod"],
    link: "#",
  },
  {
    title: "Upcoming",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "#",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
