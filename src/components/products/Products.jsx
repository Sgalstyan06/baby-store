import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";
import { Table, Icon, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";

function Products() {
  const [responseInfo, setResponseInfo] = useState("");

  let countPageProduct = 4;

  function handleDismiss() {
    setResponseInfo("");
  }
  return (
    <div className="home ui container">
      {responseInfo.length > 0 ? (
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      ) : (
        ""
      )}
      <Cards pageDevider={countPageProduct}
       setResponseInfo={setResponseInfo}
      />
    </div>
  );
}

export default Products;
