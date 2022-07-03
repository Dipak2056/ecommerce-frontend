import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../custom-input/CustomInput";
import { MyVerticallyCenteredModal } from "../modal/Modal";

const initialState = {
  status: "inactive",
  name: "",
  description: "",
};
export const EditPaymentMethodForm = () => {
  const dispatch = useDispatch();
  const { selectedPaymentMethod } = useSelector(
    (state) => state.paymentMethods
  );
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
  };
  useEffect(() => {
    setForm(selectedPaymentMethod);
    console.log(form);
  }, [selectedPaymentMethod]);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, updatedAt, __v, ...rest } = form;
    console.log(rest);
    // dispatch(postPaymentMethodAction(form));
  };
  const inputfields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      value: form.name,
    },

    {
      name: "description",
      label: "Description",
      type: "text",
      as: "textarea",
      required: true,
      value: form.description,
    },
  ];
  return (
    <div>
      <MyVerticallyCenteredModal title="Edit payment methods">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              name="status"
              label="status"
              onChange={handleOnChange}
            ></Form.Check>
          </Form.Group>
          {inputfields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
          <Form.Group className="mb-3">
            <Button variant="success" type="submit">
              Add Payment Method
            </Button>
          </Form.Group>
        </Form>
      </MyVerticallyCenteredModal>
    </div>
  );
};
