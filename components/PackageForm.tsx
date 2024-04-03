import { FC } from "react";
import { FormSelect } from "./fields/FormSelect";
import { Input, Textarea } from "@nextui-org/react";

export const PackageForm: FC<{ orderType: "delivery" | "order" }> = ({
  orderType,
}) => {
  return (
    <form>
      <div className="flex flex-col gap-3">
        <Input
          isRequired
          label="The city from which the parcel is sent"
          className="max-w-xs"
        />
        <Input
          isRequired
          label="The city to which the parcel is sent"
          className="max-w-xs"
        />
        {orderType === "order" && (
          <FormSelect
            label="Type of parcel"
            items={["gadgets", "drinks", "clothes", "medicines", "other"]}
          />
        )}
        <Input type="date" label="Date of dispatch" className="max-w-xs" />
        {orderType === "order" && (
          <Textarea
            label="Parcel description "
            placeholder="Enter your description"
            className="max-w-xs"
          />
        )}
      </div>
    </form>
  );
};
