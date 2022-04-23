import { Card, Icon, Image, Button } from "semantic-ui-react";
import "./cardItem.css";
import BuyProduct from "../buyProduct/BuyProduct";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function CardItem({
  description,
  image,
  name,
  price,
  item,
  currency,
  setResponseInfo,
  imageList,
  stock
}) {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Card centered >
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        
        <Card.Description>{description} </Card.Description>
      </Card.Content>
        <Card.Content>Available {stock}</Card.Content>
      <Card.Content extra className="buy-info">
        {price}
        <span className="card-currency">{currency}</span>
        {isAuthenticated ? (
          <BuyProduct
            item={item}
            productInfo={{ description, image, name, price }}
            setResponseInfo={setResponseInfo}
            imageList = {imageList}
            stock={stock}
          />
        ) : (
          
          <Button as={Link} to="/login" color="green" inverted floated="right">
            BUY
          </Button>
        )}
      </Card.Content>
    </Card>
  );
}
export default CardItem;
