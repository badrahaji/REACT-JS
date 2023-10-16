import {Container,Nav,Navbar,Card,Col,Row,CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        
        <h1 class="text-center" >MY FIRST REACT APP </h1>
        <br></br>
        <Row xs={1} md={3} className="g-3" >
      
        <Col key={1}>
          <Card>
            <Card.Img variant="top" src="src\health.jpg" />
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
          <Card.Img variant="top" src="src\education.webp/150px200" />
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
        <Card.Img variant="top" src="holder.js/100px160" />
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
