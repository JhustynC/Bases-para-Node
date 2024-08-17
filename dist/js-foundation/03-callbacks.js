"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByID = void 0;
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
];
const getUserByID = (id, callback) => {
    const user = users.find(function (user) {
        return user.id === id;
    });
    return callback(`User not found with id ${id}`, user);
};
exports.getUserByID = getUserByID;
