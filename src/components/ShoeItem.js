import { useNavigate } from "react-router-dom";


function ShoeItem(props){

 let navigate = useNavigate();
 return(
    <div className="col-md-4">
        <img src={props.imgUrl} width="80%" onClick={()=> { navigate(`/detail/${props.id}`)}}/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
    </div>
 );   
}

export { ShoeItem };