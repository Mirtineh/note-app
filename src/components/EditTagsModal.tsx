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
                className=""
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
                  <div className="p-3 border rounded-md">
                    <FontAwesomeIcon
                      icon={faClose}
                      className="text-red-700"
                      onClick={() => onDeleteTag(tag.id)}
                    ></FontAwesomeIcon>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row-reverse">
              <button
                className="p-2 bg-blue-900 rounded-md mt-5 text-white"
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
