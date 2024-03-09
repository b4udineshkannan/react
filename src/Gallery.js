import ImagelistParent from "./ImagelistParent";
import Buttonpanel from "./Buttonpanel";
import { useState } from "react";


function Gallery(){
    const [status, setStatus] = useState('all')
    return(
        <div>
        <Buttonpanel send={(a)=>{setStatus(a)}} />
<ImagelistParent types={status}/>
</div>

    )
}

export default Gallery;