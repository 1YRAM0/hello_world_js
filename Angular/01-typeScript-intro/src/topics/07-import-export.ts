import   { Product, taxtcalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        name: 'Laptop_HP',
        price: 1506.98,
        stock: 10
    }
    , {
        name: 'Mouse_Logitech',
        price: 25.50,
        stock: 100
    }
]
const [total, totalIva] = taxtcalculation({
    tax: 0.15,
    products: shoppingCart,
});

console.log('Total sin IVA: ', total);
console.log('Total del IVA: ', totalIva);
export{}



