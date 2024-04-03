import { FC } from "react";
import { FormSelect } from "./fields/FormSelect";
import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";

export const PackageForm: FC<{ orderType: "delivery" | "order" }> = ({
  orderType,
}) => {
  return (
    <form>
      <div className="flex flex-col gap-3">
        <Input isRequired label="The city from which the parcel is sent" />
        <Input isRequired label="The city to which the parcel is sent" />
        {orderType === "order" && (
          <FormSelect
            label="Type of parcel"
            items={["gadgets", "drinks", "clothes", "medicines", "other"]}
          />
        )}
        <Input type="date" label="Date of dispatch" />
        {orderType === "order" && (
          <Textarea
            label="Parcel description "
            placeholder="Enter your description"
          />
        )}
        <div className="flex justify-end">
          <Button>Submit</Button>
        </div>
      </div>
    </form>
  );
};
