import { IRequest } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { DeleteIcon } from "./ui/icons/DeleteIcon";
import { EditIcon } from "./ui/icons/EditIcon";
import { useAsyncList } from "@react-stately/data";

const columns: {
  key: keyof IRequest | "actions";
  label: string;
  allowSorting?: boolean;
}[] = [
  {
    key: "orderType",
    label: "TYPE",
  },
  {
    key: "from",
    label: "FROM",
  },
  {
    key: "to",
    label: "TO",
  },
  {
    key: "parcelType",
    label: "TYPE OF PARCEL",
  },
  {
    key: "dispatchDate",
    label: "DATE OF DISPATCH",
    allowSorting: true,
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export const RequestsTable: React.FC<{ list: IRequest[] }> = ({ list }) => {
  let requests = useAsyncList<IRequest>({
    async load() {
      return {
        items: list,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          if (sortDescriptor.direction === "ascending")
            return (
              new Date(b.dispatchDate).getTime() -
              new Date(a.dispatchDate).getTime()
            );

          return (
            new Date(a.dispatchDate).getTime() -
            new Date(b.dispatchDate).getTime()
          );
        }),
      };
    },
  });

  return (
    <Table
      sortDescriptor={requests.sortDescriptor}
      onSortChange={requests.sort}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key} allowsSorting={column.allowSorting}>
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="No requests to show">
        {requests.items.map((row) => (
          <TableRow key={row.id}>
            {(columnKey) => {
              if (columnKey === "actions") {
                return (
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit request">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete request">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                );
              }

              return (
                <TableCell className="capitalize">
                  {getKeyValue(row, columnKey)}
                </TableCell>
              );
            }}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
