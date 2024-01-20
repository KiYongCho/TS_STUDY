interface Todo {
    id : number;
    title: string;
    completed: boolean;
}

// 배열로 정의
const todos: Todo[] = [
    {id: 1, title: '아침먹기', completed: true},
    {id: 2, title: 'TS공부', completed: true},
    {id: 3, title: '점심먹기', completed: false}
];

// JSON