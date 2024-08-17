"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = getUserByID;
const users = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];
function getUserByID(id, callback) {
    const user = users.find((user) => user.id === id);
    return callback(`User not found with id ${id}`, user);
}
