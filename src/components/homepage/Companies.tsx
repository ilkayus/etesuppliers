import { useState, useEffect } from "react";
import Components from "components";
import { ICompanyData } from "types/company.interface";
import useAuth from "hooks/useAuth";
import API from "api";
import { IUserData } from "types/authorization.interface";

const Companies = () => {
  const { auth } = useAuth();
  const [lastItems, setLastItems] = useState<ICompanyData[]>([]);
  useEffect(() => {
    const getLastAdded = async () => {
      const res = await API.company.getLastCompanies(auth);
      console.log(res);
      return res;
    };
    getLastAdded().then((res) => setLastItems(res));
  }, []);

  return (
    <main className="company">
      <div className="company-section">
        <h1>Companies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          perspiciatis iste eaque quisquam, dignissimos placeat eos est in?
          Veniam recusandae, ullam aut corporis vel natus cumque eaque
          exercitationem ea? Dolorum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto atque,
          officia impedit magnam repudiandae dolorem ipsum natus nihil, quam
          error suscipit placeat quas voluptatem nisi exercitationem minus
          asperiores magni modi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          consequuntur non molestiae consequatur doloremque possimus, cupiditate
          beatae? Quisquam mollitia eos cumque impedit provident repudiandae aut
          tempore vero. Tempora, ut quidem.
        </p>
      </div>
      <div className="company-section companies">
        <h2>Description of Selected Company:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum
          nam nulla molestias, laborum tenetur non eveniet nobis deserunt
          suscipit consequuntur soluta nesciunt ipsa reprehenderit accusamus ex
          impedit, vitae minus.
        </p>
      </div>
      <div className="company-section products-of-company">
        <h2>Companies:</h2>
        <div className="table-container">
          {/* <Components.Table data={lastItems} type={"company"} /> */}
        </div>
      </div>
      <div className="company-section user-activity">
        <h2>Products of Selected Company:</h2>
        <div className="table-container">
          {/* <Components.Table data={lastItems} type={"company"} /> */}
        </div>
      </div>
    </main>
  );
};

export default Companies;

/*
 const [company, setCompany] = useState<ICompanyData>({
   _id: "63490233dad1164562d042d1",
   name: "Tesla",
   legalNumber: "14412896001111",
   photo:
     "https://en.wikipedia.org/wiki/Tesla,_Inc.#/media/File:Tesla_Motors.svg",
   incorporationCountry: "USA",
   website: "https://www.tesla.com/",
   description:
     "Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. Tesla designs and manufactures electric vehicles (electric cars and trucks), battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services. Tesla is one of the world's most valuable companies and remains the world's most valuable automaker with a market capitalization of more than US$840 billion. In 2021, the company had the most worldwide sales of battery electric vehicles and plug-in electric vehicles, capturing 21% of the battery-electric (purely electric) market and 14% of the plug-in market (which includes plug-in hybrids). Through its subsidiary Tesla Energy, the company develops and is a major installer of photovoltaic systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3.99 gigawatt-hours (GWh) installed in 2021.",
   createdAt: new Date(),
 });
 <button onClick={() => makeRequest(company)}>CREATE</button>
 <button onClick={() => makeGetRequest()}>GETALL</button>
 <button onClick={() => makeGetLastRequest()}>GET3LAST</button>
 <button onClick={() => makeGetOneRequest("63490233dad1164562d042d1")}>
   GETONE
 </button>
 <button onClick={() => makeUpdateRequest(company)}>UPDATEE</button>
 <button onClick={() => makeDeleteRequest("6348ff26e25184b74283e152")}>
   Delete
 </button>
 const makeRequest = async (companyData: ICompanyData) => {
   const res = await API.company.createCompany(auth, companyData);
   console.log(res);
 };
 const makeGetRequest = async () => {
   const res = await API.company.getAllCompanies(auth);
   console.log(res);
 };
 const makeGetLastRequest = async () => {
   const res = await API.company.getLastCompanies(auth);
   console.log(res);
 };
 const makeDeleteRequest = async (id: string) => {
   const res = await API.company.deleteCompany(id, auth);
   console.log(res);
 };
 const makeGetOneRequest = async (id: string) => {
   const res = await API.company.getOneCompany(id, auth);
   console.log(res);
 };
 const makeUpdateRequest = async (companyData: ICompanyData) => {
   const res = await API.company.updateCompany(companyData, auth);
   console.log(res);
 };

 */
