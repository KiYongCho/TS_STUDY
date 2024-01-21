/* 인터페이스 */
// 객체타입을 정의할때 사용

// 인터페이스 정의
interface User {
    name: string;
    age: number;
}
const user1: User = {name: '홍길동', age: 20};
console.log(user1.name, user1.age);

// const user2: User = {name: 100, age: 30};
// console.log(user2.name, user2.age);

console.log();

// 함수 파라미터와 리턴 타입으로 인터페이스 사용
function getUserInfo(user: User): User {
    console.log(user.name, user.age);
    return user;
}
const user3: User = getUserInfo({name: '홍길동', age: 20});

// const user4: User = getUserInfo({name: '홍길동', age: '20'});
// const user5: {name: string, age: string} = getUserInfo({name: '홍길동', age: '20'});

console.log();

// 옵션 속성
interface User2 {
    name: string;
    age?: number;
}
const user6: User2 = {name: '홍길동'};
console.log(user6.name);
const user7: User2 = {name: '홍길동', age: 30};
console.log(user7.name, user7.age);

console.log();

// 인터페이스 상속
interface Animal {
    name: string;
    legCnt: number;
}
interface Bird extends Animal {
    hasWing: boolean;
}
const bird1: Bird = {name: '독수리', legCnt: 2, hasWing: true};
console.log(bird1);

// const bird2: Bird = {name: '독수리', legCnt: 2};
// console.log(bird2);

// 객체/배열 인덱싱 타입
// 인덱싱 타입을 선언하면 타입에 맞는 여러 프라퍼티의 정의를 한번에 할 수 있다.

console.log();

// 객체 프라퍼티명으로 숫자가 옴
interface Student {
    [key: number]: string;
}
const student: Student = {1:'홍길동', 2:'강감찬'};
console.log(student);

console.log();

// 객체 프라퍼티명으로 문자가 옴
interface Student2 {
    [key: string]: string;
}
const student2: Student2 = {'1':'홍길동', '2':'강감찬'};
console.log(student2);

console.log();

// 배열 인덱스로 숫자가 옴
interface Student3 {
    [index: number]: string;
}
const student3: Student3 = ['홍길동', '강감찬'];
console.log(student3);

console.log();


// 배열 인덱스로 문자가 옴
// interface Student4 {
//     [index: string]: string;
// }
// const student4: Student4 = ['홍길동', '강감찬'];
// console.log(student4);


/* 유니언(union) 타입 */
// 여러 타입 중 하나
let un: string | number;
console.log(un = '홍길동');
console.log(un = 100);
// console.log(un = false);

// 함수 파라미터로 유니언 타입 선언
interface Pen {
    name: string;
    color: string;
}
interface Note {
    name: string;
    pages: number;
}
// type guard
function getInfo(obj: Pen | Note) {
    // console.log(obj.name, obj.color);
    // console.log(obj.name, obj.pages);
    if ('color' in obj) {
        console.log(obj.name, obj.color);
    }
    if ('pages' in obj) {
        console.log(obj.name, obj.pages);
    }
}
const pen = {name: '볼펜', color: '파랑'};
const note = {name: '연습장', pages: 100};
getInfo(pen);
getInfo(note);

console.log();

/* 인터섹션(intersection) 타입 */
// 타입 2개 이상을 하나로 합쳐서 사용
interface I1 {
    name: string;
}
interface I2 {
    age: number;
}
interface I3 {
    hobby: string[];
}
const is1: I1 & I2 & I3 = {name: '홍길동', age: 30, hobby: ['축구', '농구']};
console.log(is1);
// const is2: I1 & I2 & I3 = {name: '홍길동', age: 30};
// const is3: I1 & I2 & I3 = {name: '홍길동', hobby: ['축구', '농구']};

console.log();


/* 타입 별칭(alias) */
// - 타입에 대한 별도의 이름
// - 타입코드를 줄일 목적으로 사용
// - 인터페이스는 객체의 타입을 정의하고 상속이 가능하나
//   타입별칭은 모든 타입들을 정의하고 상속이 불가
type myStr = string;
const str: myStr = '홍길동';

type myNum = number;
const num: myNum = 30;

type myType = string | number | boolean;
const mt1: myType = '홍길동';
const mt2: myType = 30;
const mt3: myType = false;
console.log(mt1, mt2, mt3);

console.log();

// 인터페이스의 선언 병합 (declaration merging)
// 인터페이스는 같은 이름으로 선언하면 프라퍼티들이 합쳐짐
// 반면, 타입별칭은 같은이름으로 선언시 에러
interface Int1 {
    name: string;
}
interface Int1 {
    age: number;
}
const int1: Int1 = {name: '홍길동', age: 30};
console.log(int1);

// type type1 {
//     name: string;
// }
// type type1 {
//     name: number;
// }

console.log();


/* 이넘 (enum)  타입 */
// 여러개의 상수를 정의하기 위한 타입
// 기본적으로 선언된 순서대로 0, 1, 2 ... 값을 가짐
enum Planet {
    MERCURY,
    VENUS,
    EARTH,
    MARS    
}
const earth = Planet.EARTH;
const mars = Planet.MARS;
console.log(earth, mars);

/*
"use strict";
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS";
})(Planet || (Planet = {}));
*/

// 초기값 할당
enum Planet2 {
    MERCURY = 0,
    VENUS = 1,
    EARTH = 2,
    MARS = 3    
}
enum Planet3 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '지구',
    MARS = '화성'    
}

// const enum
// JS로 변환되는 코드의 양을 줄일 수 있다.
const enum Planet4 {
    MERCURY = '수성',
    VENUS = '금성',
    EARTH = '지구',
    MARS = '화성'    
}
























