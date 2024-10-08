import React from "react";
import { Helmet } from "react-helmet-async";
const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome to ProShop",
  description: "We deliver the best product for cheap",
  keyword: "electronics, buy electronics, cheap electronics",
};

export default Meta;
