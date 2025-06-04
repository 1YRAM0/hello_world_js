import { findHeroByID } from "./services/hero.service";

 
console.log("🚀 ");
console.log("App is running...");
console.log("🚀 ")    ;
const hero = findHeroByID(7);  
console.log(hero?.name ?? 'Heroe no encontrado' );