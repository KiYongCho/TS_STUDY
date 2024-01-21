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
