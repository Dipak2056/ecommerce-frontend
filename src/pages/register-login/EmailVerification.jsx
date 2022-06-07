import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { postEmailVerification } from "../../helpers/axioshelper";

export const EmailVerification = () => {
  const [queryParams] = useSearchParams();
  const [isPending, setIsPending] = useState(true);
  const [response, setResponse] = useState({});
  useEffect(() => {
    const obj = {
      emailValidationCode: queryParams.get("c"),
      email: queryParams.get("e"),
    };
    // const doFetch = async () => {
    //   const response = await postEmaiVerification(obj);
    //   setResponse(response);
    //   setIsPending(false);
    //   console.log(response);
    // };
    // doFetch();
    // IIFE
    (async () => {
      const response = await postEmailVerification(obj);
      setResponse(response);
      setIsPending(false);
      console.log(response);
    })();
  }, []);
  return (
    <div className="container text-center d-flex justify-content-center ">
      <div className="verify-email  mt-5 w-50 bg-info p-2 rounded ">
        <h2>Email verification</h2>
        <hr />
        {isPending && (
          <>
            {" "}
            <Spinner variant="primary" animation="border"></Spinner>
            please wait
          </>
        )}
        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}
        {response.status === "success" && <Link to="/">Log in Now</Link>}
      </div>
    </div>
  );
};
