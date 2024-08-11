// const {emailTemplate} = require('./js-foundation/01-template')


// console.log(emailTemplate);

// require('./js-foundation/02-destructuring');

// const { getUserByID } = require('./js-foundation/03-callbacks.js')

// const id = 2;

//! Funciones de flecha

// getUserByID(id, (error, user) => {
//   (!user) ? (() => { throw new Error(error) })() : console.log(user);
// });

//! Referencia a las factory function y uso (Patron de codigo)

// const { getAge, getUUID } = require('./plugins/index.js');
// const { buildMakePerson } = require('./js-foundation/05-factory.js');

// const obj = { name: 'Karen Carvajal', birthday: '1996-06-01' };
// const buildPerson = buildMakePerson(getUUID, getAge);
// const karen = buildPerson(obj);
// console.log(karen);

// const obj = { name: 'John', birthday: '1985-10-21' };
// const makePerson = buildMakePerson(getUUID, getAge);
// const john = makePerson(obj);
// console.log(john);

//! Repaso sobre callbacks

import {getPokemonByID} from './js-foundation/06-promises';

const info = getPokemonByID(4)
    .then(( pokemon ) => console.log({ pokemon }))
    .catch(( err ) => console.error(err)
);

// console.log(info);

// //! Consumir modulo de loggers (winston)

// const { buildLogger } = require('./plugins')

import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Algo malo');
