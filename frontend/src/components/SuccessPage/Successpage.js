import React, { useState } from 'react';
import CheckoutWizard from '../CheckoutWizard/CheckoutWizard';
import "./SuccessPage.css";
import Button from "@material-ui/core/Button";
import MetaData from "../MetaData/MetaData";
// import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Successpage = () => {
  let history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  const handleClick = () => {
		history.push("/");
	};
    return (
      
        <div className="bod">
          	<MetaData title={"Successful!!!"} />
            <CheckoutWizard activeStep={3} />
           <div className="cardd">
  <div style={{borderRadius: 200, height: 200, width: 200, background: '#F8FAF5', margin: '0 auto'}}>
    <i className="checkmark">✓</i>
  </div>
  <h1 className="hh">Success</h1> 
    <p className="pp">Dear {user?.result.name}, We received your request;<br /> we'll be in touch shortly!</p>
    <Button onClick={handleClick} variant="contained" color="success">
       please go back home
    </Button>
</div>



        </div>
    )
}

export default Successpage
