/* 인터페이스 */
// 객체타입을 정의할때 사용
var user1 = { name: '홍길동', age: 20 };
console.log(user1.name, user1.age);
// const user2: User = {name: 100, age: 30};
// console.log(user2.name, user2.age);
console.log();
// 함수 파라미터와 리턴 타입으로 인터페이스 사용
function getUserInfo(user) {
    console.log(user.name, user.age);
    return user;
}
var user3 = getUserInfo({ name: '홍길동', age: 20 });
// const user4: User = getUserInfo({name: '홍길동', age: '20'});
// const user5: {name: string, age: string} = getUserInfo({name: '홍길동', age: '20'});
console.log();
var user6 = { name: '홍길동' };
console.log(user6.name);
var user7 = { name: '홍길동', age: 30 };
console.log(user7.name, user7.age);
console.log();
var bird1 = { name: '독수리', legCnt: 2, hasWing: true };
console.log(bird1);
// const bird2: Bird = {name: '독수리', legCnt: 2};
// console.log(bird2);
// 객체/배열 인덱싱 타입
// 인덱싱 타입을 선언하면 타입에 맞는 여러 프라퍼티의 정의를 한번에 할 수 있다.
console.log();
var student = { 1: '홍길동', 2: '강감찬' };
console.log(student);
console.log();
var student2 = { '1': '홍길동', '2': '강감찬' };
console.log(student2);
console.log();
var student3 = ['홍길동', '강감찬'];
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
var un;
console.log(un = '홍길동');
console.log(un = 100);
// type guard
function getInfo(obj) {
    // console.log(obj.name, obj.color);
    // console.log(obj.name, obj.pages);
    if ('color' in obj) {
        console.log(obj.name, obj.color);
    }
    if ('pages' in obj) {
        console.log(obj.name, obj.pages);
    }
}
var pen = { name: '볼펜', color: '파랑' };
var note = { name: '연습장', pages: 100 };
getInfo(pen);
getInfo(note);
console.log();
var is1 = { name: '홍길동', age: 30, hobby: ['축구', '농구'] };
console.log(is1);
// const is2: I1 & I2 & I3 = {name: '홍길동', age: 30};
// const is3: I1 & I2 & I3 = {name: '홍길동', hobby: ['축구', '농구']};
console.log();
var str = '홍길동';
var num = 30;
var mt1 = '홍길동';
var mt2 = 30;
var mt3 = false;
console.log(mt1, mt2, mt3);
console.log();
var int1 = { name: '홍길동', age: 30 };
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
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS";
})(Planet || (Planet = {}));
var earth = Planet.EARTH;
var mars = Planet.MARS;
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
var Planet2;
(function (Planet2) {
    Planet2[Planet2["MERCURY"] = 0] = "MERCURY";
    Planet2[Planet2["VENUS"] = 1] = "VENUS";
    Planet2[Planet2["EARTH"] = 2] = "EARTH";
    Planet2[Planet2["MARS"] = 3] = "MARS";
})(Planet2 || (Planet2 = {}));
var Planet3;
(function (Planet3) {
    Planet3["MERCURY"] = "\uC218\uC131";
    Planet3["VENUS"] = "\uAE08\uC131";
    Planet3["EARTH"] = "\uC9C0\uAD6C";
    Planet3["MARS"] = "\uD654\uC131";
})(Planet3 || (Planet3 = {}));
/* 클래스 */
// 타입스크립트에서는 프라퍼티들을 미리 정의해 주어야 한다.
// 생성자의 파라미터타입과 메서드의 반환타입을 정의해 주어야 한다.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var person1 = new Person('홍길동', 30);
console.log(person1);
console.log();
// 접근제어자 (access modifier) : public, private, protected
// public : 클래스내부/외부에서 언제나 접근 가능, public으로 선언 또는 아무것도 선언 안할때
// private : 클래스내부에서만 접근 가능
// protected : 클래스내부와 상속받은 클래스내부에서 접근 가능
// private의 실행결과까지도 접근제어자와 일치시키려면 #문법(ES2020)을 사용해야 함
/*
class Person2 {
    #name: string;
    age: number;
    constructor(name: string, age: number) {
        this.#name = name;
        this.age = age;
    }
    getName(): string {
        return this.#name;
    }
    getAge(): number {
        return this.age;
    }
}
const person2 = new Person2('홍길동', 30);
console.log(person2);

console.log();
*/
/* 제네릭 (generic) */
// - 타입을 사용시점에 정의하기 위한 문법
// - 제네릭을 사용하면 반복적인 타입선언을 줄일 수 있다.
// - any를 사용해도 어떤 타입이든 받을 수 있지만 에러방지, 코드자동완성과 같은
//   타입스크립트의 장점을 살릴 수 없다.
function getText(text) {
    return text;
}
console.log(getText('hi'));
console.log(getText(100));
console.log();
var animal1 = {
    name: '호랑이',
    body: { color: '얼룩덜룩', legCount: 4 }
};
console.log(animal1);
var animal2 = {
    name: '호랑이',
    body: { color: '얼룩덜룩', legCount: 4, sound: '어흥' }
};
console.log(animal2);
console.log();
// 제네릭 제약
function printName(name) {
    return name;
}
console.log(printName('홍길동'));
// console.log(printName(100));
console.log();
// extends : 뒤에 나오는 타입만 허용
// 제네릭을 이용하여 length 속성을 갖는 타입으로 제약
function lengthOnly(value) {
    return value.length;
}
console.log(lengthOnly('123'));
console.log(lengthOnly([1, 2, 3]));
// console.log(lengthOnly({a:1, b:2, c:3}));
console.log();
// 제네릭과 유니온 결합
function lengthOnly2(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value;
}
console.log(lengthOnly2('123'));
console.log(lengthOnly2(123));
// keyof : 객체의 프라퍼티키들을 추출해 문자열 유니언 타입으로 변환 (프라퍼티명과 같은 문자열들만 받겠다!)
function printKeys(value) {
    console.log(value);
}
printKeys('name');
printKeys('skill');
// printKeys('hobby');
