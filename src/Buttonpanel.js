
import { butttonall, buttonlaptop, buttontablet, buttonmobile  } from "./Projectdata";
import { useState } from "react";
function Buttonpanel(props) {
    function handleClick(btnV){
        //console.log(a);
        props.send(btnV);
    }
    return(
        <div>
            <button onClick={()=>{handleClick('all')}}>{butttonall}</button>
            <button onClick={()=>{handleClick('lp')}}>{buttonlaptop}</button>
            <button onClick={()=>{handleClick('tb')}}>{buttontablet}</button>
            <button onClick={()=>{handleClick('mb')}}>{buttonmobile}</button>
        </div>
    )
}

export default Buttonpanel;