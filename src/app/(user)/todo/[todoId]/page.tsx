import React from "react";
import { notFound } from "next/navigation";

import type { ITodo } from "../TodoList";

// export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // server side rendering
    // { cache: "no-cache" }
    // static side generation
    // { cache: "force-cache" }
    // incremental static regeneration
    { next: { revalidate: 60 } }
  );
  const todo: ITodo = await res.json();
  return todo;
};

async function Todo(props: PageProps) {
  const todo = await fetchTodo(props.params.todoId);

  if (!todo.id) return notFound();
  return (
    <div className={`bg-blue-50 rounded-lg shadow-sm`}>
      Todo
      <p>id: {props.params.todoId}</p>
      <p>id fetched: {todo.id}</p>
      <p>title: {todo.title}</p>
      <input type="checkbox" value={todo.completed ? 1 : 0} />
    </div>
  );
}

export default Todo;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todoArray: ITodo[] = await res.json();

  const trimmedTodoArray = todoArray.splice(0, 10);
  return trimmedTodoArray.map((todo) => ({ todoId: todo.id.toString() }));
  // return todoArray.map((todo) => ({ todoId: todo.id}));
}
