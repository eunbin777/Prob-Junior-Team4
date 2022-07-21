import React, {useState} from "react";

const SignUpPage = () => {

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
    return (
        <div>
        <form onSubmit={onSubmit}>
          <input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
          <input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
          <input type="submit" value="Log In" />
          {error}
        </form>
      </div>
    );

};

export default SignUpPage;