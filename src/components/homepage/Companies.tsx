import React from "react";
import Components from "components";

const Companies = () => {
  return (
    <main className="company">
      <div className="company-section page-info">
        <h2>Page</h2>
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
