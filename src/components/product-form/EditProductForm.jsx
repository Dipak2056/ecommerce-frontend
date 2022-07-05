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
  images: [],
};
export const EditProductForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { selectedProduct } = useSelector((state) => state.products);
  const [form, setForm] = useState(initialState);
  const [newImages, setNewImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
    setForm(selectedProduct);
  }, [selectedProduct]);

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setNewImages(files);
    console.log(files);
  };
  const handleOnImageDelete = (e) => {
    const { checked, value, name } = e.target;
    if (checked) {
      setImgToDelete([...imgToDelete, value]);
    } else {
      setImgToDelete(imgToDelete.filter((imgpath) => imgpath !== value));
    }
  };
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

    const { __v, updatedAt, slug, sku, ratings, createdAt, ...rest } = form;
    rest.salesPrice = Number(rest.salesPrice) ? rest.salesPrice : 0;
    rest.salesStartDate = rest.salesStartDate ? rest.salesStartDate : null;
    rest.salesEndDate = rest.salesEndDate ? rest.salesEndDate : null;

    //bundle in formData
    const formData = new FormData();
    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    formData.append("imgToDelete", imgToDelete);
    newImages.length &&
      [...newImages].map((img) => formData.append("newImages", img));

    dispatch(updateProductAction(formData));
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
    {
      name: "images",
      type: "file",
      multiple: true,
      accept: "image/*",
      label: "Upload image",
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
        <CustomInput
          key={i}
          {...item}
          onChange={
            item.name === "images" ? handleOnImageSelect : handleOnChange
          }
        />
      ))}
      <div className="d-flex my-5 border border-dark">
        {selectedProduct.images &&
          selectedProduct.images.length > 0 &&
          selectedProduct.images.map((imgLink) => (
            <div className="img p-1" key={imgLink}>
              <Form.Check
                type="radio"
                label="Use as thumbnail"
                onChange={handleOnChange}
                value={imgLink}
                checked={imgLink === form.thumbnail}
                name="thumbnail"
              ></Form.Check>

              <img
                key={imgLink}
                src={process.env.REACT_APP_IMAGE_SERVER_URL + imgLink.substr(6)}
                alt="product image"
                width="150px"
                crossOrigin="anonymous"
                className="img-thumbnail rounded "
                value={imgLink}
              />
              <Form.Check
                label="Delete"
                value={imgLink}
                onChange={handleOnImageDelete}
              ></Form.Check>
            </div>
          ))}
      </div>
      <Button variant="warning" type="submit">
        update
      </Button>
    </Form>
  );
};
