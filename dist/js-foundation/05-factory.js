"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthday }) => {
        return {
            id: getUUID(),
            name: name,
            birthday: birthday,
            age: getAge(birthday),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Karen Carvajal', birthday: '1996-06-01' };
// const buildPerson = buildMakePerson();
// const karen = buildPerson(obj);
// console.log(karen);
