import {Navbar, Nav}  from "react-bootstrap"


const Navigation = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" >
          
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar>
        
      </>
    );
  };
  
  export default Navigation;

 