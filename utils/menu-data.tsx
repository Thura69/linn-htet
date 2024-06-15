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
        link: "/",
        active:false
      },
    ],
    two: [
      {
        name: "Case Studies",
        link: "/",
        active:false

      },
      {
        name: "Design Diversions",
        link: "/play",
        active:false

      },
    ],
    three: [
      {
        name: "Contact",
        link: "/",
        active:false

      },
    ],
  },
];
