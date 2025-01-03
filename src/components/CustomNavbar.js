import axios from 'axios';
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom'
function CustomNavbar(){
    
    let navigate = useNavigate();


    let userData = useQuery('작명', () => {
        return axios.get('https://codingapple1.github.io/userdata.json').then((response) => {
            return response.data
        })   
    })

    return(
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
                    </Nav>
                
                    <Nav className='ms-auto'>반가워요 {userData.data.name}</Nav>
            
            </Container>
        </Navbar>
    );
}

export { CustomNavbar };