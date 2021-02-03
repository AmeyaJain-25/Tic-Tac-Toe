import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import './App.css';

const App = () => {
  return (
    <Container fluid >
      <Row style={{justifyContent: "center"}}>
        <h1 style={{margin: "20px"}}>
          <span style={{color: "red"}}>Tic</span> -
          <span style={{color: "green"}}> Tac</span> -
          <span style={{color: "blue"}}> Toe</span>
        </h1>
      </Row>
      <img src="https://media.istockphoto.com/photos/business-marketing-strategy-planning-concept-wooden-block-tic-tac-toe-picture-id915487006?k=6&m=915487006&s=612x612&w=0&h=5LjPsBAxOnpIZh7pO97T_FAu5Bt5sQHLW5E4B7uJpCA=" />
      <Row>
        <Link to="/two-player-game" >Manual Play</Link>
        <Link to="/one-player-game" >Computer Play</Link>
      </Row>
    </Container>
  );
}

export default App;