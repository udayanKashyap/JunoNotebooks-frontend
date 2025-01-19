import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MyNote = () => {
  const location = useLocation();
  const { state } = location || {};
  const [note, setNote] = useState(state);
  const [noteChanged, setNoteChanged] = useState(false);

  // fetch the latest version of the note when reloaded
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios(
          `${import.meta.env.VITE_BASE_URL}/note?username=udayan&id=${state.id}`,
        );
        setNote(res.data);
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message);
      }
    };
    fetchNote();
  }, []);

  const handleChange = (e) => {
    console.log(note.id);
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
    setNoteChanged(true);
  };

  useEffect(() => {
    if (!noteChanged) return;
    setNoteChanged(false);
    const handleSave = async () => {
      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/note/update`, {
          username: note.authorUsername,
          note: note,
        });
      } catch (error) {
        if (error instanceof AxiosError) console.log(error.message);
      }
      console.log("Note content: ", note.content);
      console.log("note saved");
    };

    const autoSaveInterval = setTimeout(() => {
      handleSave();
    }, 2000);

    return () => {
      clearTimeout(autoSaveInterval);
    };
  }, [note]);

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 rounded-none shadow-md">
      <form className="h-full w-full flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b-4 border-b-gray-300 pb-4">
          <input
            className="w-full mr-4 text-4xl font-semibold text-black p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Untitled"
          />
          <input
            className="w-1/3 text-sm text-gray-800 bg-gray-100 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            id="category"
            name="category"
            value={note.category}
            onChange={handleChange}
            placeholder="Category"
          />
        </div>
        {/* Content Section */}
        <div className="flex-1 border-b border-b-gray-500 pb-4">
          <textarea
            className="w-full h-full text-xl text-gray-950 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="content"
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder=""
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default MyNote;
