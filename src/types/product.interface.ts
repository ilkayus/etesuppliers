export interface IProductData {
  _id: string;
  name: string;
  category: string;
  photo?: string;
  amount?: number;
  amountUnit?: string;
  description?: string;
  owner: string;
  company?: string;
  createdAt?: Date;
}
