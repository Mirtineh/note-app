import { FunctionComponent } from "react";
import NoteForm from "../common/NoteForm";
import { NoteData, Tag } from "../App";

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
}

const NewNote: FunctionComponent<NewNoteProps> = ({
  onSubmit,
  onAddTag,
  availableTags,
}) => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-3xl mb-5">New Note</h1>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </div>
    </>
  );
};

export default NewNote;
