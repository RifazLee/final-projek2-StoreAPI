import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/productSlice";
import ProductItem from "../../components/ProductItem";
import Spinners from "../../components/Spinner";

function Home () {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);



  return (
    <>
      <div className="container">
      <h1><center>All Product</center></h1>
      <hr />
        <div className="row">
          {allProducts.map((product, index) => (
            <div className="col-md-3 py-2" key={index}>
              <ProductItem
                idp={product?.id}
                price={product?.price}
                category={product?.category}
                urlToImage={product?.image}
                key={index}
                title={product?.title}
                description={product?.description}
                productget={product}
              />
            </div>
          ))}
        </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default Home;
