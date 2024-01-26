/* 타입호환 (type compatabliity) */
// 좁은타입의 값이 넓은타입의 값이 되는 것은 OK
// 넓은타입의 값이 좁은타입의 값이 되는 것은 error

// 타입 호환의 범위
let str1: string = 'hi';
let str2: 'hello' = 'hello';
str1 = str2; // string타입이 'hello'타입보다 넓은 타입이므로 OK
// str2 = str1; // 'hello'타입이 string타입보다 좁은 타입이므로 error

// 구조적 타이핑 (structural typing)
// 타입이 무엇인지가 중요한 것이 아니라 타입이 가지는 프라퍼티명과 프라퍼티타입이 중요
interface I1 {
    name: string
}
interface I2 {
    name: string
}
let i1: I1 = {name: '홍길동'};
let i2: I2 = {name: '강감찬'};
i1 = i2;
i2 = i1;

// 프라퍼티 타입이 다름
interface I3 {
    name: number
}
let i3: I3 = {name: 100};
// i1 = i3;
// i3 = i2;

// 프라퍼티 명이 다름
interface I4 {
    fullName: string
}
let i4: I4 = {fullName: '이순신'};
// i1 = i4;
// i4 = i2;

// 객체간 타입 호환
// 할당받는 측의 타입을 만족해야 호환
interface Animal {
    name: string;
}
interface Dog {
    name: string;
    sound: string;
}
interface Bird {
    name: string;
    leg: number;
}
let animal: Animal = {name: '동물'};
let dog: Dog = {name: '강아지', sound: '왈왈'};
let bird: Bird = {name: '새', leg: 2};
animal = dog;
animal = bird;
// dog = bird; // bird는 sound가 없다
// bird = dog; // dog는 leg이 없다
// dog = animal; // animal은 sound가 없다
// bird = animal; // animal은 leg가 없다

// 옵셔널을 활용한 타입호환
interface Dog2 {
    name: string;
    sound?: string;
}
interface Bird2 {
    name: string;
    leg?: number;
}
let dog2: Dog2 = {name: '강아지', sound: '왈왈'};
let bird2: Bird2 = {name: '새', leg: 2};
dog2 = bird2;
bird2 = dog2;

// 함수타입의 타입호환
let func1 = function(a:number, b:number): number {
    return a + b;
};
let func2 = function(a:number): number {
    return a;
}
func1 = func2; // func2의 파라미터를 잃지 않는다.
// func2 = func1; // func1의 파라미터를 읽는다.

// enum 타입은 같은 프라퍼티명과 값을 가진다해도 호환되지 않는다.
enum Enum1 {A, B, C};
enum Enum2 {A, B, C};
let e1: Enum1 = Enum1.A;
let e2: Enum2 = Enum2.A;
// e1 = e2;
// e2 = e1;

// 제네릭의 타입호환
// 제네릭은 사용되지 않으면 타입호환 여부를 따지지 않는다.
interface In1<T> {}
let in1: In1<string>;
let in2: In1<number>;
in1 = in2;
in2 = in1;

interface In2<T> {
    data: T
}
let in3: In2<string>;
let in4: In2<number>;
in3 = in4; // data는 string
in4 = in3; // data는 number


/* 타입 모듈 */
