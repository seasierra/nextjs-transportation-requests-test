import { IRequest } from "@/types";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { DeleteIcon } from "../ui/icons/DeleteIcon";
import { EditEntry } from "./EditEntry";
import { useEffect, useMemo, useState } from "react";
import { DeleteEntry } from "./DeleteEntry";

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

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

const sortByDate = (
  requests: IRequest[],
  field: RequiredKeys<IRequest>,
  direction?: "ascending" | "descending"
) =>
  requests.sort((a, b) => {
    if (direction === "descending")
      return new Date(b[field]).getTime() - new Date(a[field]).getTime();

    return new Date(a[field]).getTime() - new Date(b[field]).getTime();
  });

export const RequestsTable: React.FC<{ list: IRequest[] }> = ({ list }) => {
  const [sortDirection, setSortDirection] = useState<
    SortDescriptor["direction"] | null
  >(null);
  const [requests, setRequests] = useState<IRequest[]>([]);

  useEffect(() => {
    if (sortDirection) {
      setRequests(sortByDate(list, "dispatchDate", sortDirection));
    } else {
      setRequests(sortByDate(list, "createdAt"));
    }
  }, [list, sortDirection]);

  const handleSort = (descriptor: SortDescriptor) => {
    setRequests(sortByDate(requests, "dispatchDate", descriptor.direction));
    setSortDirection(descriptor.direction);
  };

  return (
    <Table
      sortDescriptor={
        sortDirection
          ? { column: "dispatchDate", direction: sortDirection }
          : {}
      }
      onSortChange={handleSort}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key} allowsSorting={column.allowSorting}>
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="No requests to show">
        {requests.map((row) => (
          <TableRow key={row.id}>
            {(columnKey) => {
              if (columnKey === "actions") {
                return (
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <EditEntry requestId={row.id} />
                      <DeleteEntry requestId={row.id} />
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
