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

// 함수 파라미터와 리턴 타입으로 인터페이스 사용
function getUserInfo(user: User): User {
    console.log(user.name, user.age);
    return user;
}
const user3: User = getUserInfo({name: '홍길동', age: 20});

// const user4: User = getUserInfo({name: '홍길동', age: '20'});
// const user5: {name: string, age: string} = getUserInfo({name: '홍길동', age: '20'});

// 옵션 속성
interface User2 {
    name: string;
    age?: number;
}
const user6: User2 = {name: '홍길동'};
console.log(user6.name);
const user7: User2 = {name: '홍길동', age: 30};
console.log(user7.name, user7.age);

