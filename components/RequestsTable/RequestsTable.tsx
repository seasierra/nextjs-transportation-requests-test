import { IRequest } from "@/types";
import {
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { EditEntry } from "./EditEntry";
import { useEffect, useMemo, useState } from "react";
import { DeleteEntry } from "./DeleteEntry";
import { MatchingRequests } from "./MatchingRequests";
import { sortByDate } from "@/utils/requests";

interface IColumn {
  key: keyof IRequest | "actions";
  label: string;
  allowSorting?: boolean;
}

const defaultColumns: IColumn[] = [
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

export const RequestsTable: React.FC<{
  list: IRequest[];
  isMatchingRequests?: boolean;
}> = ({ list, isMatchingRequests }) => {
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

  const columns: IColumn[] = useMemo(
    () =>
      isMatchingRequests
        ? [{ key: "userId", label: "USER" }, ...defaultColumns]
        : defaultColumns,
    [isMatchingRequests]
  );

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
                    <div className="relative flex justify-end items-center gap-2">
                      {!isMatchingRequests && row.orderType === "order" && (
                        <MatchingRequests requestId={row.id} />
                      )}
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
