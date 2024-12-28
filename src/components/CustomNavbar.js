import { Navbar, Nav, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function CustomNavbar(){
    
    let navigate = useNavigate();

    return(
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export { CustomNavbar };