import { MenuLinkType } from "./types";

export const MENULINK: MenuLinkType[] = [
  {
    one: [
      {
        name: "Home",
        link: "/",
        active: false,
      },
      {
        name: "Projects",
        link: "/projects",
        active: false,
      },
    ],
    two: [
      {
        name: "Case Studies",
        link: "/case-studies",
        active: false,
      },
      // {
      //   name: "Contact",
      //   link: "/contact",
      //   active: false,
      // },
    ],
    three: [
      {
        name: "Capabilities",
        link: "/capabilities",
        active: false,
      },
    ],
  },
];
