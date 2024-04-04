import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import { useRequests } from "../RequestsProvider";
import { PackageForm } from "../PackageForm";
import { useMemo } from "react";
import { ListIcon } from "../ui/icons/ListIcon";
import { RequestsTable } from "./RequestsTable";
import { EditIcon } from "../ui/icons/EditIcon";

export const MatchingRequests: React.FC<{ requestId: string }> = ({
  requestId,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const requests = useRequests();

  const matchingList = useMemo(() => {
    const currentRequest = requests.getOne(requestId);

    const filteredOrderType =
      currentRequest?.orderType === "delivery" ? "order" : "delivery";

    const datePast = (a: string, b: string) =>
      new Date(a).getTime() > new Date(b).getTime();

    return requests.list.filter(
      (r) =>
        r.orderType === filteredOrderType &&
        r.from === currentRequest?.from &&
        r.to === currentRequest?.to &&
        datePast(r.dispatchDate, currentRequest?.dispatchDate)
    );
  }, [requestId, requests]);

  return (
    <>
      <Tooltip content="Matching requests">
        <button
          className="text-lg text-default-400 cursor-pointer active:opacity-50"
          onClick={onOpen}
        >
          <ListIcon />
        </button>
      </Tooltip>

      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Matching requests
          </ModalHeader>
          <ModalBody>
            <RequestsTable list={matchingList} isMatchingRequests />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
