// import { getWord } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  // useEffect(async () => {
  //   const words = await getWord();
  //   if (words) {
  //     console.log(words);
  //   }
  // }, []);

  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
