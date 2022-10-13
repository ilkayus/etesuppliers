import { useState, useEffect } from "react";
import Components from "components";
import { ICompanyData } from "types/company.interface";
import useAuth from "hooks/useAuth";
import API from "api";

const Companies = () => {
  const { auth } = useAuth();
  const [company, setCompany] = useState<ICompanyData>({
    _id: undefined,
    name: "Microsoft",
    legalNumber: "60000254782154",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    incorporationCountry: "USA",
    website: "https://www.microsoft.com/",
    description:
      "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services headquartered at the Microsoft Redmond campus located in Redmond, Washington, United States. Its best-known software products are the Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue;[2] it was the world's largest software maker by revenue as of 2019. It is one of the Big Five American information technology companies, alongside Alphabet, Amazon, Apple, and Meta.",
    createdAt: new Date(),
  });
  //useEffect(() => {}, []);

  const makeRequest = async (companyData: ICompanyData) => {
    const res = await API.company.createCompany(auth?.token, companyData);
    console.log(res);
  };

  return (
    <main className="company">
      <div className="company-section">
        <button onClick={() => makeRequest(company)}>DAAAAT</button>
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
          <Components.Table />
        </div>
      </div>
      <div className="company-section user-activity">
        <h2>Products of Selected Company:</h2>
        <div className="table-container">
          <Components.Table />
        </div>
      </div>
    </main>
  );
};

export default Companies;
