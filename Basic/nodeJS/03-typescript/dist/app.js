"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
console.log("🚀 Servidor iniciado desde TypeScript");
const hero = (0, hero_service_1.findHeroByID)(7);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Heroe no encontrado');
