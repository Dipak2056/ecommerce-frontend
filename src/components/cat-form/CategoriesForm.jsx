import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  parentCat: "",
  catName: "",
};
export const CategoriesForm = () => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Form className="py-5" onSubmit={handleOnSubmit}>
        <Row className="g-3">
          <Col md="5">
            <Form.Group controlId="formGridState">
              <Form.Select
                name="parentCat"
                defaultValue="Choose..."
                onChange={handleOnChange}
              >
                <option>Choose...</option>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
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
          <Col md="3">
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
