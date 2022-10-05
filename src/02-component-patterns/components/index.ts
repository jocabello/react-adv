import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign( ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons
})

export default ProductCard;