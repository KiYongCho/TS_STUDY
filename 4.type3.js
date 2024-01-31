/* 타입 추론 (type Inference) */
// - TS에서 개발자가 타입을 명시하지 않더라도 트랜스컴파일러가 타입을 추론할 수 있는 경우
//   타입을 명시하지 않아도 된다. (타입추론이 확실히 되는 경우 타입선언하는 코딩을 줄이자~)
// - 변수 초기화, 함수의 매개변수 기본값 설정, 함수의 값 반환 시에 타입추론이 일어난다.
// 변수 초기화시 타입 추론
var str1; // any로 추론
var str2 = 'hello'; // string으로 추론
var num = 100; // number로 추론
// 함수 반환값 타입 추론
function add(a, b) {
    return a + b;
}
var result1 = add(1, 2); // result의 타입은 number로 추론
// 함수 매개변수 기본값 추론
function add2(a, b) {
    if (a === void 0) { a = 1; }
    if (b === void 0) { b = 2; }
    return a + b;
}
var result2 = add2(3, 4);
var person = {
    name: '홍길동',
    hobby: ['축구', '농구']
};
/* 타입 단언 (type assertion) */
// - 타입스크립트의 타입추론을 사용하는 대신 개발자가 직접 타입을 명시
//   as 키워드를 사용하여 개발자가 타입을 선언
// - 이미 개발된 JS코드를 어쩔 수 없이 수정해야 하는 경우가 아니면 사용하지 말자!
// hong의 타입은 이제부터 string이다!
var hong = '홍길동';
console.log(typeof hong);
console.log();
// let human: Human = {}; // error
// 이제부터 human에는 name과 age 프라퍼티가 들어올 것이다!
var human = {};
function getId(id) {
    return id;
}
// getId는 number를 반환할 것이다!
var myId = getId('hong');
console.log(myId, typeof myId); // hong string
console.log();
// 타입단언 중첩
var number = 10;
console.log(number, typeof number); // 10 number
console.log();
function shuffleBooks(books) {
    // const result = books!.shuffle(); // 실행시 에러
    var result = books === null || books === void 0 ? void 0 : books.shuffle(); // undefined
    return result;
}
// 타입체크는 오케이, 실행시 에러 , 실행시에도 에러 안내려면 !를 ?로
console.log(shuffleBooks(null));
console.log();
/* 타입 가드 (type guard) */
// 여러개의 타입으로 지정된 값을 특정 위치에서 원하는 값으로 구분하는 것
// typeof, instanceof, in 연산자를 사용해 타입범위를 좁히는 것
// 3가지 타입 중 2가지는 가드(막는다)
var var1 = 'hello';
if (typeof var1 === 'string') {
    console.log(var1.toUpperCase());
}
console.log();
// 타입가드를 위해 타입단언을 사용하게 되면 실행시 오류를 피할 수 없다
function func1(param1) {
    console.log(param1.toFixed(2));
}
func1(3.1415);
// func1('hello'); // error
console.log();
function Bird(name) {
    this.name = name;
}
function Mammal(name) {
    this.name = name;
}
var bird = new Bird('독수리');
if (bird instanceof Bird) {
    console.log(bird.name);
}
// if (bird instanceof Mammal) {
//     console.log(bird.name);
// }
console.log();
var book = { name: 'typescript', author: '마소' };
if ('author' in book) {
    console.log(book);
}
function isHongOrPark(someone) {
    return someone.age !== undefined;
}
var designer = {
    name: '홍길순',
    age: 20,
    jobName: 'designer'
};
var programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'
};
if (designer.jobName === 'designer') {
    console.log(designer.jobName);
}
if (programmer.jobName === 'programmer') {
    console.log(programmer.jobName);
}
console.log();
