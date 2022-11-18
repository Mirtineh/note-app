import { FunctionComponent } from "react";

interface EditTagsModalProps {}

const EditTagsModal: FunctionComponent<EditTagsModalProps> = () => {
  return (
    <>
      <div className="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"></div>
    </>
  );
};

export default EditTagsModal;
