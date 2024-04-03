"use client";

import { FC } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IPackageForm {
  from: string;
  to: string;
  parcelType: string;
  dispatchDate: string;
  parcelDescription: string;
}

const parcelTypes = ["gadgets", "drinks", "clothes", "medicines", "other"];

export const PackageForm: FC<{ orderType: "delivery" | "order" }> = ({
  orderType,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPackageForm>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<IPackageForm> = (data) =>
    console.log({ data, errors });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <Input
          isRequired
          label="City from"
          description="The city from which the parcel is sent"
          isInvalid={errors.from?.type === "required"}
          errorMessage={
            errors.from?.type === "required" &&
            "Please enter the city from which the parcel is sent"
          }
          {...register("from", { required: true })}
        />
        <Input
          isRequired
          label="City to"
          description="The city to which the parcel is sent"
          isInvalid={errors.to?.type === "required"}
          errorMessage={
            errors.to?.type === "required" &&
            "Please enter the city to which the parcel is sent"
          }
          {...register("to", { required: true })}
        />
        {orderType === "order" && (
          <Select label="Type of parcel" {...register("parcelType")}>
            {parcelTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>
        )}
        <Input
          type="date"
          label="Date of dispatch"
          {...register("dispatchDate")}
        />
        {orderType === "order" && (
          <Textarea
            label="Parcel description"
            placeholder="Enter your description"
            {...register("parcelDescription")}
          />
        )}
        <div className="flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};
