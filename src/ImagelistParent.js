import { useState } from "react"; 
import { laptopobj } from "./Projectdata";
import Projectchild from "./Projectchild";


function ImagelistParent(props){
    const [laptopObj, setLaptopObj] = useState(laptopobj);
    
    return (

        <div class="main">
           
   
        {
            laptopObj.map((val)=>{
                if(val.category.includes(props.types)){
                return(
                    <div class="custom-col">
                    <Projectchild laptop={val}/>
                    </div>
                )
                }else{
                    return null;
                }
            })

        }
        </div>
    )
}
export default ImagelistParent;

