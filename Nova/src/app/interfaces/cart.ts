import { Product } from "./Product";

export interface Cart{
    cartId: number;
    userId: number;
    productList: Product[];
}