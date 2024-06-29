import { MenuLinkType } from "./types";

export const MENULINK: MenuLinkType[] = [
  {
    one: [
      {
        name: "Home",
        link: "/",
        active:true
      },
      {
        name: "Projects",
        link: "/projects",
        active:false
      },
    ],
    two: [
      {
        name: "Case Studies",
        link: "/case-studies",
        active:false

      },
      {
        name: "Design Diversions",
        link: "/design-diversions",
        active:false

      },
    ],
    three: [
      {
        name: "Contact",
        link: "/contact",
        active:false

      },
    ],
  },
];
