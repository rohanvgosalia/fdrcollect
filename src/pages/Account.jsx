import React from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const { id } = useParams();
  return <div>Account Details for Account #{id}</div>;
};

export default Account;
