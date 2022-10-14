export interface IProductData {
  _id?: string | undefined;
  name: string;
  company: string;
  category: string;
  photo?: string;
  amount?: number;
  amountUnit?: string;
  description?: string;
  owner?: string;
  createdAt?: Date;
}
