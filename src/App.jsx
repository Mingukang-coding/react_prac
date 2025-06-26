import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bg from './img/bg.png'
import Product from './Product';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
      <>
        <Navbar bg="black" variant="dark" className= "start-0 w-100" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'  style={{
            backgroundImage: `url(${bg})`,
            height: '400px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          </div>
          <Product/>
          </>
        }
        />

        <Route path='/detail' element={
        <div>Detail page...</div>
        }/>

      </Routes>

    </>
  )
}

export default App
