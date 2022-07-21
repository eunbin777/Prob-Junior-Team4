import React, {useState} from "react";
import googleIcon from "../assets/free-icon-search-281764.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");

    const onChange = (event) => {
      const {target: {name, value}} = event;
      if(name === "email"){
        setEmail(value);
      } else if (name === "password"){
        setPassword(value);
      }
    }
  
    const onSubmit = async (event) => {
      event.preventDefault();
    }
  
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = (event) => {
      console.log(event.target);
    }
  
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
          <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
          <input type="submit" value="Log In" />
          {error}
        </form>
        <div>
          <button name="google" onClick={onSocialClick}><img src={googleIcon} width="15" height="15"></img>Google 계정으로 로그인</button>
          <button name="facebook" onClick={onSocialClick}><img src={facebookIcon} width="15" height="15"></img>Facebook 계정으로 로그인</button>
          <button name="github" onClick={onSocialClick}><img src={githubIcon} width="15" height="15"></img>Github 계정으로 로그인</button>
        </div>
      </div>
    );
};
export default LoginPage;