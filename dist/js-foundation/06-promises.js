"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonByID = void 0;
const index_1 = require("../plugins/index");
const getPokemonByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield index_1.http.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw new Error(`Pokemon not found with id ${id}`);
    }
    // return fetch(url)
    //     .then((response) => response.json())
    //     // .then(() => {throw new Error('Pokemon Undefined')})
    //     .then((pokemon) => pokemon.name);
});
exports.getPokemonByID = getPokemonByID;
