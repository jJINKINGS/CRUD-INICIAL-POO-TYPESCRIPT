import { IProduct, IProductList, Tparams, Tmessage } from "./interfaces";

class ProductList implements IProductList {
    
    private id: number = 1;
    private productList: IProduct[] = [];

    getProducts(): IProduct[] {
        return this.productList;
    }

    getOneProduct(id: number): IProduct | undefined {
        const oneProduct = this.productList.find(product => product.id === id);
        if(oneProduct) {
            return oneProduct;
        } else {
            return undefined;
        }
    }

    createProduct(data: Tparams): IProduct {
        const date = new Date;
        const newProduct = { ...data, id: this.id, createdAt: date, updatedAt: date };
        this.productList.push(newProduct);
        this.id++;

        return newProduct;
    }

    updateProduct(id: number, data: Tparams): IProduct | Tmessage {
        const currentProduct = this.productList.find(product => product.id === id);
        if(currentProduct) {
            const index = this.productList.findIndex(product => product.id === id);
            const date = new Date();
            const updateProduct = { ...currentProduct, ...data, updatedAt: date };

            this.productList.splice(index, 1, updateProduct );

            return updateProduct;
        } else {
            return { message: "Product not found." }
        }
    }

    deleteProduct(id: number): Tmessage {
        const currentProduct = this.productList.find(product => product.id === id);
        if(currentProduct) {
            const index = this.productList.findIndex(product => product.id === id);
            this.productList.splice(index, 1);
            return { message: "Product successfully deleted."}
        } else {
            return { message: "Product not found."};
        }
    }
};

export const productList = new ProductList();



