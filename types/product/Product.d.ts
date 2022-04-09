import Image from "../Image";
import Review from "./Review";
import Tag from "./Tag";
import Video from "../Video";

/*
 * Product type information from strapi backend.
 */
export default interface Product {
  id: number;
  attributes: {
    name: string;
    product_id: string;
    images: {
      data: Image[];
    } | null;
    description: string;
    customizable: boolean;
    videos: {
      data: Video[];
    } | null;
    style:
      | "Minimalistic"
      | "Floral"
      | "Dainty"
      | "Maximalist"
      | "Elegant"
      | "Promise Ring"
      | "One of a kind"
      | "Grunge"
      | "Masculine"
      | "Femenine"
      | "Stacker";
    thickness: "Thin" | "Neutral" | "Thick" | "Chunky" | null;
    stone:
      | "ALEXANDRITE"
      | "AMETHYST"
      | "AQUAMARINE"
      | "CITRINE"
      | "DIAMOND"
      | "EMERALD"
      | "GARNET"
      | "JADE"
      | "LAPIS LAZULI"
      | "MOONSTONE"
      | "MORGANITE"
      | "ONYX"
      | "OPAL"
      | "PARAIBA TOURMALINE"
      | "PEARLS"
      | "PERIDOT"
      | "RUBY"
      | "SAPPHIRE"
      | "SPINEL"
      | "TANZANITE"
      | "TOPAZ"
      | "TOURMALINE"
      | "TURQUOISE"
      | "ZIRCON"
      | null;
    material: "SILVER" | "FINE SILVER" | "GOLD" | "TITANIUM" | "COPPER" | null;
    tags: {
      data: Tag[];
    } | null;
    reviews: {
      data: Review[];
    } | null;
    customizationType: "twoLetters" | "wordOrTwo" | "manyWords" | null;
    materialQuality: number | null;
    type: "RING" | "NECKLACE" | "EARRING" | "BRACELET" | "ANKLET";
    price: number;
    active: boolean;
    quantity: number;
  };
}
