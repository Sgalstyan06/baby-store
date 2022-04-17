import React from "react";
import { Tab, Pagination } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";
import PendingTable from "../dataTable/PendingTable";
import { useEffect, useState } from "react";
import "./Tabs.css";
const Tabs = ({ pendingProducts, allProducts, changeStatus, uploadImg }) => {
  // console.log("pendingProducts", pendingProducts);
  // console.log("allProducts", allProducts);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);

  const [pendingPage,setPendingPage] = useState([]);
  const [startForPandingPage,setStartForPandingPage] = useState(0);
  const [resultPending,setResultPending] = useState([])
  
  const pageDevider = 4;

  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) setResult(allProducts);
  }, [allProducts]);

  function goToPage(e, data) {
    // console.log(data.activePage);
    setStart(data.activePage * pageDevider - pageDevider);
  }

  useEffect(() => {
    if (resultPending && resultPending.length > 0)
    setPendingPage(resultPending.slice(startForPandingPage, startForPandingPage + pageDevider));
  }, [startForPandingPage, resultPending]);
  
  useEffect(() => {
    if (pendingProducts && pendingProducts.length > 0) setResultPending(pendingProducts);
  }, [pendingProducts]);

  function goToPagePending(e, data) {
    // console.log(data.activePage);
    setStartForPandingPage(data.activePage * pageDevider - pageDevider);
  }
  const panes = [
    {
      menuItem: "All Products",
      render: () => (
        <>
          <Tab.Pane className="tab-add-prd">
            <DataTable list={productsByPage} uploadImg={uploadImg} />
          </Tab.Pane>
          <div className="pagination-container">
            <Pagination
              defaultActivePage={1}
              secondary
              onPageChange={goToPage}
              totalPages={Math.ceil(result.length / pageDevider)}
            />
          </div>
        </>
      ),
    },
    {
      menuItem: "Pending",
      render: () => (
        <>
          
          <Tab.Pane>
            <PendingTable list={pendingPage} changeStatus={changeStatus} />
          </Tab.Pane>
          <div className="pagination-container">
            <Pagination
              defaultActivePage={1}
              secondary
              onPageChange={goToPagePending}
              totalPages={Math.ceil(resultPending.length / pageDevider)}
            />
            <div>page</div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Tab
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={panes}
      />
    </>
  );
};

export default Tabs;
