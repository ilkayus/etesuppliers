export interface ICompanyData {
  _id?: string | undefined;
  name: string;
  legalNumber: string;
  photo?: string;
  incorporationCountry: string;
  website: string;
  description?: string;
  fields?: string[];
  owner?: string;
  products?: string[];
  createdAt?: Date;
}
