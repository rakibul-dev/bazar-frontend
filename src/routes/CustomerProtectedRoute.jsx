/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CustomerProtectedRoute = (props) => {
  // eslint-disable-next-line react/prop-types

  const { user } = useSelector((state) => state.userSlice);

  const navigate = useNavigate();
  return <div>{user ? props.children : navigate("/")}</div>;
};

export default CustomerProtectedRoute;
