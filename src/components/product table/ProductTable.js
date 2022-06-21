import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../../pages/product/productAction";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    //call api to fetch
    dispatch(fetchProductsAction());
  }, []);

  const handleOndelete = () => {
    console.log("deleted");
  };

  return (
    <div>
      <p>{products.length} Products Found in the store</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Sales Price</th>
            <th>Sales End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <>
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td
                  className={
                    item.status === "active" ? "text-success" : "text-info"
                  }
                >
                  {item.status}
                </td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>${item.price.toLocaleString()}</td>
                <td>{item.salesPrice || " - "}</td>
                <td>{item.salesDate || "-"}</td>
                <td className="px-5">
                  <Button variant="warning" className="btn-sm">
                    Edit
                  </Button>{" "}
                  <Button
                    className="btn-sm m-auto"
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
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
