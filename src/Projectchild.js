function Projectchild(props){
    return(
        <div>
            <img src={props.laptop.imgurl} />
            <h2>{props.laptop.name}</h2>
            <p>{props.laptop.Price}</p>
            

        </div>
    )

}
export default Projectchild;