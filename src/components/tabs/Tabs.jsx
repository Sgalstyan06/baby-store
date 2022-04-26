import React from "react";
import { Tab, Pagination, Dropdown } from "semantic-ui-react";
import DataTable from "../dataTable/DataTable";
import PendingTable from "../dataTable/PendingTable";
import { useEffect, useState } from "react";
import "./Tabs.css";
const Tabs = ({
  pendingProducts,
  allProducts,
  changeStatus,
  uploadImg,
  setResponseInfo,
}) => {
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);

  const [pendingPage, setPendingPage] = useState([]);
  const [startForPandingPage, setStartForPandingPage] = useState(0);
  const [resultPending, setResultPending] = useState([]);

  const [status, setStatus] = useState("All");

  const pageDevider = 4;

  
  useEffect(() => {
    if (allProducts && allProducts.length > 0) setResult(allProducts);
  }, [allProducts]);

  useEffect(() => {
    if (result && result.length > 0)
      setProductsByPage(result.slice(start, start + pageDevider));
  }, [start, result]);


  useEffect(() => {
    setPendingPage(
      resultPending.slice(
        startForPandingPage,
        startForPandingPage + pageDevider
      )
    );
  }, [startForPandingPage, resultPending]);

  useEffect(() => {
    if (pendingProducts && pendingProducts.length > 0) {
      setResultPending(pendingProducts);
    }
  }, [pendingProducts]);

  function goToPage(e, data) {
    setStart(data.activePage * pageDevider - pageDevider);
  }

  function goToPagePending(e, data) {
    setStartForPandingPage(data.activePage * pageDevider - pageDevider);
  }

  function selectOrdersByStatus(status) {
    pendingProducts &&
      pendingProducts.length > 0 &&
      setResultPending([
        ...pendingProducts.filter((item) => item.orderStatus == status),
      ]);
  }
  function changeStartValue() {
    setStartForPandingPage(0);
  }
  // console.log("resultPending",resultPending);
  const panes = [
    {
      menuItem: "All Products",
      render: () => (
        <>
          <Tab.Pane className="tab-add-prd">
            <DataTable
              list={productsByPage}
              uploadImg={uploadImg}
              setResponseInfo={setResponseInfo}
            />
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
          <Dropdown
            className="select-status"
            pointing="top left"
            text={`Select order By Status ${status}`}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  changeStartValue();
                  selectOrdersByStatus("PENDING");
                  setStatus("PENDING");
                }}
                text="Select All Pending Orders"
              />
              <Dropdown.Item
                onClick={() => {
                  changeStartValue();
                  selectOrdersByStatus("UNPAID");
                  setStatus("UNPAID");
                }}
                text="Select All UNPAID Orders"
              />
              <Dropdown.Item
                onClick={() => {
                  changeStartValue();
                  selectOrdersByStatus("SENT");
                  setStatus("SENT");
                }}
                text="Select All Sent Orders"
              />
              <Dropdown.Item
                onClick={() => {
                  changeStartValue();
                  selectOrdersByStatus("PAID");
                  setStatus("PAID");
                }}
                text="Select All Paid Orders"
              />
              <Dropdown.Item
                onClick={() => {
                  changeStartValue();
                  selectOrdersByStatus("DONE");
                  setStatus("DONE");
                }}
                text="Select All Done Orders"
              />
            </Dropdown.Menu>
          </Dropdown>
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
