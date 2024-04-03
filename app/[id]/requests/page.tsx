"use client";

import { DeleteIcon } from "@/components/ui/icons/DeleteIcon";
import { EditIcon } from "@/components/ui/icons/EditIcon";
import { IRequest } from "@/types";
import { getRequests } from "@/utils/db";
import { Button, SortDescriptor, Tooltip } from "@nextui-org/react";
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
import { RequestsTable } from "@/components/RequestsTable";

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

export default function Page({ params }: { params: { id: string } }) {
  const requests = useRequests();
  const router = useRouter();

  return (
    <main className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Heading routeTo="/">{params.id}'s requests</Heading>
        <Button onClick={() => router.push(`/${params.id}/create`)}>Add</Button>
      </div>
      <RequestsTable list={requests.list} />
    </main>
  );
}
