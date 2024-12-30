import { useNavigate } from "react-router-dom";


function ShoeItem(props){

 let navigate = useNavigate();
 return(
    <div className="col-md-4">
        <img src ={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="80%" onClick={()=> { navigate(`/detail/${props.shoe.id}`)}}/>
        <h4>{props.shoe.title}</h4>
        <p>{props.shoe.price}원</p>
    </div>
 );   
}

export { ShoeItem };

