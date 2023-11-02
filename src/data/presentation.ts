type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "arbtrage8@gmail.com",
  title: "Hi, I’m Sayantan 👋",
  profile: "/profil.jpg",
  description:
    `Bonjour, i'm a *Software Developer* skilled in TypeScript, Node.js, and Next.js.
      I hold a strong technical foundation and a passion for *open-source development*.
    When I'm not coding, you can find me immersed in *books, strumming my guitar, or exploring new horizons*.
`,
  socials: [
    {
      label: "Twitter",
      link: "https://twitter.com/Sayantan_101",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/sayantan-naskar/",
    },
    {
      label: "Github",
      link: "https://github.com/Arbtrage",
    },
  ],
};

export default presentation;
