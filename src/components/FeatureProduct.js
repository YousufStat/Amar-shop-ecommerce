import { useProductContext } from "../context/productContext";
// import React, { useState } from "react";
import Product from "./Product";

export default function FeatureProduct() {
  const { isLoading, featureProducts } = useProductContext();
  // const [currentPage, setCurrentPage] = useState(2);
  
  // const prePage = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };
  // const changePage = (_id) => {
  //   setCurrentPage(_id);
  // };
  // const NextPage = () => {
  //   if (currentPage !== npage) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  if (isLoading) {
    return <div>....Loading</div>;
  }
  // const recordsPerPage = 4;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndext = lastIndex - recordsPerPage;
  // const records = featureProducts.slice(firstIndext, lastIndex);
  // const npage = Math.ceil(featureProducts.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);
//  console.log(currentPage)


  return (
    <>
      <h1 className="text-center mt-3">All Product </h1>
      <div className="grid grid-three-column">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    
     {/* <nav>
        <ul>
          <li>
            <a href="/" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`pageItem ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="/" onClick={changePage}>
                {n}
              </a>
            </li>
          ))}
          <li>
            <a href="/" onClick={NextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav> */}

     
    </>
  );
  
}
