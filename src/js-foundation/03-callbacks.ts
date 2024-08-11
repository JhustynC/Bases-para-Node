
export interface User {
    id: number,
    name: string
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export const getUserByID = (id: number, callback: (err?: string, user?: User) => void) => {
    const user = users.find(function (user) { 
        return user.id === id;
    });

    return callback(`User not found with id ${id}`, user);
}
