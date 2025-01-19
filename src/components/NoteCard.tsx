import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoteCard = ({
  data,
  onDelete,
}: {
  data: {
    id: string;
    title: string;
    details: string;
    content: string;
    category: string;
    created_at: Date;
    modified_at: Date;
    authorUsername: string;
  };
  onDelete: () => void;
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = () => {
    navigate("/note", { state: data });
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/note?id=${data.id}&username=${data.authorUsername}`,
      );
      onDelete();
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.message);
    }
  };

  return (
    <div
      className="relative h-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-100"
      onClick={handleNavigate}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          {data.title === "" ? "Untitled" : data.title}
        </h1>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
          {data.category}
        </span>
      </div>
      <div className="h-full mb-4 pb-2">
        <p className="text-gray-700">{data.content}</p>
      </div>
      {isHovered && (
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-red-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-red-600"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
