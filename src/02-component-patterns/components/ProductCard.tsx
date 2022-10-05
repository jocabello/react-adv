import { useProduct } from '../hooks/useProduct'
import { createContext } from 'react';

import styles from '../styles/styles.module.css'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductButtons } from './ProductButtons';

export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children}: ProductCardProps) => {

  const { counter, increaseBy } = useProduct();

  return (
      <Provider value={{
        counter,
        increaseBy,
        product
      }}>
        <div className={styles.productCard}>
          {children}
        </div>
      </Provider>
  )
}

ProductCard.Image = <ProductImage />;
ProductCard.Title = <ProductTitle />;
ProductCard.Buttons = <ProductButtons />;