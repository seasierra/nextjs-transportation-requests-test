import { FC } from "react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { IRequest } from "@/types";

const parcelTypes = ["gadgets", "drinks", "clothes", "medicines", "other"];

export const PackageForm: FC<{
  orderType: "delivery" | "order";
  onSubmit: (request: IRequest) => void;
  initialValues?: IRequest;
}> = ({ orderType, onSubmit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequest>({ mode: "onBlur", defaultValues: initialValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <Input
          defaultValue={initialValues?.from}
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
          defaultValue={initialValues?.to}
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
          <Select
            defaultSelectedKeys={
              initialValues?.parcelType ? [initialValues?.parcelType] : []
            }
            label="Type of parcel"
            {...register("parcelType")}
          >
            {parcelTypes.map((type) => (
              <SelectItem key={type} value={type} className="text-white">
                {type}
              </SelectItem>
            ))}
          </Select>
        )}
        <Input
          defaultValue={initialValues?.dispatchDate}
          type="date"
          label="Date of dispatch"
          {...register("dispatchDate")}
        />
        {orderType === "order" && (
          <Textarea
            defaultValue={initialValues?.parcelDescription}
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
