import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
