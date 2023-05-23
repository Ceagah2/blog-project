export interface PostProps {
  id: number;
  title: string;
  subtitle: string;
  body?: string;
  createdAt: string;
  imageUrl?: string | null;
  createdBy: string;
  isRestaurant: boolean;
  isAdvertising: boolean;
  location: {
    address: string;
    number: number;
    zipcode: string;
  };
  onClick?: () => void;
}
