import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Header = () => {
  return (
    <header className='header'> 
    <div className="header__top">
        <Container>
            <Row>
                <Col ld='6' md='6' sm='6'>
                <div className="header__top__left">
                    
                </div>
                </Col>
                <Col ld='6' md='6' sm='6'>

                </Col>  
            </Row>
        </Container>
    </div>
    </header>
  );
}

export default Header;
