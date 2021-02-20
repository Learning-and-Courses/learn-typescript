// Booleans
const isFetching: boolean = true
const isLoading: boolean = false

// Numbers
let int: number = 42
// int = '' // - ERROR here
const float: number = 2.4
const num: number =2e10

// Strings
const message: string = 'Hello typescript'

// Arrays
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: Array<string> = ['Hello', 'typescript']
// const words: Array<string> = ['Hello', 'typescript', 2, 7] // ERROR

// Tuple
// Массив, состоящий из разных типов данных; фиксированной длины
const contact: [string, number] = ['Maxim', 123488]
// const contact2: Array<string, number> = ['123123', 123] // ERROR
// const contact: [string, number] = ['Maxim', 123488, 1111] // ERROR

// Any
let variable = 42
//...
// variable = 'New String' // ERROR Type '"New String"' is not assignable to type 'number'

let anyVariable: any = 31
//...
anyVariable = 'New String' // OK
anyVariable = [] // OK

//----------------------------------------------------------------------------------------------------------------------
// Functions

function sayMyName(name: string) { // 'void' function
    console.log('My name is ' + name)
}

function sayMyName2(name: string): void { // 'void' function
    console.log('My name is ' + name)
}

function sayMyFavNumber(name: string): number { // 'return number' function
    return 12
}

// function sayMyFavNumber(name: string): number { // 'return number' function
//     return 'My name is ' + name // ERROR Type 'string' is not assignable to type 'number'.
// }

// function sayMyFavNumber(name: string): number { // 'return number' function
//     console.log('My name is ' + name) // ERROR No return value
// }

// Never
// Используется в случаях: функция
// - возвращает ошибку
// - работает бесконечно
function throwError(message: string): never {
        throw new Error(message);
}

function infinite(): never {
    while (true) {
        //..
    }
}


//----------------------------------------------------------------------------------------------------------------------
// Create custom types
// Sometimes useful
// Type
type Login = string; // 'Login' is just an alias
const login: Login = 'user_log'
// const login2: Login = 1234 // ERROR

type ID = string | number
const  id1: ID = '123'
const id2: ID = 123
// const id3: ID = [] // ERROR

// Null, Undefined
type SomeType = string | null | undefined