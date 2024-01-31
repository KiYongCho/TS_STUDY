var str = 'hello';
function greeting1(str) {
    return str;
}
console.log(greeting1()); // undefined
console.log(greeting1('hello')); // hello
function greeting2(str) {
    if (str === void 0) { str = 'hi'; }
    return str;
}
console.log(greeting2()); // hi
console.log(greeting2('hello')); // hello
var user1 = { name: '홍길동' };
console.log(user1);
var user2 = {}; // 타입단언
console.log(user2);
