import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const CategoriesForm = () => {
  return (
    <div>
      <Form className="py-5">
        <Row className="g-3">
          <Col md="5">
            <Form.Group controlId="formGridState">
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <Form.Control name="catName" placeholder="category Name" />
          </Col>
          <Col md="3">
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
