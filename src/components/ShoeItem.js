function ShoeItem(props){
 return(
    <div className="col-md-4">
        <img src={props.imgUrl} width="80%" />
        <h4>{props.title}</h4>
        <p>{props.price}</p>
    </div>
 );   
}

export { ShoeItem };