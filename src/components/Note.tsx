import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useNote } from "./NoteLayout";
import ReactMarkdown from "react-markdown";

interface NoteProps {}

const Note: FunctionComponent<NoteProps> = () => {
  const note = useNote();
  return (
    <>
      <div className="flex flex-col gap-6 m-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl">{note.title}</h1>
            {note.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {note.tags.map((tag) => (
                  <span
                    className="p-0.5 bg-blue-600 rounded-md text-white text-xs"
                    key={tag.id}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="space-x-2">
            <Link to={`/${note.id}/edit`}>
              <button className="p-2 bg-blue-800 rounded-md text-white border">
                Edit
              </button>
            </Link>
            <button className="p-2 border border-red-500 text-red-500 rounded-md">
              Delete
            </button>
            <Link to="..">
              <button className="p-2 border rounded-md">Back</button>
            </Link>
          </div>
        </div>
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </>
  );
};

export default Note;