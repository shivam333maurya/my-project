import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const { t } = this.props;
  return (
    <div className={"text-center mt-5"}>
      <h1>{t("Page not found")}</h1>
      <Link to={"/"}>Back to home</Link>
    </div>
  );
};

export default PageNotFound;
