import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: "2.500.000",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
  {
    id: 2,
    name: "Kucing Baru",
    image: "/images/cat-1.jpg",
    price: "3.500.000",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
  {
    id: 3,
    name: "Minyak Filma",
    image: "/images/minyak filma.jpg",
    price: "360.000",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        Welcome, {email}
        <Button classname="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
