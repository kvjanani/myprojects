"use client";

import { useState } from "react";

export default function todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">
        Todo App
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}