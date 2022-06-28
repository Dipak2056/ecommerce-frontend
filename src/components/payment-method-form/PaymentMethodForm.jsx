import React from "react";
import { CustomInput } from "../custom-input/CustomInput";
import { MyVerticallyCenteredModal } from "../modal/Modal";

export const PaymentMethodForm = () => {
  return (
    <div>
      <MyVerticallyCenteredModal>
        <CustomInput />
      </MyVerticallyCenteredModal>
    </div>
  );
};
