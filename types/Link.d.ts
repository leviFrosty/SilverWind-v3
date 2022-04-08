export default interface Link {
  id: number;
  href: string;
  label: string;
  target: string | null;
}

export interface LinkWithinArray extends Link {
  // Adds id property to links in array due to Strapi providing ids for each item within array
  id: number;
}
