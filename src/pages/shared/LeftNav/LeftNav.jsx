import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  useEffect(() => {
    fetch("https://dragon-news-server-jihad-hossain1.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none "
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div className="">
        <img className="mb-2" src={first} alt="" />

        <img className="mb-2" src={second} alt="" />
        <img className="mb-2" src={third} alt="" />
      </div>
    </div>
  );
};

export default LeftNav;
