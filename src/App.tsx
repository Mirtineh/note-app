import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";

export interface NoteData {
  title: string;
  content: string;
  tags: Tag[];
}
export interface Tag {
  id: string;
  label: string;
}
export type Note = {
  id: string;
} & NoteData;
export type RawNoteData = {
  title: string;
  content: string;
  tags: string[];
};
function App() {
  const [notes, setNotes] = useLocalStorage<RawNoteData[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);
  return (
    <Routes>
      <Route path="/" element={<h1>This is the home</h1>} />
      <Route path="/new" element={<NewNote />} />
      <Route path="/:id">
        <Route index element={<h1>This is the default page</h1>} />
        <Route index path="edit" element={<h1>This is the edit page</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
