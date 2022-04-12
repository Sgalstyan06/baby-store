import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { getData, getProducts } from "../../services/api";
import CardItem from "./CardItem";
import "./cards.css";

const Cards = () => {
  const [result, setResult] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async function createPageinashion() {
      let arr = await getProducts();
      console.log("arr", arr);
      let newArr = [];
      let insidArr = [];
      let countEl = 2;//put number of product on pagination page
      arr.forEach((item, index, array) => {
        insidArr.push(item);
        if (index === countEl) {
          countEl += 3;
          newArr.push(insidArr);
          insidArr = [];
        }
        if (index === array.length - 1) {
          if (insidArr.length > 0) newArr.push(insidArr);
        }
      });
      setResult(newArr);
    })();
  }, []);

  function nextListProducts() {
    index !== result.length - 1 ? setIndex(index=>index+1) : setIndex(0);
  }

  function prevListProducts() {
    index === 0 ? setIndex(result.length - 1) : setIndex(index=>index-1);
  }
  
  return (
    <div className="ui stackable three column grid productItems">
      {result &&
        result.length > 0 &&
        result[index].map((item) => {
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
      <Button onClick={nextListProducts}>next</Button>
      <Button onClick={prevListProducts}>prev</Button>
    </div>
  );
};

export default Cards;
