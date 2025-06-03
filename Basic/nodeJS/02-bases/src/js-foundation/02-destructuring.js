//console.log(process.env);
const { SHELL, HOMERBREW_PREFIX, npm_lifecycle_script}= process.env;
//console.table({ SHELL, HOMERBREW_PREFIX, npm_lifecycle_script});
const characters = ['auto', 'burro', 'Camion'];
const [_,__ ,car] = characters;
console.log(car);