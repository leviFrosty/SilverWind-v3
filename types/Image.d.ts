export default interface Image {
  id: number;
  attributes: {
    ext: string;
    alternativeText: string;
    hash: string;
    mime: string;
    caption: string;
    name: string;
    url: string;
  };
}
