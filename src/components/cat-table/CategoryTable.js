import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoriesAction,
  fetchCategoriesAction,
} from "../../pages/categories/categoryAction";
import { toggleModal } from "../../system-state/systemSlice";
import { EditCategories } from "../cat-form/EditCategories";
import { MyVerticallyCenteredModal } from "../modal/Modal";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [selectedCat, setSelectedCat] = useState({});

  useEffect(() => {
    //call api to fetch
    dispatch(fetchCategoriesAction());
  }, []);
  const handleOndelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this category")) {
      dispatch(deleteCategoriesAction(_id));
    }
  };
  const handleOnEdit = (cat) => {
    setSelectedCat(cat);
    dispatch(toggleModal());
  };
  return (
    <div>
      <EditCategories selectedCat={selectedCat} />
      <p>{categories.length} Categories Found!</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>ParentId</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td
                className={
                  item.status === "active" ? "text-success" : "text-info"
                }
              >
                {item.status}
              </td>
              <td>{item.catName}</td>
              <td>{item.parentCatId}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>{" "}
                <Button
                  title="You can only delete if child category doesnot exist"
                  variant="danger"
                  onClick={() => {
                    handleOndelete(item._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
