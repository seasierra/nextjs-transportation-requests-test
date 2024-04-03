"use client";

import { DeleteIcon } from "@/components/ui/icons/DeleteIcon";
import { EditIcon } from "@/components/ui/icons/EditIcon";
import { IPackage } from "@/types";
import { getRequests } from "@/utils/db";
import { Tooltip } from "@nextui-org/react";
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

export default function Page({ params }: { params: { id: string } }) {
  const renderActions = useCallback;
  // const renderCell = React.useCallback((user, columnKey) => {
  //     const cellValue = user[columnKey];

  //     switch (columnKey) {
  //       case "from":
  //         return (

  //         );
  //       case "role":
  //         return (
  //           <div className="flex flex-col">
  //             <p className="text-bold text-sm capitalize">{cellValue}</p>
  //             <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
  //           </div>
  //         );

  //       case "actions":
  //   return (
  // <div className="relative flex items-center gap-2">
  //   <Tooltip content="Edit request">
  //     <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
  //       <EditIcon />
  //     </span>
  //   </Tooltip>
  //   <Tooltip color="danger" content="Delete user">
  //     <span className="text-lg text-danger cursor-pointer active:opacity-50">
  //       <DeleteIcon />
  //     </span>
  //   </Tooltip>
  // </div>
  //   );
  //       default:
  //         return cellValue;
  //     }
  //   }, []);

  // const rows = ["From"];

  const columns: { key: keyof IPackage | "actions"; label: string }[] = [
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

  const rows = getRequests();

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
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
}
