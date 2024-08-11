import { getUUID } from '../plugins/get-id.plugin';
import get from 'axios';
import { getAge } from '../plugins/get-age.plugin';

// const { getAge, getUUID } = require('../plugins/index.js');

export interface BuilMakePersonOptions {
    getUUID: () => string,
    getAge: (birthday: string) => number
}

export interface PersonOptions {
    name: string,
    birthday: string
}

export const buildMakePerson = ({ getUUID, getAge }: BuilMakePersonOptions) => {
    return ({ name, birthday } : PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthday: birthday,
      age: getAge(birthday),
    };
  };
};

// const obj = { name: 'Karen Carvajal', birthday: '1996-06-01' };
// const buildPerson = buildMakePerson();
// const karen = buildPerson(obj);
// console.log(karen);

