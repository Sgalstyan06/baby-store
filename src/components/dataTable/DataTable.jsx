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

  useEffect(() => {}, [imgFile]);
  
console.log("list",list);
  return (
    <div>
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Item.Group className="add-prd-list" key={nanoid()}>
              <Item>
                <Item.Image
                  size="tiny"
                  src={item.img[item.img.length - 1]?.imagePath || productImg}
                />

                <Item.Content>
                  <Item.Header as="a"> {item.name}</Item.Header>
                  <Item.Meta></Item.Meta>
                  <Item.Description>{item.description.comment}</Item.Description>
                </Item.Content>
                <Item.Content>
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
                </Item.Content>
                <Item.Content>Available <div>{item.stock.count}</div></Item.Content>
                <Item.Content>
                  
                  {item.price}
                  <div className="currency">{item.currency}</div>
                </Item.Content>
              </Item>
              <Item></Item>
            </Item.Group>
          );
        })}
    </div>
  );
}

export default DataTable;
