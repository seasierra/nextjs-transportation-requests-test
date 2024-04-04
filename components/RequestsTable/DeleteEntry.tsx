import { Tooltip } from "@nextui-org/react";
import { DeleteIcon } from "../ui/icons/DeleteIcon";
import { useRequests } from "../RequestsProvider";

export const DeleteEntry: React.FC<{ requestId: string }> = ({ requestId }) => {
  const requests = useRequests();

  return (
    <Tooltip color="danger" content="Delete request">
      <button
        onClick={() => requests.remove(requestId)}
        className="text-lg text-danger cursor-pointer active:opacity-50"
      >
        <DeleteIcon />
      </button>
    </Tooltip>
  );
};
