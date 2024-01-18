/* TS의 type */

// 타입표기(:)  : type annotation
let greeting: string = 'hello';

// string
let str: string = 'hello';
// str = 10;

// number
let num: number = 10;
// num = '안녕';

// boolean
let bool: boolean = true;
// bool = 100;

// object
let obj: object = {
    name: '홍길동',
    age: 20
};
// obj = '홍길동';

// array
let arr1: string[] = ['홍길동', '강감찬', '이순신'];
let arr2: Array<string> = ['홍길동', '강감찬', '이순신']; // generic

// tuple
// 고정 길이이며 요소타입이 미리 정의된 배열
let tuple: [string, number] = ['홍길동', 20];

// any
// 아무타입이나 허용
let anyType: any = 100;
anyType = '홍길동';

// null
let nul: null = null;
// nul = 1;

// undefined
let und: undefined = undefined;
// und = 1;

// function
// 파라미터와 반환타입에 타입 지정
function getStr(str: string): string {
    return 'hi ' + str;
}
getStr('홍길동');

// 인자의 개수와 파라미터의 개수가 같아야 함
// void : 반환값이 없음
function getInfo(name: string, age: int, hobby: string): void {
    console.log(name, age, hobby);
}
getInfo('홍길동', 20, '축구');
// getInfo('홍길동', 20);

console.log();

// optional parameter (파라미터에 해당하는 인자가 없을때 ?)
function printInfo(name: string, age: int, hobby?: string): void {
    console.log(name, age, hobby);
}
printInfo('홍길동', 20, '축구');
printInfo('홍길동', 20);



