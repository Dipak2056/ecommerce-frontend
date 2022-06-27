import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../pages/categories/categoryAction";
import { updateProductAction } from "../../pages/product/productAction";
import { CustomInput } from "../custom-input/CustomInput";

const initialState = {
  catId: null,
  name: "",
  sku: "",
  qty: 0,
  price: 0,
  salesPrice: 0,
  salesStartDate: null,
  salesEndDate: null,
  status: "inactive",
  description: "",
};
export const EditProductForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { selectedProduct } = useSelector((state) => state.products);
  const [form, setForm] = useState(initialState);
  console.log(selectedProduct);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
    setForm(selectedProduct);
  }, [selectedProduct]);

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
    const {
      __v,
      updatedAt,
      thumbnail,
      slug,
      sku,
      ratings,
      image,
      createdAt,
      ...rest
    } = form;
    dispatch(updateProductAction(rest));
  };
  const inputFields = [
    {
      name: "name",
      lable: "Name",
      placeholder: "Product Name",
      required: true,
      value: form.name,
    },

    {
      name: "qty",
      lable: "QTY",
      placeholder: "Product quantity",
      type: "Number",
      value: form.qty,

      required: true,
    },
    {
      name: "sku",
      lable: "SKU",
      placeholder: "Product unique text",
      required: true,
      value: form.sku,
      disabled: true,
    },
    {
      name: "price",
      lable: "price",
      type: "Number",
      placeholder: "Price",
      required: true,
      value: form.price,
    },
    {
      name: "salesPrice",
      lable: "salesPrice",
      type: "number",
      placeholder: "Product sales price",
      required: false,
      value: form.salesPrice,
    },
    {
      name: "salesStartDate",
      lable: "sales Start Date",
      placeholder: "sales Start Date",
      required: false,
      type: "date",
      value: form.salesStartDate ? form.salesStartDate.split("T")[0] : null,
    },
    {
      name: "salesEndDate",
      lable: "sales Emd Date",
      placeholder: "sales End Date",
      required: false,
      type: "date",
      value: form.salesEndDate ? form.salesEndDate.split("T")[0] : null,
    },
    {
      name: "description",
      as: "textarea",
      label: "Description",
      required: true,
      rows: 10,
      value: form.description,
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
          checked={form.status === "active"}
        ></Form.Check>
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Select
          name="catId"
          defaultValue="Choose..."
          required
          onChange={handleOnChange}
        >
          <option value="">..select parent Category</option>
          {categories.map(
            (item) =>
              !item.parentCatId && (
                <option
                  key={item._id}
                  value={item._id}
                  selected={item._id === selectedProduct.catId}
                >
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
        update
      </Button>
    </Form>
  );
};
