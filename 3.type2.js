/* 인터페이스 */
// 객체타입을 정의할때 사용
var user1 = { name: '홍길동', age: 20 };
console.log(user1.name, user1.age);
// const user2: User = {name: 100, age: 30};
// console.log(user2.name, user2.age);
// 함수 파라미터와 리턴 타입으로 인터페이스 사용
function getUserInfo(user) {
    console.log(user.name, user.age);
    return user;
}
var user3 = getUserInfo({ name: '홍길동', age: 20 });
var user6 = { name: '홍길동' };
console.log(user6.name);
var user7 = { name: '홍길동', age: 30 };
console.log(user7.name, user7.age);
