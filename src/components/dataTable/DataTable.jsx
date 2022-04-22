import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import {
  Grid,
  Segment,
  List,
  Image,
  Pagination,
  Dropdown,
  Item,
  Button,
  Icon,
  Input,
} from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect, Fragment } from "react";

function DataTable({ list, uploadImg, setResponseInfo }) {
  const [imgFile, setImgFile] = useState();

  function onChange(e) {
    setImgFile(e.target.files[0]);
  }

  useEffect(() => {
    
  }, [imgFile]);
  // setResponseInfo("product creates");
  
  return (    
      <div>
        {list &&
          list.length > 0 &&
          list.map((item) => {
            return (
              // <Grid className="grid-table" key={nanoid()}>
              //   <Grid.Row>
              //     <Grid.Column width="10">
              //       <Segment.Inline>
              //         <Image
              //           avatar
              //           className="product-icon"
              // src={
              //   item.img[item.img.length - 1]?.imagePath || productImg
              // }
              //         />
              //         {item.name}{item.price}
              //           <span className="currency">{item.currency}</span></Segment.Inline>
              //         <Segment.Inline>

              //         </Segment.Inline>

              //     </Grid.Column>
              //     <Grid.Column width="6" className="image-upload-form">
              //       <Segment.Inline>
              // <form
              //   onSubmit={(e) => {
              //     e.preventDefault();
              //     uploadImg(imgFile, item.id);
              //   }}
              // >
              //   <label htmlFor="file-input" className="img-icon">
              //     <Icon
              //       className="btn-icon"
              //       color="green"
              //       name="images"
              //     />
              //   </label>
              //   <input
              //     type="file"
              //     id="file-input"
              //     onChange={onChange}
              //   />
              //   <Button className="btn-upload" type="submit">
              //     <Icon
              //       className="btn-icon"
              //       color="green"
              //       name="upload"
              //     />
              //   </Button>
              // </form>
              //       </Segment.Inline>
              //     </Grid.Column>
              //   </Grid.Row>
              // </Grid>

              <Item.Group className="add-prd-list" key={nanoid()}>
                <Item>
                  <Item.Image
                    size="tiny"
                    src={item.img[item.img.length - 1]?.imagePath || productImg}
                  />

                  <Item.Content>
                    <Item.Header as="a"> {item.name}</Item.Header>
                    <Item.Meta></Item.Meta>
                    <Item.Description>
                      {item.price} 
                      {item.currency} conut {item.stock.count}
                    </Item.Description>
                   
                  </Item.Content>
                </Item>
                <Item>             

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      uploadImg(imgFile, item.id);
                    }}
                  >
                    <label htmlFor="file-input" className="img-icon">
                      <Icon className="btn-icon" color="green" name="images" />
                    </label>
                    <input type="file" id="file-input" onChange={onChange} />
                    <Button className="btn-upload" type="submit">
                      <Icon className="btn-icon" color="green" name="upload" />
                    </Button>
                  </form>
                  
                </Item>
              </Item.Group>
            );
          })}
      </div>
    
  );
}

export default DataTable;
