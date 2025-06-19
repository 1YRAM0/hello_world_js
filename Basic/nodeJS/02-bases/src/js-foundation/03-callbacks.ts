interface User{
    id:number,
    name:string, 
}
interface carros {  
    placa :string,
    modelo: string,
    año: number,
}
const users :User[] = [
    {
        id: 1,
        name: 'John Doe',
        
    },
    {
        id: 2,
        name: 'Jane Smith',
    }
];


export function getUserById(id:number, callback : (err?:string, user?:User) => void ) {
    const user =users.find ( function(user) {
        return user.id === id;
    });
    if (!user) {
        //RECUERDA PONER BIEN LAS COMILLAS 
        return callback(`USUARIO CON ID ${id} not found`);
    }
    return callback(undefined, user);
}
