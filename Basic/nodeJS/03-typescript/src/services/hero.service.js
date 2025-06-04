"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroByID = void 0;
const heroes_1 = require("../data/heroes");
const findHeroByID = (id) => {
    return heroes_1.heroes.find(hero => hero.id === id);
};
exports.findHeroByID = findHeroByID;
