import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import NoteCard from "../components/NoteCard";
import AddNoteCard from "../components/AddNoteCard";
import Navbar from "../components/Navbar";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    try {
      const res = await axios(
        `${import.meta.env.VITE_BASE_URL}/note/all?username=udayan`,
      );
      setNotes(res.data);
      console.log(res.data);
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.message);
    }
  };
  const reload = () => {
    fetchNotes();
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="p-4">
      <Navbar />
      <h1 className="text-xl font-bold mb-4">Your Notes</h1>
      <div className="min-h-80 h-80 flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="min-w-40 w-48 h-64 flex-shrink-0 bg-white p-2">
          <AddNoteCard />
        </div>
        {notes.map((item, key) => (
          <div
            key={key}
            className="min-w-80 w-96 h-64 flex-shrink-0 bg-white p-2"
          >
            <NoteCard data={item} onDelete={reload} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
