import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import useTitle from "../../../hook/useTitle";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  useTitle("home");
  // console.log(categoryNews);
  // console.log(categoryNews);
  return (
    <div>
      {id && (
        <h2 className="text-center">This Category : {categoryNews.length}</h2>
      )}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
