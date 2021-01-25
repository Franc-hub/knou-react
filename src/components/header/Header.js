import "./Header.css";
import Button from "../button/Button";
import Logo from "../logo/Logo"
import { useHistory } from "react-router-dom"


const Header = () => {
  const history = useHistory();
  return (
    <div className="header_container">
      <div className="logo_container">
        <Logo/>
      </div>
      <div className="buttons_container">
        <div className="text_container">
          <p>How it works</p> 
          </div>   
          <Button
            name="Login"
            onClick={() => history.push("/login")}
            color="light"
          />
          <Button
            name="Sign Up"
            onClick={() => history.push("/signup")}
            color="dark"
          />
       
      </div>
    </div>
  );

};

export default Header;