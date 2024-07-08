"use strict";
// https://jsonplaceholder.typicode.com/todos 데이터 가져와서 Todo 해보기
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let todos;
function fetchJson() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('fetchJson Error! : ' + response.statusText);
        }
        return yield response.json();
    });
}
fetchJson().then(function (response) {
    return __awaiter(this, void 0, void 0, function* () {
        todos = yield response;
        todos = todos.map(todo => todo = { 'id': todo.id, 'title': todo.title, 'completed': todo.completed }).splice(0, 5);
        // 목록
        function getTodos() {
            return todos;
        }
        // 조회
        function getTodo(paramId) {
            return (todos.filter(todo => todo.id === paramId))[0];
        }
        // 등록
        function registTodo(paramTodo) {
            if (!isExistedTodo(paramTodo.id)) {
                todos.push(paramTodo);
            }
        }
        // 수정
        function updateTodo(paramTodo) {
            const id = paramTodo.id;
            if (isExistedTodo(id)) {
                return [...deleteTodo(id), paramTodo];
            }
            else {
                return todos;
            }
        }
        // 삭제
        function deleteTodo(paramId) {
            if (isExistedTodo(paramId)) {
                return todos = todos.filter(todo => todo.id !== paramId);
            }
            else {
                return todos;
            }
        }
        // id 존재 여부 확인
        function isExistedTodo(paramId) {
            return todos.some(todo => todo.id === paramId);
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
    });
});
