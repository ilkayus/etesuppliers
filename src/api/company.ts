import axios from "axios";
import { ICompanyData } from "types/company.interface";
import { IUserData } from "types/authorization.interface";
import { urlHelper, checkUser, urlBuilder, setHeader } from "api/api.helpers";

const getCompany = async (
  fetchString: string,
  fetchInfo: string,
  user?: IUserData | undefined
): Promise<ICompanyData> => {
  const config = checkUser(user);
  const url =
    urlHelper.BASE_URL +
    urlHelper.GET_COMPANY_URL +
    urlBuilder(fetchString, fetchInfo);
  const response = await axios.get(url, config);
  return response.data;
};

const createCompany = async (
  token: string | undefined,
  companyData: ICompanyData
): Promise<ICompanyData> => {
  const url = urlHelper.BASE_URL + urlHelper.NEW_COMPANY_URL;
  const response = await axios.post(
    url,
    {
      name: companyData.name,
      legalNumber: companyData.legalNumber,
      photo: companyData.photo,
      incorporationCountry: companyData.incorporationCountry,
      website: companyData.website,
      description: companyData.description,
      createdAt: companyData.createdAt,
    },
    setHeader(token)
  );
  console.log(response);
  return response.data;
};

export { createCompany, getCompany };
