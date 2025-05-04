import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [todo, setTodo] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodo(data);
    } catch (err) {
      console.error("Error while fetching users", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className=" py-8 w-full flex flex-col  justify-between">
      <h1 className="title-theme text-4xl font-bold flex items-center gap-2">
        <span role="img" aria-label="globe">
          🌐
        </span>{" "}
        Main
      </h1>
      <div className="py-8">
        <ul className="space-y-4">
          {todo.length > 0 ? (
            todo.map((todo) => (
              <li
                key={todo.id}
                className="second-bg-theme p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="support-text-theme"> Todo {todo.id}</p>
                    <h2 className="text-2xl font-semibold text-theme">
                      {todo.title}
                    </h2>
                  </div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded mr-3 cursor-default"
                  />
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-400">Loading todos...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Main;
