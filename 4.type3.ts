/* 타입 추론 (type Inference) */

// - TS에서 개발자가 타입을 명시하지 않더라도 트랜스컴파일러가 타입을 추론할 수 있는 경우
//   타입을 명시하지 않아도 된다. (타입추론이 확실히 되는 경우 타입선언하는 코딩을 줄이자~)
// - 변수 초기화, 함수의 매개변수 기본값 설정, 함수의 값 반환 시에 타입추론이 일어난다.

// 변수 초기화시 타입 추론
let str1; // any로 추론
let str2 = 'hello'; // string으로 추론
let num = 100; // number로 추론

// 함수 반환값 타입 추론
function add(a: number, b: number) {
    return a + b;
}
let result1 = add(1, 2); // result의 타입은 number로 추론

// 함수 매개변수 기본값 추론
function add2(a = 1, b = 2) { // a, b는 모두 number로 추론
    return a + b;
}
let result2 = add2(3, 4);

// 인터페이스에서의 타입 추론
interface Person<T> { // T는 string[]로 추론
    name: string;
    hobby: T;
}
const person: Person<string[]> = {
    name: '홍길동',
    hobby: ['축구', '농구']
};


/* 타입 단언 (type assertion) */
// - 타입스크립트의 타입추론을 사용하는 대신 개발자가 직접 타입을 명시
//   as 키워드를 사용하여 개발자가 타입을 선언
// - 이미 개발된 JS코드를 어쩔 수 없이 수정해야 하는 경우가 아니면 사용하지 말자!

// hong의 타입은 이제부터 string이다!
const hong = '홍길동' as string; 
console.log(typeof hong);

console.log();

interface Human {
    name: string;
    age: number;
}
// let human: Human = {}; // error
// 이제부터 human에는 name과 age 프라퍼티가 들어올 것이다!
let human = {} as Human; 

function getId(id) {
    return id;
}
 // getId는 number를 반환할 것이다!
const myId = getId('hong') as number;
console.log(myId, typeof myId); // hong string

console.log();

// 타입단언 중첩
const number = (10 as any) as number;
console.log(number, typeof number); // 10 number

console.log();

// 널아님 보장연산자 (non null assertion)
interface Books {
    shuffle: Function
}
function shuffleBooks(books: Books | null) {
    // const result = books!.shuffle(); // 실행시 에러
    const result = books?.shuffle(); // undefined
    return result;
}
// 타입체크는 오케이, 실행시 에러 , 실행시에도 에러 안내려면 !를 ?로
console.log(shuffleBooks(null));

console.log();


/* 타입 가드 (type guard) */
// 여러개의 타입으로 지정된 값을 특정 위치에서 원하는 값으로 구분하는 것
// typeof, instanceof, in 연산자를 사용해 타입범위를 좁히는 것

// 3가지 타입 중 2가지는 가드(막는다)
const var1: string|number|boolean = 'hello';
if (typeof var1 === 'string') {
    console.log(var1.toUpperCase());    
}

console.log();

// 타입가드를 위해 타입단언을 사용하게 되면 실행시 오류를 피할 수 없다
function func1(param1: string|number|boolean): void {
    console.log((param1 as number).toFixed(2));
}
func1(3.1415);
// func1('hello'); // error

console.log();

// instanceof를 활용한 객체타입의 타입가드
interface Bird {
    name: string;
}
function Bird(name: string): void {
    this.name = name;
}
interface Mammal {
    name: string;
}
function Mammal(name: string): void {
    this.name = name;
}
const bird: Bird = new Bird('독수리');
if (bird instanceof Bird) {
    console.log(bird.name);
}
// if (bird instanceof Mammal) {
//     console.log(bird.name);
// }

console.log();

// in 연산자를 활용한 타입가드
interface Book {
    name: string;
    author: string;
}
interface Lecture {
    name: string;
    tutor: string;
}
const book: Book = {name: 'typescript', author: '마소'};
if ('author' in book) {
    console.log(book);    
}
// if ('tutor' in book) {
//     console.log(book);    
// }

// 타입가드 함수 (is 사용)
// 두개 이상의 타입이 같은 프라퍼티를 가지고 있으면 in 연산자로
// 타입가드가 불가능 하므로 그럴때는 타입가드 함수를 사용해야 함
interface Hong {
    name: string;
    age: number;
}
interface Park {
    name: string;
    address: string;
}
function isHongOrPark(someone: Hong | Park): someone is Hong {
    return (someone as Hong).age !== undefined;
}

// 구별된유니언타입 (discriminated unions)
// 두개 이상의 타입이 같은 이름의 프라퍼티만 가지고 있을때 프라퍼티의 값으로 타입가드
interface Designer {
    name: string,
    age: number,
    jobName: 'designer'
}
const designer: Designer = {
  name: '홍길순',
  age: 20,
  jobName: 'designer'  
};
interface Programmer {
    name: string,
    age: number,
    jobName: 'programmer'
}
const programmer: Programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'  
  };
  if (designer.jobName==='designer') {
    console.log(designer.jobName);
}
if (programmer.jobName==='programmer') {
    console.log(programmer.jobName);
}

console.log();
















