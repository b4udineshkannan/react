function Projectchild(props){
    return(
        <div>
            <img src={props.laptop.imgurl} />
            <p className="title">{props.laptop.name}</p>
            <p className="para">{props.laptop.Price}</p>
            

        </div>
    )

}
export default Projectchild;