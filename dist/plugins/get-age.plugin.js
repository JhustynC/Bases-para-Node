"use strict";
// import { getAge } from 'get-age';
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
// const getAgePlugin = require('get-age');
const getAge = (birthday) => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};
exports.getAge = getAge;
// module.exports = {
//     getAge,
// }
