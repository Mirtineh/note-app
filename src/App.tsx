import { useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import NoteList from "./components/NoteList";

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
export type RawNote = {
  id: string;
} & RawNoteData;
export type RawNoteData = {
  title: string;
  content: string;
  tagIds: string[];
};
function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onCreateNote({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }
  function addTag(tag: Tag) {
    setTags((prev) => [...prev, tag]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<NoteList availableTags={tags} notes={notesWithTags} />}
      />
      <Route
        path="/new"
        element={
          <NewNote
            onSubmit={onCreateNote}
            onAddTag={addTag}
            availableTags={tags}
          />
        }
      />
      <Route path="/:id">
        <Route index element={<h1>This is the default page</h1>} />
        <Route index path="edit" element={<h1>This is the edit page</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
