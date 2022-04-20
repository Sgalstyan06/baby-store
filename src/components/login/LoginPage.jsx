import { useAuth0 } from "@auth0/auth0-react";
import { Button, Message } from "semantic-ui-react";
import "./Login.css";



function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="home ui container">
      
      <Button positive onClick={() => loginWithRedirect()}>Log In</Button>
      {/* <Message className="massage-login" content='Please Subscribe up to  buy a product' /> */}
      <Message className="massage-login" color='green'>Please Subscribe if you want to  buy a product</Message>
    </div>
  );
}
export default LoginPage;
