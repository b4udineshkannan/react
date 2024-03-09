
import { butttonall, buttonlaptop, buttontablet, buttonmobile  } from "./Projectdata";
import { useState } from "react";
function Buttonpanel(props) {
    function handleClick(btnV){
        //console.log(a);
        props.send(btnV);
    }
    return(
        <div className="button-main">
            <button onClick={()=>{handleClick('all')}} className="custom-button">{butttonall}</button>
            <button onClick={()=>{handleClick('lp')}} className="custom-button">{buttonlaptop}</button>
            <button onClick={()=>{handleClick('tb')}} className="custom-button">{buttontablet}</button>
            <button onClick={()=>{handleClick('mb')}} className="custom-button">{buttonmobile}</button>
        </div>
    )
}

export default Buttonpanel;