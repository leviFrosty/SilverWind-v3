import { ButtonVariant } from "@mantine/core";
import Image from "../Image";

export default interface NavUserSection {
  cartText: string | null;
  cartIcon: {
    data: Image;
  };
  profileText: string | null;
  profileIcon: {
    data: Image;
  };
  displayText: boolean;
  cartAccentType: ButtonVariant;
}
