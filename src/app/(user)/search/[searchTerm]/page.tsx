import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {
  // error.tsxが表示される
  // throw new Error("something went wrong");

  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERPAPI_KEY}`
  );
  const data: SearchResult = await res.json();
  return data;
};

async function SearchResult({ params: { searchTerm } }: PageProps) {
  const searchResult = await search(searchTerm);
  return (
    <div>
      <p className={`text-gray-700 text-xs`}>searched for {searchTerm}</p>
      <ol className={`space-y-5 p-5`}>
        {searchResult.organic_results.map((result) => {
          return (
            <li key={result.position}>
              <p className={`font-semibold`}>{result.title}</p>
              <p>{result.snippet}</p>
              <Link href={result.link}>{result.link}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default SearchResult;
