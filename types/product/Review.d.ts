export default interface Review {
  attributes: {
    rating: number;
    title: string;
    uid: string;
    wouldRecommend: boolean;
    description: string;
  };
  id: number;
}
