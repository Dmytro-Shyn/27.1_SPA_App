import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gray-900 p-8 w-full flex items-center justify-between text-white">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        <span role="img" aria-label="globe">
          🌐
        </span>{" "}
        Page not Found
      </h1>
      <nav className="flex gap-6">
        <Link to="/" className="text-blue-400 hover:underline">
          Main
        </Link>
        <Link to="/about" className="text-blue-400 hover:underline">
          About
        </Link>
        <Link to="/users" className="text-blue-400 hover:underline">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default Main;
