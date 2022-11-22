import { FunctionComponent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "../App";

interface EditTagsModalProps {
  availableTags: Tag[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
}

const EditTagsModal: FunctionComponent<EditTagsModalProps> = ({
  availableTags,
  isOpen,
  onClose,
  onUpdateTag,
  onDeleteTag,
}) => {
  return (
    <>
      <div
        className={
          "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto" +
          (isOpen ? "" : " hidden")
        }
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xl leading-6 font-mediu">Edit Tags</h3>

              <FontAwesomeIcon
                icon={faClose}
                className="p-3 rounded-md hover:cursor-pointer hover:bg-red-900 hover:text-white"
                onClick={() => onClose()}
              ></FontAwesomeIcon>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              {availableTags.map((tag) => (
                <div className="flex justify-between">
                  <input
                    className="basis-10/12 rounded-md"
                    type="text"
                    name="title"
                    defaultValue={tag.label}
                    onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                  />
                  <div className="p-3 border rounded-md hover:bg-red-600 hover:cursor-pointer group">
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-red-700 group-hover:text-white"
                      onClick={() => onDeleteTag(tag.id)}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row-reverse">
              <button
                className="p-2 bg-blue-800 rounded-md mt-5 text-white hover:bg-blue-900"
                onClick={() => onClose()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTagsModal;
