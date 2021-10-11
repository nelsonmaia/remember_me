import React, { Fragment } from "react";
import { getConfig } from "../config";

import { Button } from "reactstrap";

const Remember = () => {

  const { domain } = getConfig();
  
  const Checkbox = props => (
    <input type="checkbox" {...props} />
  )

  let checked ;

  const handleCheckboxChange = event =>
    {
      
      checked = !checked;
      
      localStorage.setItem("rememberMe", checked);
      
      console.log("checked", checked);

    };

    let searchParams = new URLSearchParams(window.location.search);

    let rememberMe = searchParams.get("remember");

    console.log(rememberMe);

    localStorage.setItem("rememberMe", rememberMe);

    const continueAuth = () => {
      let searchParams = new URLSearchParams(window.location.search);

      let state = searchParams.get("state")

      if(state){
        window.location = `https://${domain}/continue?state=${state}`; 
      }


    }

    continueAuth();

    
  

  return (
  <Fragment>

  </Fragment>
)};

export default Remember;
