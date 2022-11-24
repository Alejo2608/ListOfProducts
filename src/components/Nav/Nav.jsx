import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../../css/nav.css"
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';

export default function NavP() {
  const value=useContext(DataContext)
  const [menu,setMenu]=value.menu


  const changeMenu=()=>{
    setMenu(!menu)
  }

  return (
    <div className="gr">
    <Navbar collapseOnSelect className='gr'>
      <Container className='co'>
        <div className="pt1">
            <Link to="/home"><h5>ListOfProducts</h5></Link>
        </div>
        <div className="pt2">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className="pt3">
        <Nav>
            <Nav.Link href="#deets"  onClick={changeMenu}>Lista</Nav.Link>
        </Nav>
        </div>
      </Container>
    </Navbar>
    </div>
  );
}