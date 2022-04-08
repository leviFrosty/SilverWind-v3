import Image from "../Image";

export default interface NavCartSection {
  cartText: string | null;
  cartIcon: Image;
  profileText: string | null;
  profileIcon: Image;
  displayText: boolean;
  cartAccentType:
    | "outlined"
    | "solidBackground"
    | "gradientBackground"
    | "none";
}
