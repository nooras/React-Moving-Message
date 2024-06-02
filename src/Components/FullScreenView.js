import React, {useState} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import TextScroller from './TextScroller';
import { HexColorPicker } from "react-colorful";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FullScreenView() {
  const handle = useFullScreenHandle();

  const [text, setText] = useState(""); 
  const [textColor, setTextColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#fff");
  const [active, setActive] = useState('Pixelify Sans');

  return (
    <div>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#home">Moving Message</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='flex-grow-0'>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Enter Text here..."
                  className=" mr-sm-2"
                  value={text} onChange={(e) => setText(e.target.value)}
                />
              </Col>
              <Col xs="auto">
                <Button onClick={handle.enter}>Enter fullscreen</Button>
              </Col>
            </Row>
          </Form>
            <Nav className="me-auto">
              <NavDropdown title="Text Color" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <HexColorPicker color={textColor} onChange={setTextColor} />
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Background Color" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <HexColorPicker color={bgColor} onChange={setBgColor} />
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Font type" id="basic-nav-dropdown" activeKey={active} onSelect={(selectedKey) => setActive(selectedKey)}>
                <NavDropdown.Item eventKey="Cedarville Cursive">
                  Cedarville Cursive
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Open Sans">
                  Open Sans
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Pixelify Sans">
                  Pixelify Sans
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Raleway">
                  Raleway
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Sevillana">
                  Sevillana
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="Teko">
                  Teko
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <FullScreen handle={handle}>
          <div style={{color: textColor, background: bgColor, fontSize: 300, textAlign: 'center', height: '100%', width: '100%', display: 'grid', alignItems: 'center', whiteSpace: 'nowrap', fontFamily: active}}>
            <TextScroller text={text} style={{color: textColor}}/>
          </div>
      </FullScreen>
    </div>
  );
}

export default FullScreenView;