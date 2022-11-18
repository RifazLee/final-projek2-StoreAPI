import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from "../../features/productSlice";
import TabelRekap from '../../componentsadmin/RekapItem';
import { Container } from 'react-bootstrap';

const Rekap = () => {

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
    <Container>
      <div className="row pt-5">
        <h1>Rekap Penjualan</h1>
        {products.map((product)=>(
          <TabelRekap key={product.id} {...product}/>
        ))}
    </div>
    </Container>
  );
};

export default Rekap;
