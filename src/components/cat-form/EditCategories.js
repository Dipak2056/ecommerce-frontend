import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  postCategoriesAction,
  updateCategoriesAction,
} from "../../pages/categories/categoryAction";
import { MyVerticallyCenteredModal } from "../modal/Modal";

const initialState = {
  status: "inactive",
  parentCatId: "",
  catName: "",
};
export const EditCategories = ({ selectedCat }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(selectedCat);
  const { categories } = useSelector((state) => state.category);
  useEffect(() => {
    setForm(selectedCat);
  }, [selectedCat]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    console.log(checked, name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //dispatch action to update the category
    const { parentCatId, catName, status, _id } = form;

    dispatch(updateCategoriesAction({ _id, parentCatId, catName, status }));

    console.log(form);
  };
  return (
    <MyVerticallyCenteredModal title="Edit category">
      <div>
        <Form className="py-5" onSubmit={handleOnSubmit}>
          <Row className="g-3">
            <Col md="2">
              <Form.Check
                onChange={handleOnChange}
                name="status"
                type="switch"
                id="custom-switch"
                label="Check this switch"
                checked={form.status === "active"}
              />
            </Col>
            <Col md="4">
              <Form.Group controlId="formGridState">
                <Form.Select
                  name="parentCatId"
                  defaultValue="Choose..."
                  onChange={handleOnChange}
                >
                  <option value="">..select parent Category</option>
                  {categories.map(
                    (item) =>
                      !item.parentCatId && (
                        <option
                          key={item._id}
                          value={item._id}
                          selected={item._id === form.parentCatId}
                        >
                          {item.catName}
                        </option>
                      )
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md="4">
              <Form.Control
                name="catName"
                value={form.catName}
                placeholder="category Name"
                onChange={handleOnChange}
                required
              />
            </Col>
            <Col md="2">
              <Button type="submit">Update Category</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </MyVerticallyCenteredModal>
  );
};
