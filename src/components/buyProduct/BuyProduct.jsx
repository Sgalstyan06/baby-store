import React, { useEffect, useState } from "react";
import { Button, Form, Header, Image, Modal, Segment } from "semantic-ui-react";
import BuyForm from "./BuyForm";
import "./BuyProduct.css";
import { confirmOrder } from "../../services/api";
import { useAuth0 } from "@auth0/auth0-react";

function BuyProduct({ productInfo, item,setResponseInfo }) {
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  const { description, image, name, price } = productInfo;
  const [open, setOpen] = useState(false);
  const inintFormData = { address: "", phone: "", paymentMethod: "cash" };
  const [options, setOptions] = useState(inintFormData);
  const [disable, setDisable] = useState(true);
console.log("item",item);
  async function confirmAction() {
    try {
      const token = await getAccessTokenSilently();
      const userObj = {
        id: user.sub,
        email: user.email,
        name: user.name,
        picture: user.picture,
      };
      const orderStatus = await confirmOrder(userObj, item, token, options);
     console.log("orderStatus buy",orderStatus);
      setResponseInfo(`You buy the broduct`)
   
      console.log(orderStatus);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    let status = false;
    for(let key in options){
      console.log("options[key]",options[key]);
      if(!options[key] ){
        status = true;
      }
    }
      setDisable(status);
  }, [options]);

  function changeOptions(prop) {
    console.log("prop", prop);
    setOptions({ ...options, ...prop });
    console.log("options", options);
  }

  return (
    <Modal
      className="custom-modal"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button color="green" inverted floated="right">
           BUY
         </Button>
      }
    >
      <Modal.Content image>
        <Image
          size="medium"
          src={
            image ||
            "https://react.semantic-ui.com/images/avatar/large/rachel.png"
          }
          wrapped
        />
        <Modal.Description>
          <Header>{name}</Header>
          <p>{description}</p>
          <p>{price}{item.currency}</p>
        </Modal.Description>

        <BuyForm userName={user.name} changeOptions={changeOptions} />
      </Modal.Content>
      <Modal.Actions>
        <Segment>
          <Segment.Inline>
            <Button color="black" onClick={() => setOpen(false)}>
              Nope
            </Button>
            <Button
              content="Confirm"
              disabled={disable}
              labelPosition="right"
              icon="checkmark"
              onClick={() => {
                setOpen(false);
                confirmAction();
              }}
              positive
            />
          </Segment.Inline>
        </Segment>
      </Modal.Actions>
    </Modal>
  );
}

export default BuyProduct;
