"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { FC } from "react";

export const FormSelect: FC<{ items: string[]; label: string }> = ({
  items,
  label,
}) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select className="max-w-xs" label={label}>
        {items.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
