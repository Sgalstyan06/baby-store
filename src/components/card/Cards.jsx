import { useEffect, useState, useRef } from "react";
import { Button, Pagination } from "semantic-ui-react";
import { getData, getProducts } from "../../services/api";

import CardItem from "./CardItem";
import Search from "../search/Search";
import "./cards.css";

const Cards = ({ pageDevider, setResponseInfo }) => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const [eventSearch, setEventSearch] = useState("");
  // const [searchShowProduct, setSearchShowProduct] = useState([]);
  // const numberPage = useRef(null);

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
    // if(!eventSearch){
    //   setProductsByPage(result.slice(start, start + pageDevider))
    //   numberPage.current = Math.ceil(result.length / pageDevider);
    // }else{
    //   setSearchShowProduct( result.filter((item) => item.name.includes(eventSearch)))
    //   setProductsByPage(searchShowProduct.slice(start, start + pageDevider));
    //   numberPage.current = Math.ceil(searchShowProduct.length / pageDevider);
    // }
  }, [start, result, eventSearch]);

  function goToPage(e, data) {
    // console.log(data.activePage);
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
                image={item.img && item.img.length > 0 && item.img[0].imagePath}
                imageList={item.img} //try to add picture pagination
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
              // totalPages={numberPage.current}
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
