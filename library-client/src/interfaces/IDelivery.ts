export interface IDelivery {
  type: string;
  priceRange: string;
  icon: any;
  options: Option[];
}

type Option = {
  label: string,
  price: string
}

