import {ProductCard, ProductTitle, ProductImage, ProductButtons} from "./components/"


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

          <ProductCard product={product}>
            <ProductCard.Image />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
          
          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>

        </div>
        
    </div>
  )
}
