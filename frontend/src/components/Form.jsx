import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative inline-block">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-52 p-2 rounded-full shadow-md border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110 hover:bg-blue-700"
      >
        Go
      </button>
    </form>
  );
}
