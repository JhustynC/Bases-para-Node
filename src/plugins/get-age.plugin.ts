
// import { getAge } from 'get-age';

// const getAgePlugin = require('get-age');

export const getAge = (birthday: string) : Number => {
    return new Date().getFullYear() - new Date(birthday).getFullYear();
};

// module.exports = {
//     getAge,
// }