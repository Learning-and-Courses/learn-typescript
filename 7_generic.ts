const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrayOfStrings: Array<string> = ['haha', 'Max']


function reverse <T> (array: Array<T>): Array<T> {
    return array.reverse();
}
// or
function reverse2 <T> (array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers); // OK
reverse(arrayOfStrings); // OK