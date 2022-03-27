import ViewProducts from "../../features/Products/ViewProducts/ViewProducts";
import axios from "axios";

const ProductsPage = (props) => {
  return <ViewProducts data={props} />;
};

export const getServerSideProps = async () => {
  const resp = await axios({
    url: "https://api.pokemontcg.io/v2/cards?pageSize=12",
    method: "GET",
  });
  return {
    props: {
      data: resp.data,
    },
  };
};

export default ProductsPage;
