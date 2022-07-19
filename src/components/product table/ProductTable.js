import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductsAction,
  fetchProductsAction,
} from "../../pages/product/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const [ids, setIds] = useState([]);
  const { products } = useSelector((state) => state.products);

  //local states
  const [displayProd, setDisplayProd] = useState([]);

  useEffect(() => {
    //call api to fetch
    !displayProd.length && dispatch(fetchProductsAction());
    products.length && setDisplayProd(products);
  }, [products]);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);

    if (value === "all") {
      if (checked) {
        const allIds = products.map((item) => item._id);
        setIds(allIds);
      } else {
        setIds([]);
      }
      return;
    }
    //individual click
    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };

  const handleOnFilter = (e) => {
    const { value } = e.target;
    if (!value) {
      setDisplayProd(products);
    } else {
      setDisplayProd(products.filter((item) => item.status === value));
    }
  };
  const handleOnLiveSearch = (e) => {
    const { value } = e.target;
    setDisplayProd(
      products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div style={{ overflowX: "scroll" }}>
      <div className="mt-5 d-flex justify-content-end">
        <Form.Control
          name="search"
          placeholder="search..."
          className="m-3"
          onChange={handleOnLiveSearch}
        />
        <Form.Select
          variant="success"
          className="m-3"
          onChange={handleOnFilter}
        >
          <option value="">----</option>
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </Form.Select>
      </div>
      <hr />
      <p>{displayProd.length} Products Found in the store</p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check onChange={handleOnSelect} value="all" name="status" />
            </th>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>Sales Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayProd.map((item, i) => (
            <tr key={i}>
              <td>
                <Form.Check
                  name="status"
                  id="custom-switch"
                  onChange={handleOnSelect}
                  value={item._id}
                  checked={ids.includes(item._id)}
                />
              </td>
              <td>{i + 1}</td>
              <td
                className={
                  item.status === "active" ? "text-success" : "text-danger"
                }
              >
                {item.status}
              </td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>{item.salesPrice || " - "}</td>
              <td>
                {item.salesStartDate
                  ? new Date(item.salesStartDate).toLocaleDateString() +
                    "-" +
                    new Date(item.salesEndDate).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-5">
                <Link to={`/product/edit/${item._id}`}>
                  <Button variant="warning" className="btn-sm">
                    Edit
                  </Button>{" "}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        {ids.length > 0 && (
          <Button
            className="btn-lg"
            onClick={() => dispatch(deleteProductsAction(ids)) && setIds([])}
            title="You can only delete if child category doesnot exist"
            variant="danger"
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
