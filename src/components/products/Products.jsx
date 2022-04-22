import { Label } from "semantic-ui-react";
import Cards from "../card/Cards";
import { Table, Sticky, Message } from "semantic-ui-react";
import { useEffect, useState } from "react";


function Products() {
  const [responseInfo, setResponseInfo] = useState("");

  let countPageProduct = 4;

  function handleDismiss() {
    setResponseInfo("");
  }
  return (
    <div className="home ui container">
      {responseInfo && responseInfo.length > 0 ? (
        <Sticky >
           <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
       
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
