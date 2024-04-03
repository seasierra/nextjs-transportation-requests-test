"use client";

import { DeleteIcon } from "@/components/ui/icons/DeleteIcon";
import { EditIcon } from "@/components/ui/icons/EditIcon";
import { IRequest } from "@/types";
import { getRequests } from "@/utils/db";
import { Button, Tooltip } from "@nextui-org/react";
import React, { useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useRequests } from "@/components/RequestsProvider";
import { Heading } from "@/components/ui/Heading";
import { useRouter } from "next/navigation";

const columns: { key: keyof IRequest | "actions"; label: string }[] = [
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
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export default function Page({ params }: { params: { id: string } }) {
  const requests = useRequests();
  const router = useRouter();

  return (
    <main className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Heading routeTo="/">{params.id}'s requests</Heading>
        <Button onClick={() => router.push(`/${params.id}/create`)}>Add</Button>
      </div>
      <Table>
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent="No requests to show">
          {requests.list.map((row) => (
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
    </main>
  );
}
