import React, {useState} from "react";
import {auth} from "../fbase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SignUpPage.module.css"

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const regpwd = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W).{8,15}$/;

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
      }
    
      const onSubmit = async (event) => {
        event.preventDefault();
        if(regpwd.test(password) === true){
            try{
                let data;
                data = await createUserWithEmailAndPassword(auth, email, password);
                navigate('/');
            } catch (error){
                setError(error.message);
                alert(error);
            }
        }else {
            alert("비밀번호 요구사항을 확인해주세요!");
        }
      }
    return (
      <div className={styles.conXS}>
        <div className={styles.Logo}>
          <img src={require('../assets/Logo.png')}/>  
          <p>Travel</p>
        </div>
        <form onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
          <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
          <p>비밀번호는 8~15 글자로 작성해주시길 바랍니다.</p>
          <p>&#40;특수 문자, 영어, 숫자포함&#41;</p>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );

};

export default SignUpPage;