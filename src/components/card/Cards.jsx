import { useEffect, useState, useRef } from "react";
import { Button, Pagination } from "semantic-ui-react";
import { getData, getProducts } from "../../services/api";
import productImg from "../../img/img1.jpg";

import CardItem from "./CardItem";
import Search from "../search/Search";
import "./cards.css";

const Cards = ({ pageDevider, setResponseInfo }) => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [eventSearch, setEventSearch] = useState("");
  

  useEffect(() => {
    (async function createPageinashion() {
      let data = await getProducts();
      setResult(data);
      console.log("result", result);
    })();
  }, []);

  useEffect(() => {
    setProductsByPage(
      eventSearch
        ? result.filter((item) => item.name.includes(eventSearch))
        : result.slice(start, start + pageDevider)
    );
  }, [start, result, eventSearch]);

  function goToPage(e, data) {
    
    setStart(data.activePage * pageDevider - pageDevider);
  }

  function searchProduct(event) {
    setEventSearch(event);
    console.log("event", event);
  }

  return (
    <>
      <Search searchProduct={searchProduct} />
      <div className="ui stackable three column grid productItems">
        {productsByPage &&
          productsByPage.length > 0 &&
          productsByPage.map((item) => {
            return (
              <CardItem
                item={item}
                key={item.id}
                description={item?.description.comment || ""}
                image={item.img[0]?.imagePath || productImg }
              
                name={item.name}
                price={item.price}
                currency={item.currency}
                setResponseInfo={setResponseInfo}
                stock={item.stock.count}
              />
            );
          })}

        <div className="pagination-container">
          {!eventSearch ? (
            <Pagination
              defaultActivePage={1}
              secondary
              onPageChange={goToPage}
              totalPages={Math.ceil(result.length / pageDevider)}
              
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
