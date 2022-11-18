import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../features/productSlice";
import StockItem from '../../componentsadmin/StockItem';

const StockProduct = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
      useEffect(() => {
        dispatch(fetchData());
      }, [dispatch])

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <div>
      <section className='cart'>
        <div>
          {products.map((item) => {
            return <StockItem key={item.id}{...item} />
          })}
        </div>
      </section>
    </div>
  )
}

export default StockProduct