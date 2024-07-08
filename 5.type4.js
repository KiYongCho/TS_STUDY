"use strict";
/* 타입호환 (type compatabliity) */
// 좁은타입의 값이 넓은타입의 값이 되는 것은 OK
// 넓은타입의 값이 좁은타입의 값이 되는 것은 error
// 타입 호환의 범위
let str1 = 'hi';
let str2 = 'hello';
str1 = str2; // string타입이 'hello'타입보다 넓은 타입이므로 OK
let i1 = { name: '홍길동' };
let i2 = { name: '강감찬' };
i1 = i2;
i2 = i1;
let i3 = { name: 100 };
let i4 = { fullName: '이순신' };
let animal = { name: '동물' };
let dog = { name: '강아지', sound: '왈왈' };
let bird = { name: '새', leg: 2 };
animal = dog;
animal = bird;
let dog2 = { name: '강아지', sound: '왈왈' };
let bird2 = { name: '새', leg: 2 };
dog2 = bird2;
bird2 = dog2;
// 함수타입의 타입호환
let func1 = function (a, b) {
    return a + b;
};
let func2 = function (a) {
    return a;
};
func1 = func2; // func2의 파라미터를 잃지 않는다.
// func2 = func1; // func1의 파라미터를 읽는다.
// enum 타입은 같은 프라퍼티명과 값을 가진다해도 호환되지 않는다.
var Enum1;
(function (Enum1) {
    Enum1[Enum1["A"] = 0] = "A";
    Enum1[Enum1["B"] = 1] = "B";
    Enum1[Enum1["C"] = 2] = "C";
})(Enum1 || (Enum1 = {}));
;
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
    Enum2[Enum2["B"] = 1] = "B";
    Enum2[Enum2["C"] = 2] = "C";
})(Enum2 || (Enum2 = {}));
;
let e1 = Enum1.A;
let e2 = Enum2.A;
let in1;
let in2;
in1 = in2;
in2 = in1;
let in3;
let in4;
in3 = in4; // data는 string
in4 = in3; // data는 number
