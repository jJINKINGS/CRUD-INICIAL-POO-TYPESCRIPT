export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Tparams = Pick<IProduct, "name" | "price">;
export type Tmessage = { message: string; };

export interface IProductList {
    createProduct(data: Tparams): IProduct;
    updateProduct(id: number, data: Tparams): IProduct | Tmessage;
    getOneProduct(id: number): IProduct | undefined;
    deleteProduct(id: number): Tmessage;
    getProducts(): IProduct[];
};




