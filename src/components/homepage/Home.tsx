import React from "react";
import Components from "components";
import { icons } from "images";

const Home = () => {
  return (
    <main className="home">
      <div className="home-section">
        <h1>Home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At vero,
          accusantium eligendi reprehenderit corrupti suscipit hic, facilis
          veritatis nulla eaque maiores cumque. Consectetur sunt dicta officiis
          dolorum ex deserunt. Quos.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          ullam alias hic sint perspiciatis recusandae! Incidunt, ex. Corporis
          officiis et mollitia culpa illo voluptate provident, molestias dolor
          soluta voluptatum consequatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque
          quos placeat similique, aperiam dolorem asperiores mollitia labore
          numquam debitis accusantium atque distinctio neque repudiandae
          molestias libero commodi voluptatem dolorum!
        </p>
      </div>
      <div className="home-section companies">
        <h2>Last Added Companies:</h2>
        <div className="table-container">
          <Components.Table />
        </div>
      </div>
      <div className="home-section products-of-company">
        <h2>Last Added Products:</h2>
        <div className="table-container">
          <Components.Table />
        </div>
      </div>
      <div className="home-section user-activity">
        <h2>Last Activities:</h2>
        <div className="table-container">
          <Components.Table />
        </div>
      </div>
    </main>
  );
};

export default Home;
