import axios from "axios";
import { ICompanyData } from "types/company.interface";
import { IUserData } from "types/authorization.interface";
import { urlHelper, checkUser, setHeader } from "api/api.helpers";

const getCompanyList = async (user?: IUserData | undefined): Promise<any[]> => {
  const config = checkUser(user);
  const url = urlHelper.BASE_URL + urlHelper.GET_COMPANY_LIST_URL;
  const response = await axios.get(url, config);
  return response.data.data;
};

export { getCompanyList };
