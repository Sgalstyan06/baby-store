import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";

function Products() {
  let countPageProduct = 4;
  return (
    
      <div className="home ui container">
        <Cards pageDevider={countPageProduct} />
      </div>
    
  );
}

export default Products;
