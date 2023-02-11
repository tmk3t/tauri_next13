import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./Header";
import TodoList from "./todo/TodoList";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p className={`text-red-500`}>I am Home</p>
      <div>
        <div className={`flex space-x-2`}>
          <Suspense fallback={<p>Loading Todo</p>}>
            {/* @ts-ignore */}
            <TodoList />
          </Suspense>
          <Suspense fallback={<p>Loading Todo</p>}>
            {/* @ts-ignore */}
            <TodoList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
