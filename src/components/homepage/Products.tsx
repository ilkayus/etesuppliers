import { useState, useEffect } from "react";
import Components from "components";
import { IProductData } from "types/product.interface";
import useAuth from "hooks/useAuth";
import API from "api";
import { IUserData } from "types/authorization.interface";
import { icons } from "images";

const Products = () => {
  const { auth } = useAuth();
  const [grid, setGrid] = useState(false);
  const [products, setProducts] = useState<IProductData[]>([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await API.product.getAllProducts(auth);
  //     console.log(res);
  //     return res;
  //   };
  //   getProducts().then((res) => setProducts(res));
  // }, []);

  return (
    <main className={grid ? "product product-animated" : "product"}>
      <div className="grid-changer" onClick={() => setGrid((prev) => !prev)}>
        <img src={icons.upArrow} alt="seperator" />
      </div>
      <div className="product-section product-description">
        <h1>Products</h1>
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
      {/* <div className="product-section product-description">
        <h2>Description of Product:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, rerum
          nam nulla molestias, laborum tenetur non eveniet nobis deserunt
          suscipit consequuntur soluta nesciunt ipsa reprehenderit accusamus ex
          impedit, vitae minus.
        </p>
      </div> */}
      <div className="product-section products-all">
        <div className="table-header">
          <h2>Products:</h2>
          <div className="table-header-buttons">
            <button>UPDATE</button>
            <button>DELETE</button>
            <button>ADD</button>
          </div>
        </div>
        <div className="table-container">
          <Components.Table
            fetchFn={API.product.getAllProducts}
            type={"product"}
          />
        </div>
      </div>
      <div className="product-section product-selected">
        <h2>Selected Product:</h2>
        <div className="table-container">
          {/* <Components.Table data={"2"} /> */}
        </div>
      </div>
    </main>
  );
};

export default Products;

/*
    _id: "6349197d7a7afe294ca2b552",
    name: "Microsoft Access",
    company: "63486603ed229d78c7835c2a",
    category: "software",
    photo:
      "https://www.gezginler.net/indir/resim-grafik/microsoft-access-1484557047.png",
    amount: 0,
    amountUnit: "piece",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum.",
    createdAt: new Date(),
    */

/*
      const [product, setProduct] = useState<IProductData>({
    amount: 28,
    amountUnit: "piece",
    category: "software",
    company: "63486603ed229d78c7835c2a",
    createdAt: new Date(),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros donec ac odio tempor.",
    name: "Microsoft Office PowerPoint",
    owner: "6348098b9727a1a7b594a46a",
    photo:
      "https://i.pcmag.com/imagery/reviews/00InVWTsLrQWxxCpsQMKFcl-5.fit_scale.size_760x427.v1569482071.jpg",
    _id: "634917ea7a7afe294ca2b54f",
  });
  //useEffect(() => {}, []);

  const makeRequest = async (productData: IProductData) => {
    const res = await API.product.createProduct(auth, productData);
    console.log(res);
  };

  const makeGetRequest = async () => {
    const res = await API.product.getAllProducts(auth);
    console.log(res);
  };
  const makeGetLastRequest = async () => {
    const res = await API.product.getLastProducts(auth);
    console.log(res);
  };

  const makeDeleteRequest = async (id: string) => {
    const res = await API.product.deleteProduct(id, auth);
    console.log(res);
  };

  const makeGetOneRequest = async (id: string) => {
    const res = await API.product.getOneProduct(id, auth);
    console.log(res);
  };

  const makeUpdateRequest = async (productData: IProductData) => {
    const res = await API.product.updateProduct(productData, auth);
    console.log(res);
  };
  */

/*
        <button onClick={() => makeRequest(product)}>CREATE</button>
        <button onClick={() => makeGetRequest()}>GETALL</button>
        <button onClick={() => makeGetLastRequest()}>GET3LAST</button>
        <button onClick={() => makeGetOneRequest("634917ea7a7afe294ca2b54f")}>
          GETONE
        </button>
        <button onClick={() => makeUpdateRequest(product)}>UPDATEE</button>
        <button onClick={() => makeDeleteRequest("634917ea7a7afe294ca2b54f")}>
          Delete
        </button>
  */
