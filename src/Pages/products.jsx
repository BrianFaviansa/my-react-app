import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
          distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
          odio voluptas, porro voluptatibus aut perferendis libero cum minima
          sapiente animi.
        </CardProduct.Body>
        <CardProduct.Footer price="2.500.000" />
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="/images/cat-1.jpg" />
        <CardProduct.Body title="Kucing Geming">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
          distinctio natus sunt, consequuntur nemo, illo eaque beatae cumque
          odio voluptas, porro voluptatibus aut perferendis libero cum minima
          sapiente animi.
        </CardProduct.Body>
        <CardProduct.Footer price="10.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
