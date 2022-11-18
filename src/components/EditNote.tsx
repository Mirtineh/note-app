import { FunctionComponent } from "react";
import NoteForm from "../common/NoteForm";
import { NoteData, Tag } from "../App";
import { useNote } from "./NoteLayout";

interface EditNoteProps {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
}

const EditNote: FunctionComponent<EditNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}) => {
  const note = useNote();
  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-3xl mb-5">Edit Note</h1>
        <NoteForm
          title={note.title}
          content={note.content}
          tags={note.tags}
          onSubmit={(data) => onSubmit(note.id, data)}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </div>
    </>
  );
};

export default EditNote;
