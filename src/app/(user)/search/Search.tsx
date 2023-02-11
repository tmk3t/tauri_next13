"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchInput("");
    router.push(`/search/${searchInput}`);
  };
  return (
    <div>
      <h1>Search Component</h1>
      <form onSubmit={handleSearch}>
        {/* eを入れれば型がわかる */}
        {/* <form onSubmit={e => handleSearch}> */}
        <input
          type="text"
          value={searchInput}
          placeholder="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className={`bg-blue-500 text-white font-bold rounded-lg px-3 py-2`}
        >
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
