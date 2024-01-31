const str = 'hello';

function greeting1(str?: string): string {
    return str;
}
console.log(greeting1()); // undefined
console.log(greeting1('hello')); // hello

function greeting2(str: string = 'hi'): string {
    return str;
}
console.log(greeting2()); // hi
console.log(greeting2('hello')); // hello

interface User {
    name: string;
}
const user1: User = {name: '홍길동'};
console.log(user1);
const user2: User = {} as User; // 타입단언
console.log(user2);
