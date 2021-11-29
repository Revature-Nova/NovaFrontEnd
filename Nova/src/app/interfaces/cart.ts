import { Product } from "./product";

export interface Cart{
    cartId: number;
    userId: number;
    productList: Product[];
}