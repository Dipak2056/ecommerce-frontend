import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CustomInput } from "../custom-input/CustomInput";

export const ProductForm = () => {
  const { categories } = useSelector((state) => state.category);

  const inputFields = [
    {
      name: "name",
      lable: "Name",
      placeholder: "Product Name",
      required: true,
    },
    {
      name: "qty",
      lable: "QTY",
      placeholder: "Product quantity",
      type: "Number",
      required: true,
    },
    {
      name: "sku",
      lable: "SKU",
      placeholder: "Product unique text",
      required: true,
      placeholder: "SKU",
    },
    {
      name: "price",
      lable: "price",
      type: "number",
      placeholder: "Price",
      required: true,
    },
    {
      name: "salesPrice",
      lable: "salesPrice",
      type: "number",
      placeholder: "Product sales price",
      required: false,
    },
    {
      name: "salesStartDate",
      lable: "sales Start Date",
      placeholder: "sales Start Date",
      required: false,
      type: "date",
    },
    {
      name: "salesEndDate",
      lable: "sales Emd Date",
      placeholder: "sales End Date",
      required: false,
      type: "date",
    },
    {
      name: "description",
      as: "textarea",
      label: "Description",
      rows: 10,
    },
  ];

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          name="status"
          type="switch"
          id="custom-switch"
          label="Check this switch"
        ></Form.Check>
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Select
          name="parentCatId"
          defaultValue="Choose..."
          // onChange={handleOnChange}
        >
          <option value="">..select parent Category</option>
          {categories.map(
            (item) =>
              !item.parentCatId && (
                <option key={item._id} value={item._id}>
                  {item.catName}
                </option>
              )
          )}
        </Form.Select>
      </Form.Group>

      {inputFields.map((item, i) => (
        <CustomInput key={i} {...item} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
