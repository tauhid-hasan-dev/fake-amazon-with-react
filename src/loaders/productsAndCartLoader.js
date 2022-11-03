import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('https://fake-amazon-server-side.vercel.app/products');
    const { products } = await productsData.json();

    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
    }
    console.log(initialCart)
    //console.log('saved cart', savedCart);
    return { products: products, initialCart: initialCart };
}
