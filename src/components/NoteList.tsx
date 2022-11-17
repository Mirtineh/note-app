import { FunctionComponent, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ReactSelect from "react-select/creatable";
import { Note, Tag } from "../App";
import NoteCard from "./NoteCard";

interface NoteListProps {
  availableTags: Tag[];
  notes: Note[];
}

const NoteList: FunctionComponent<NoteListProps> = ({
  availableTags,
  notes,
}) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        title === "" ||
        (note.title.toLowerCase().includes(title.toLowerCase()) &&
          (tags.length === 0 ||
            tags.every((tag) =>
              note.tags.some((noteTag) => noteTag.id === tag.id)
            )))
      );
    });
  }, [title, tags, notes]);
  return (
    <>
      <div className="max-w-md mx-auto my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">Notes</h1>
          <div className="space-x-2">
            <Link to="/new">
              <button className="p-2 bg-blue-700 rounded-md text-white border">
                Create
              </button>
            </Link>
            <button className="p-2 border rounded-md">Edit Tags</button>
          </div>
        </div>
        <form className="flex space-x-4 my-4 items-center">
          <label className="basis-1/2">
            <span>Title</span>
            <input
              type="text"
              className="w-full rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="basis-1/2">
            <span>Tags</span>
            <ReactSelect
              value={tags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              options={availableTags.map((tag) => {
                return { label: tag.label, value: tag.id };
              })}
              onChange={(tags) => {
                setTags(
                  tags.map((tag: any) => {
                    return { id: tag.value, label: tag.label };
                  })
                );
              }}
              isMulti
            />
          </label>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              id={note.id}
              title={note.title}
              tags={note.tags}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
