import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { EditIcon } from "../ui/icons/EditIcon";
import { useRequests } from "../RequestsProvider";
import { PackageForm } from "../PackageForm";
import { useMemo } from "react";

export const EditEntry: React.FC<{ requestId: string }> = ({ requestId }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const requests = useRequests();

  const request = useMemo(
    () => requests.getOne(requestId),
    [requestId, requests]
  );

  return (
    <>
      <Tooltip content="Edit request">
        <button
          className="text-lg text-default-400 cursor-pointer active:opacity-50"
          onClick={onOpen}
        >
          <EditIcon />
        </button>
      </Tooltip>
      {request && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Edit request
                </ModalHeader>
                <ModalBody>
                  <PackageForm
                    orderType={request.orderType}
                    onSubmit={(r) => {
                      requests.edit(r);
                      onClose();
                    }}
                    initialValues={request}
                  />
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
