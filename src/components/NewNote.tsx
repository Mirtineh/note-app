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
      <h1>This is the new note page</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
