import { User } from './03-callbacks';

const users : User[] = [

    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }

];

export function getUserByID(id: number, callback: (err?: string, user?: User) => void) {
    const user = users.find( (user) => user.id === id );
    return callback(`User not found with id ${id}`, user);
}

