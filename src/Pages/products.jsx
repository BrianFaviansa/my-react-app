import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/products.service";
import { getUsername } from "../services/auth.service";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     image: "/images/shoes-1.jpg",
//     price: 250000,
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
//     distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
//     odio voluptas, porro voluptatibus aut perferendis libero cum minima
//     sapiente animi.`,
//   },
//   {
//     id: 2,
//     name: "Kucing Baru",
//     image: "/images/cat-1.jpg",
//     price: 500000,
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
//     distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
//     odio voluptas, porro voluptatibus aut perferendis libero cum minima
//     sapiente animi.`,
//   },
//   {
//     id: 3,
//     name: "Minyak Filma",
//     image: "/images/minyak filma.jpg",
//     price: 36000,
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
//     distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
//     odio voluptas, porro voluptatibus aut perferendis libero cum minima
//     sapiente animi.`,
//   },
// ];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  // ! get data product from API
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem("token");
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

  // * useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  const handleAddToCartRef = (id) => {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  };

  // ! perbedaan useState dan useRef
  // * useState akan merender ulang komponen ketika nilai berubah, sedangkan useRef tidak akan merender ulang komponen ketika nilai berubah

  // * useRef bisa memanipulasi DOM langsung, sedangkan useState tidak bisa
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        Welcome, {username}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
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
              {/* ! menggunakan useState */}
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 20)}...</td>
                      <td>
                        {product.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}

              {/* ! menggunakan useRef */}
              {/* {cartRef.current.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(product.price * item.qty).toLocaleString("en-US", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })} */}
              <tr className="font-bold" ref={totalPriceRef}>
                <td colSpan={3}>Total Price</td>
                <td>
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="my-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
