import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/categories/categoryAction";
import { CustomInput } from "../custom-input/CustomInput";

export const ProductForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [form, setForm] = useState({});

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, []);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") value = checked ? "active" : "inactive";
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
      required: true,
      rows: 10,
    },
  ];

  return (
    <Form className="mb-5" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3">
        <Form.Check
          name="status"
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={handleOnChange}
        ></Form.Check>
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Select
          name="CatId"
          defaultValue="Choose..."
          required
          onChange={handleOnChange}
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
        <CustomInput key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
