export function whatsMyTYpe<T>(argument : T) :T{
    return argument;
}
let amIString= whatsMyTYpe('Hola mundo');
let amINumber = whatsMyTYpe(1234);
let amIArray = whatsMyTYpe([1, 2, 3, 4]);


console.log(amIString.split(' name'));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));