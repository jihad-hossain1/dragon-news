import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div className="Container">
      <h2>Terms & Condition ...</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum
        ducimus nobis inventore nisi nostrum voluptates repudiandae earum maxime
        modi esse dolorum consectetur corrupti aliquid, temporibus officiis
        sapiente perspiciatis non!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsCondition;
