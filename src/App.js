import {Container,Nav,Navbar,Card,Col,Row,CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import health from "./health.jpg";
import education from "./education.webp"
import nature from "./nature.jpg"

function Application() {
  return (
    <>
       <div class="app">
        
        <Navbar bg="dark" data-bs-theme="dark">
          <Container >
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        
        <h1 style={{color:"red",textAlign:"center", fontSize:80}}class="text-center" >MY FIRST REACT APP </h1>
        <br></br>
        <Row xs={1} md={3} className="g-3" style={{border:25}}>
      
        <Col key={1}>
          <Card>
           <Card.Img variant="top" src={health} style={{height:250}}/>
            <Card.Body>
              <Card.Title>Health Care</Card.Title>
              <Card.Text>
              La santé est un domaine crucial qui englobe divers aspects de la prévention,
              du diagnostic, du traitement et de la gestion des maladies et des problèmes de santé.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col key={2}>
        <Card>
          <Card.Img variant="top" src={education} style={{height:250}}/>
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
            The Power of Education: Education is a fundamental pillar of human development,
             playing a pivotal role in shaping individuals, societies, and even nations.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col key={3}>
      <Card>
        <Card.Img variant="top" src={nature} style={{height:250}}/>
        <Card.Body>
          <Card.Title>Mother Nature </Card.Title>
          <Card.Text>
          L'environnement, également appelé le milieu naturel, 
          englobe tous les éléments qui entourent les êtres vivants,
           y compris l'air, l'eau, le sol, les écosystèmes et les ressources naturelles.
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
     
    </Row> 
                
      </div>

    </>
  );
}

export default Application;