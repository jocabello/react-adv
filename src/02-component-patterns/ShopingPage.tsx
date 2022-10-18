import {ProductCard, ProductTitle, ProductImage, ProductButtons} from "./components/"
import './styles/custom-styles.css'

const product = {
  id: 'asdasd',
  title: 'títulox',
  img: './coffee-mug.png'
}

export const ShopingPage = () => {

  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          <ProductCard 
            product={product}
            className="bg-dark"
          >
            <ProductCard.Image />
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons />
          </ProductCard>
          
          <ProductCard 
            product={product}
            className="bg-dark text-white text-bold"
          >
            <ProductImage className="custom-image"/>
            <ProductTitle className="text-white"/>
            <ProductButtons className="custom-buttons"/>
          </ProductCard>
          
          <ProductCard 
            product={product}
            style={{
              backgroundColor: '#70D1F8'
            }}
          >
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>

        </div>
        
    </div>
  )
}
