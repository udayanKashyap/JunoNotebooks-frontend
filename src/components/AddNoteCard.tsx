import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNoteCard = () => {
  const navigate = useNavigate();
  const handleNavigate = async () => {
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/note/`, {
      username: "udayan",
      title: "",
      details: "",
      content: "",
      category: "",
    });
    navigate("/note", { state: res.data });
  };
  return (
    <div
      className="h-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      onClick={handleNavigate}
    >
      <span className="text-4xl text-gray-400 font-bold">+</span>
    </div>
  );
};

export default AddNoteCard;
