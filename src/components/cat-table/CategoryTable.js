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
  const parentCats = categories.filter((item) => !item.parentCatId);
  const childCats = categories.filter((item) => item.parentCatId);
  console.log(categories, parentCats);
  return (
    <div>
      <EditCategories selectedCat={selectedCat} />
      <p>{categories.length} Categories Found!</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentCats.map((item, i) => (
            <>
              <tr key={item._id}>
                <td>
                  {item.parentCatId}
                  {item.catName}
                </td>
                <td
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {item.status}
                </td>
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
              {childCats.map((cat, index) => {
                if (cat.parentCatId === item._id) {
                  return (
                    <tr key={cat._id}>
                      <td>
                        ➡️
                        {cat.catName}
                      </td>
                      <td
                        className={
                          cat.status === "active"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {cat.status}
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleOnEdit(cat)}
                        >
                          Edit
                        </Button>{" "}
                        <Button
                          title="You can only delete if child category doesnot exist"
                          variant="danger"
                          onClick={() => {
                            handleOndelete(cat._id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                }
              })}
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
