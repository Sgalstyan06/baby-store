
import productImg from "../../img/img1.jpg";
import "./dataTable.css";
import { nanoid } from "nanoid";
import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import "./dataTable.css";
import { useState, useEffect } from "react";





function DataTable({ list, uploadImg }) {
  const [imgFile, setImgFile] = useState();

  console.log(list);
  function onChange(e) {
console.log(e.target.files);
    setImgFile(e.target.files[0]);
    

  }
  useEffect(()=>{
    console.log(imgFile);
  },[imgFile])
  

  // function onFormSubmit() {

  // }
  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item) => {
                  return (
                    <Grid className="grid-table" key={nanoid()}>
                      <Grid.Row>
                        <Grid.Column width="2">
                          <Segment.Inline>{item.id}</Segment.Inline>
                        </Grid.Column>
                        <Grid.Column width="5">
                          <Segment.Inline>
                            <Image
                              avatar
                              className="product-icon"
                              src={item.img[0]?.imagePath || productImg}
                            />
                          </Segment.Inline>
                        </Grid.Column>
                        <Grid.Column width="9">
                          <Segment.Inline>
                            <List.Content>
                              <List.Header>{item.name} </List.Header>
                              {item.price}
                              <Segment.Inline>
                                "item.orderStatus"
                              </Segment.Inline>
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  uploadImg(imgFile, item.id);
                                }}
                              >
                                <input type="file" onChange={onChange} />
                                <button type="submit">Upload!</button>
                              </form>
                            </List.Content>
                          </Segment.Inline>
                        </Grid.Column>
                        
                      </Grid.Row>
                    </Grid>
                  );
        })}
    </>
  );
}



export default DataTable;

