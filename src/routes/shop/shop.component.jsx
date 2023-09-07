import CategoryDirectory from "../../components/category-directory/category-directory.component";
import { getWord } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
const Shop = () => {
  useEffect(async () => {
    const words = await getWord();
    if (words) {
      console.log(words);
    }
  }, []);

  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];

  return <CategoryDirectory categories={categories} />;
};

export default Shop;
