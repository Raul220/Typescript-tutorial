const log_details = (uid: string | number, item: string) => console.log(`${item} has a uid of ${uid}`);
const greet = (user: {name:string, uid: string | number}) => console.log(`${user.name} has a uid of ${user.uid}`);

type StrOrNum = string | number;
const log_details_again = (uid: StrOrNum, item: string) => console.log(`${item} has a uid of ${uid}`);
const greet_again = (user: {name:string, uid: StrOrNum}) => console.log(`${user.name} has a uid of ${user.uid}`);

type ObjWithName = { name: string, uid: StrOrNum };
const greet_again_1 = (user: ObjWithName) => console.log(`${user.name} has a uid of ${user.uid}`);
