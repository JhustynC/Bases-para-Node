
// console.log(process.env);

const { SHELL, COLOR } = process.env;

// console.table({ SHELL, COLOR })

export const characteres : string[] = ['Flash', 'Batman','Green Lantern', 'Superman']; 

const [_, __, batman ] = characteres;

console.log(batman)