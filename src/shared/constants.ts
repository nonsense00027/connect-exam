interface ICardColors {
  id: string;
  color: string;
}
export const cardColors: ICardColors[] = [
  { id: "white", color: "bg-white" },
  { id: "lightGray", color: "bg-gray-lighter" },
  { id: "gray", color: "bg-gray-light" },
  { id: "orange", color: "bg-orange" },
  { id: "blue", color: "bg-blue" },
];

interface INavLinks {
  id: string;
  label: string;
}
export const navLinks: INavLinks[] = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "item",
    label: "Item",
  },
  {
    id: "shop",
    label: "Shop",
  },
  {
    id: "info",
    label: "Info",
  },
  {
    id: "press",
    label: "Press",
  },
];

export const scrollOptions: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "start",
  inline: "start",
};
