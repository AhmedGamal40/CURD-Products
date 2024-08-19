import Button from "./Button";

interface IConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  description?: string; // Optional description prop
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  description,
}: IConfirmModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 shadow-lg max-w-md w-full">
        <h3 className="text-lg font-semibold mb-4">{message}</h3>
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        <div className="flex justify-end space-x-2">
          <Button className="bg-gray-500" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-red-600" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
