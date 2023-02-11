import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className={`p-5 bg-blue-300`}>
      <p className={`font-bold text-gray-700`}>Header</p>
      <ul className={`flex space-x-2`}>
        <li>
          <Link
            href="/"
            className={`px-2 py-1 bg-white text-blue-500 rounded-xl`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="todo"
            className={`px-2 py-1 bg-white text-blue-500 rounded-xl`}
          >
            todo
          </Link>
        </li>
        <li>
          <Link
            href="search"
            className={`px-2 py-1 bg-white text-blue-500 rounded-xl`}
          >
            search
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
