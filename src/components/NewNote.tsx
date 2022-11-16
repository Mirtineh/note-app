import { FunctionComponent } from "react";
import NoteForm from "../common/NoteForm";

interface NewNoteProps {}

const NewNote: FunctionComponent<NewNoteProps> = () => {
  return (
    <>
      <h1>This is the new note page</h1>
      <NoteForm />
    </>
  );
};

export default NewNote;
