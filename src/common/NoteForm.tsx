import { FunctionComponent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";

interface NoteFormProps {
  onSubmit: (note: NoteData) => void;
}

const NoteForm: FunctionComponent<NoteFormProps> = ({ onSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      content: contentRef.current!.value,
      tags: [],
    });
  }
  return (
    <>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <label className="">
            <span>Title</span>
            <input
              ref={titleRef}
              className="w-full rounded-md"
              type="text"
              name="title"
              required
            />
          </label>
          <label className="">
            <span>Tags</span>
            <CreatableReactSelect
              value={tags.map((tag) => {
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
          <label className="col-span-2">
            <span>Body</span>
            <textarea
              ref={contentRef}
              className="w-full rounded-md"
              name=""
              id=""
              rows={10}
              required
            ></textarea>
          </label>
          <div className="col-span-2 justify-self-end space-x-4">
            <button className="bg-blue-600 rounded-md w-fit p-2" type="submit">
              Save
            </button>
            <Link to="..">
              <button className="bg-red-500 rounded-md p-2" type="button">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
