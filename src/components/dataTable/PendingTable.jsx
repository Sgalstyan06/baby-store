import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Pagination } from "semantic-ui-react";

import { Grid, Segment, List, Image, Dropdown, Item } from "semantic-ui-react";
import productImg from "../../img/img1.jpg";
import "./dataTable.css";

function PendingTable({ list, changeStatus }) {
  console.log("list", list);
  return (
    <>
   
      {list &&
        list.length > 0 &&
        list.map((item) => {
          return (
            <Item.Group key={nanoid()}>
              <Item>
                <Item.Image
                  size="tiny"
                  src={item.product.img[0]?.imagePath || productImg}
                />
                <Item.Content>
                  <Item.Header as="a"> {item.product.name}</Item.Header>
                  <Item.Description>
                    {item.product.description.comment}
                  </Item.Description>                  
                </Item.Content>

                <Item.Content>
                  <Item.Description>Address {item.address}</Item.Description>
                  <Item.Extra>Phone {item.phone}</Item.Extra>
                </Item.Content>
                <Item.Content>
                  count product {item.product.stock.count}
                </Item.Content>

                <Item.Content>
                  {/* <Item.Header as="a"> */}
                  <Dropdown pointing="top left" text="Change Status">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PENDING", item.id);
                        }}
                        text="Pending"
                        icon="plus"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("SENT", item.id);
                        }}
                        text="Sent"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("PAID", item.id);
                        }}
                        text="Paid"
                        icon="calendar"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          changeStatus("DONE", item.id);
                        }}
                        text="Done"
                        icon="calendar"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* </Item.Header>{" "} */}
                </Item.Content>
                <Item.Content>{item.orderStatus} </Item.Content>
              </Item>
            </Item.Group>
          );
        })}
    </>
  );
}

export default PendingTable;
