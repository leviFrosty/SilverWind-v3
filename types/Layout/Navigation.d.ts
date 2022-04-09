import Image from "../Image";
import Link, { LinkWithinArray } from "../Link";
import NavUserSection from "./NavUserSection";

export default interface Navigation {
  data: {
    attributes: {
      companyTitle: string;
      companyLogo: {
        data: Image;
      };
      displayLogo: boolean;
      menuSection?: {
        id: number;
        links: LinkWithinArray[];
      };
      userSection: NavUserSection;
    };
  };
}
