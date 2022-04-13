import { useEffect, useState } from "react";
import { Button, Pagination } from "semantic-ui-react";
import { getData, getProducts } from "../../services/api";
import CardItem from "./CardItem";
import "./cards.css";

const Cards = () => {
  const [result, setResult] = useState([]);
  const [productsByPage, setProductsByPage] = useState([]);
  const [start, setStart] = useState(0);
  const limited = 2;
  

  useEffect(() => {
    (async function createPageinashion() {
      let data = await getProducts();
      setResult(data);
    })();
  }, []);
  useEffect(() => {
    setProductsByPage(result.slice(start, start + limited));
  }, [start, result]);

  function goToPage(e, data) {
    console.log(data.activePage);
    setStart(data.activePage);
  }
  
  console.log("result", result);
  return (
    <div className="ui stackable three column grid productItems">
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (
            <CardItem
              item={item}
              key={item.id}
              description={item?.description.comment || ""}
              image={item.img[0].imagePath}
              name={item.name}
              price={item.price}
            />
          );
        })}
      
      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(result.length / 2)}
        />
      </div>
    </div>
  );
};

export default Cards;
