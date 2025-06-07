export interface Product {
    name: string;
    price: number;  
    stock: number;
};
const laptop: Product = {
    name: 'Laptop',
    price: 1500,
    stock: 10
}
const mouse: Product = {
    name: 'Mouse',  
    price: 25.50,
    stock: 100
}
interface ivaCalculationOptions  {
    tax: number;
    products: Product[];
}



//function taxtcalculation ({tax,products}:ivaCalculationOptions): [number, number] {
export function taxtcalculation (options:ivaCalculationOptions): [number, number] {
    const {tax, products} = options;
    let total= 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total *tax];

}
/*
const shopingCart: Product[] = [laptop, mouse];   
const  Iva =0.15;
const [total, totalIva] = taxtcalculation({
    tax: Iva,
    products: shopingCart,});
console.log('Total sin IVA: ', total);
console.log('Total del IVA: ', totalIva);
export{};
*/