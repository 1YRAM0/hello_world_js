interface products {
    name: string;
    price: number;  
    stock: number;
}
const laptop: products = {
    name: 'Laptop',
    price: 1500,
    stock: 10
}
const mouse: products = {
    name: 'Mouse',  
    price: 25.50,
    stock: 100
}
interface ivaCalculationOptions  {
    tax: number;
    products: products[];}

//

//function taxtcalculation ({tax,products}:ivaCalculationOptions): [number, number] {
function taxtcalculation (options:ivaCalculationOptions): [number, number] {
    const {tax, products} = options;
    let total= 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total *tax];

}
const shopingCart: products[] = [laptop, mouse];   
const  Iva =0.15;
const [total, totalIva] = taxtcalculation({
    tax: Iva,
    products: shopingCart,});
console.log('Total sin IVA: ', total);
console.log('Total del IVA: ', totalIva);
export{};
