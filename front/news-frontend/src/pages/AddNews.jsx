import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/news", { title, content });
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Add News</h1>
      <form onSubmit={submit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
