var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var todos = [
    { id: 1, title: "아침먹기", completed: true },
    { id: 2, title: "TS공부", completed: true },
    { id: 3, title: "점심먹기", completed: false }
];
// 목록
function getTodos() {
    return todos;
}
// 조회
function getTodo(paramId) {
    return (todos.filter(function (todo) { return todo.id === paramId; }))[0];
}
// 등록
function registTodo(paramTodo) {
    if (!isExistedTodo(paramTodo.id)) {
        todos.push(paramTodo);
    }
}
// 수정
function updateTodo(paramTodo) {
    var id = paramTodo.id;
    if (isExistedTodo(id)) {
        return __spreadArray(__spreadArray([], deleteTodo(id), true), [paramTodo], false);
    }
    else {
        return todos;
    }
}
// 삭제
function deleteTodo(paramId) {
    if (isExistedTodo(paramId)) {
        return todos = todos.filter(function (todo) { return todo.id !== paramId; });
    }
    else {
        return todos;
    }
}
// id 존재 여부 확인
function isExistedTodo(paramId) {
    return todos.some(function (todo) { return todo.id === paramId; });
}
// 목록
console.log(getTodos());
console.log();
// 조회
console.log(getTodo(1));
console.log();
// 등록
registTodo({ id: 4, title: '저녁먹기', completed: false });
console.log(getTodos());
console.log();
// 등록 (id 중복 오류)
/*
registTodo({id: 4, title: '저녁먹기', completed: false});
console.log(getTodos());
console.log();
*/
// 수정
console.log(updateTodo({ id: 4, title: '저녁도안먹고공부하기', completed: false }));
console.log();
// 삭제
console.log(deleteTodo(4));
console.log();
console.log(deleteTodo(2));
console.log();
