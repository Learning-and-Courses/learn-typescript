
// Operators, special for TS

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age' // OK

// key = 'LoL' // ERROR  Type '"lol"' is not assignable to type '"name" | "age"'


type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'>;
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta = 'name';
// u1 = '_id'; // ERROR Type '"_id"' is not assignable to type '"name" | "email"'.

// let u2: UserKeysNoMeta2 = 'email'; // OK - why ERROR here, this line should be correct
// let u3: UserKeysNoMeta2 = 'createdAt'; // ERROR