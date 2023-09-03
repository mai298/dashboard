import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar ,Nav, Container } from "react-bootstrap";
import '../NavBar.css';
import { Form } from 'react-bootstrap';
import bell from'../imgs/icons8-bell-64.png';
import message from'../imgs/icons8-email-32.png';
import female from'../imgs/fem.jpg';
import Logout from './Logout';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
function NavBar(){

  const { t } = useTranslation();

  return(
  
  <div className='header'>
   <Navbar expand="lg" className="">
      <Container>
<h2 className='ms-5 ps-5'>{t('Welcome')}</h2>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-4">
          <Form >
              <Form.Control
                type="text"
                placeholder={t('search')}/>
            </Form>
          </Nav>

          <Nav>

          <img src={bell} alt="bell" className='img-fluid me-2' style={{width:'32px'}} />
            <img src={message} alt="message" className='img-fluid me-3' style={{width:'32px'}} />

          </Nav>

          <Nav>
          <img src={female} alt="female" className='img-fluid me-2 fem'  />

          </Nav>
          <Nav>
          <Logout />            
          </Nav>

          <Nav>
          <LanguageSelector/>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}

export default NavBar;