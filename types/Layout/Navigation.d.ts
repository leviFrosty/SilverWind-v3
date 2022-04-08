import Link, { LinkWithinArray } from "../Link";
import NavCartSection from "./NavCartSection";

export default interface Navigation {
  companyTitle: string;
  displayLogo: boolean;
  menuSection?: {
    id: number;
    links: LinkWithinArray[];
  };
  userSection: NavCartSection;
}
