import { Product } from "../product/product.class";
import { Request } from "../request/request.class";
    

export class Requestline {
    id: number = 0;
    request: Request = null;
    product: Product = null;
    quantity: number = 0;

}