 import { useSelector } from "react-redux";
// import { fetchData } from "../features/detailSlice";
// import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../../components/Spinner";
import DetailProduct from "../../components/DetailProduct";


function DetailsProduct () {
  const product = useSelector((state) => state.detail.details);
  const loading = useSelector((state) => state.detail.loading);
  


  return (
    <>
      <div className="container">
      <h1><center>Detail Product</center></h1>
      <hr />
        <div className="row">
            <div className="" key={product?.id}>
              <DetailProduct
                idp={product?.id}
                price={product?.price}
                category={product?.category}
                urlToImage={product?.image}
                key={product?.id}
                title={product?.title}
                description={product?.description}
                productget={product}
              />
            </div>
        </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default DetailsProduct;
