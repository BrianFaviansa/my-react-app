import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
