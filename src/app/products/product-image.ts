import { API_URL } from "../common/constants/api";

export function getProductImage(productId:number){
 // return `${API_URL}/images/products/${productId}.png`
 return `${process.env.NEXT_PUBLIC_PRODUCT_IMAGE_URL}/${productId}.png`
}