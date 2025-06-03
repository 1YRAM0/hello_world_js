const users = [
    {
        id: 1,
        name: 'John Doe',
        
    },
    {
        id: 2,
        name: 'Jane Smith',
    }
];


function getUserById(id, callback) {
    const user =users.find ( function(user) {
        return user.id === id;
    });
    if (!user) {
        //RECUERDA PONER BIEN LAS COMILLAS 
        return callback(new Error(`USUARIO CON ID ${id} not found`));
    }
    return callback(null, user);
}
module.exports = {
    getUserById,
}