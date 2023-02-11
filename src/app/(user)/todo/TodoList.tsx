import Link from "next/link";
import { resolve } from "path";
import React from "react";

export interface ITodo {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
const fetchTodoArray = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todoArray: ITodo[] = await res.json();
  return todoArray;
};
const fetchTodoArrayWithLoading = async () => {
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todoArray: ITodo[] = await res.json();
  return todoArray;
};
async function TodoList() {
  const todoArray = await fetchTodoArrayWithLoading();
  return (
    <div className={`ml-2 my-2`}>
      TodoList
      <ul>
        {todoArray.map((todo) => {
          // ブラウザで呼ばれずターミナルで呼ばれる。サーバーサイドなので
          // console.log('todo.completed:', todo.completed);
          return (
            <li key={todo.id}>
              <Link href={`/todo/${todo.id}`}>{todo.id}</Link>
              <p>{todo.title}</p>
              <p>completed: {todo.completed ? "true" : "false"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
