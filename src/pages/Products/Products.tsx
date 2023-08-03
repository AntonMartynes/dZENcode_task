import React from 'react';
import { useSelector } from 'react-redux';
import { FilterProduct } from '../../components/FilterProduct';
import { ProductList } from '../../components/ProductList';
import { TitlePageInfo } from '../../components/TitlePageInfo';
import { RootState } from '../../Redux/store';
import { Product } from '../../types';
import './Products.scss';

export const Products: React.FC = () => {
  const products = useSelector<RootState>(state => state.product) as Product[];

  return (
    <>
      <div className="product__top-bar">
        <TitlePageInfo name="Products" count={products.length} />
        <FilterProduct />
      </div>
      
      <ProductList />
    </>
  );
};