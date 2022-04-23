import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, Pagination, Dropdown, Item } from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect } from "react";

function DataTableForUsser({ list }) {

  const [productsByPage, setProductsByPage] = useState([]);
  const [imgFile, setImgFile] = useState();
  const [start, setStart] = useState(0);
  const [result, setResult] = useState([]);

  const pageDevider = 4;

  console.log("pend-list", list);
  function onChange(e) {
    
    setImgFile(e.target.files[0]);
  }
  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);

  useEffect(() => {
    setProductsByPage(list.slice(start, start + pageDevider));
  }, [start, result]);

  useEffect(()=>{
    if(list && list.length>0)setResult(list);
  },[list])

  function goToPage(e, data) {
    
    setStart(data.activePage * pageDevider - pageDevider);
  }
  return (
    <>
      {productsByPage &&
        productsByPage.length > 0 &&
        productsByPage.map((item) => {
          return (           
            <Item.Group key={nanoid()} className = "user-order">
            <Item>
              <Item.Image
                size="tiny"
                src={item.product.img[0]?.imagePath || productImg}
              />
              <Item.Content>
                <Item.Header as="a"> {item.product.name}</Item.Header>
                                
              </Item.Content>

              <Item.Content>
                <Item.Description>{item.orderStatus}</Item.Description>
                
              </Item.Content>
              <Item.Content>
              <Item.Description>{item.product.price}
                      {item.product.currency}</Item.Description>
                
              </Item.Content>

              
            </Item>
          </Item.Group>
          );
        })}

      <div className="pagination-container">
        <Pagination
          defaultActivePage={1}
          secondary
          onPageChange={goToPage}
          totalPages={Math.ceil(list.length / pageDevider)}
        />
      </div>
    </>
  );
}

export default DataTableForUsser;
