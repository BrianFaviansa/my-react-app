import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    image: "/images/shoes-1.jpg",
    price: 2500000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
  {
    id: 2,
    name: "Kucing Baru",
    image: "/images/cat-1.jpg",
    price: 3500000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
  {
    id: 3,
    name: "Minyak Filma",
    image: "/images/minyak filma.jpg",
    price: 36000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
    distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
    odio voluptas, porro voluptatibus aut perferendis libero cum minima
    sapiente animi.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  // * untuk membuat state pada stateless component / functional component gunakan hooks tepatnya useState
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        Welcome, {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-5 flex justify-center">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
