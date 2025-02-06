import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb ">
      <ol className="breadcrumb flex space-x-1 items-center justify-center mb-4 text-base font-normal">
        <li className="breadcrumb-item text-[#323232] uppercase">
          <Link to="/">Home</Link>
        </li>
        {pathnames.slice(0, 1).map((value, index) => {
          const to = `/${pathnames.slice(0, index + 2).join("/")}`; // Adjust the `to` link to include only up to the next segment

          return (
            <React.Fragment key={to}>
              <span className="mx-2"> &gt; </span>
              <li className="breadcrumb-item text-[#3C71FF] uppercase">
                <Link to={to}>{value}</Link>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
