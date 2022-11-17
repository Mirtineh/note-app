import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { spacing } from "react-select/dist/declarations/src/theme";
import { Tag } from "../App";

interface NoteCardProps {
  id: string;
  title: string;
  tags: Tag[];
}

const NoteCard: FunctionComponent<NoteCardProps> = ({ id, title, tags }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="flex justify-center items-center w-full h-full border rounded-md p-4">
          <div className="flex flex-col space-y-3">
            <span>{title}</span>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {tags.map((tag) => (
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
        </div>
      </Link>
    </>
  );
};

export default NoteCard;
