import React, {useState} from "react";
import googleIcon from "../assets/free-icon-search-281764.png";
import facebookIcon from "../assets/facebook.png";
import githubIcon from "../assets/github.png";
import { auth } from "../fbase";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider,signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css"
import Navbar from "../components/Navbar"

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

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
      try{
        let data;
        data = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } catch(error){
        setError(error.message);
        alert(error);
      }
    }

    const onSocialClick = async (event) => {
      const {
        target: {name},
      } = event;
      let provider;
      try{
        if(name === "google"){
          provider = new GoogleAuthProvider();
        }else if(name === "facebook"){
          provider = new FacebookAuthProvider();
        }else if(name === "github"){
          provider = new GithubAuthProvider();
        }
        await signInWithPopup(auth, provider);
        navigate("/");
      }catch(error){
        setError(error.message);
        alert(error);
      }
    };
  
    return (
      <>
        <Navbar />
        <div className={styles.conXS}>
          <form onSubmit={onSubmit}>
            <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
            <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
            <input type="submit" value="Log In" />
            {error}
          </form>
        </div>

        <div className={styles.ORWrap}>
          <div className={styles.ORline}></div>
          <p>또는</p>
          <div className={styles.ORline}></div>
        </div>
          
        <div className={styles.conXS}>
          <div className={styles.OtherLoginWrap}>
            <button name="google" onClick={onSocialClick}><img src={googleIcon} width="15" height="15"></img><p>Google 계정으로 로그인</p></button>
            <button name="facebook" onClick={onSocialClick}><img src={facebookIcon} width="15" height="15"></img><p>Facebook 계정으로 로그인</p></button>
            <button name="github" onClick={onSocialClick}><img src={githubIcon} width="15" height="15"></img><p>Github 계정으로 로그인</p></button>
          </div>
        </div>
      </>
    );
};
export default LoginPage;