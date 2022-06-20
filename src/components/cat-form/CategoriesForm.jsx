import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoriesAction } from "../../pages/categories/categoryAction";

const initialState = {
  status: "inactive",
  parentCatId: "",
  catName: "",
};
export const CategoriesForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { categories } = useSelector((state) => state.category);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const parentCatId = form.parentCatId ? form.parentCatId : undefined;
    dispatch(postCategoriesAction({ ...form, parentCatId }));
  };
  return (
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
                      <option key={item._id} value={item._id}>
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
              placeholder="category Name"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
