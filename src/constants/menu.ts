type MenuItem = {
  key: string;
  label: string;
  url?: string;
  type: "item" | "submenu";
  items?: MenuItem[];
};

export const adminMenu: MenuItem[] = [
  {
    key: "home",
    label: "Home",
    url: "./home",
    type: "item",
  },
  {
    key: "contact",
    label: "Contact",
    url: "./contact",
    type: "item",
  },
  {
    key: "submenu",
    label: "Submenu",
    type: "submenu",
    items: [
      {
        key: "submenu1",
        label: "Submenu1",
        url: "./submenu1",
        type: "item",
      },
      {
        key: "submenu2",
        label: "Submenu2",
        url: "./submenu2",
        type: "item",
      },
      {
        key: "submenu3",
        label: "Submenu3",
        url: "./submenu3",
        type: "item",
      },
    ],
  },
  {
    key: "help",
    label: "Help",
    url: "./help",
    type: "item",
  },
  {
    key: "about",
    label: "About",
    url: "./about",
    type: "item",
  },
];
