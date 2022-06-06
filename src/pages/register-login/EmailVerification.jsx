import React from "react";
import { Spinner } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  return (
    <div className="container text-center d-flex justify-content-center ">
      <div className="verify-email  mt-5 w-50 bg-info p-2 rounded ">
        <h2>Email verification page</h2>
        <hr />
        <Spinner variant="primary" animation="border"></Spinner>
        Please wait
      </div>
    </div>
  );
};
