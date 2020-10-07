import React from 'react';
import ProductCard from '@components/ProductCard/ProductCard';
import { products } from '../../products';

const CataloguePage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center flex-wrap m-auto'>
      {products.map((item) => (
        <ProductCard key={item.idProduct} product={item} />
      ))}
    </div>
  );
};

export default CataloguePage;
