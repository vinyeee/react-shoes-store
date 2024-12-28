import { Navbar, Nav, Container } from 'react-bootstrap'

function CustomNavbar(){
    return(
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export { CustomNavbar };