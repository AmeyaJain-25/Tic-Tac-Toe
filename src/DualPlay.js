// import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { FaRedo } from 'react-icons/fa';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Icons from './components/Icons';

let boardArray = new Array(9).fill("none")

const DualPlay = () => {
  const [isCrossTurn, setIsCrossTurn] = useState(true)
  const [winningMessage, setWinningMessage] = useState("")
  let tieCount = 0


  const changePlayer = (boxIndex) => {
    if (winningMessage) {
      return console.log("Game Over!!! To play again, Reset the game");
    }
    if (boardArray[boxIndex] === "none") {
      //If cross playes turn, then add cross in box other wise add zero for zero's turn
      boardArray[boxIndex] = isCrossTurn ? "cross" : "zero";
      setIsCrossTurn(!isCrossTurn);
    } else {
      return console.log("Oooops!!! Somebody Played at this box. Try another one.");
    }
    checkForWinner()
  }

  const checkForWinner = () => {
    boardArray.map((playerName, index) => {
      if (playerName !== "none") {
        tieCount += 1
      }
    })
    if (boardArray[0] !== "none" && boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) {
      setWinningMessage(`${boardArray[0]} WINS`)
    } else if (boardArray[3] !== "none" && boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) {
      setWinningMessage(`${boardArray[3]} WINS`)
    } else if (boardArray[6] !== "none" && boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) {
      setWinningMessage(`${boardArray[6]} WINS`)
    } else if (boardArray[0] !== "none" && boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) {
      setWinningMessage(`${boardArray[0]} WINS`)
    } else if (boardArray[1] !== "none" && boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) {
      setWinningMessage(`${boardArray[1]} WINS`)
    } else if (boardArray[2] !== "none" && boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) {
      setWinningMessage(`${boardArray[2]} WINS`)
    } else if (boardArray[0] !== "none" && boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) {
      setWinningMessage(`${boardArray[0]} WINS`)
    } else if (boardArray[2] !== "none" && boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]) {
      setWinningMessage(`${boardArray[2]} WINS`)
    } else if (tieCount === 9) {
      return setWinningMessage("TIE")
    }
  }

  const replayGame = () => {
    boardArray.fill("none", 0, 9)
    setIsCrossTurn(true)
    setWinningMessage("")
  }

  return (
    <Container fluid >
      <Row style={{justifyContent: "center"}}>
        <h1 style={{margin: "20px"}}>
          <span style={{color: "red"}}>Tic</span> -
          <span style={{color: "green"}}> Tac</span> -
          <span style={{color: "blue"}}> Toe</span>
        </h1>
      </Row>
      <Row>        
        <Col md='3'></Col>
        <Col md='6'>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {boardArray.map((playerName, index) => (
              <Card key={index} onClick={() => changePlayer(index) } style={{color: "black", background: "darkslategray", borderRadius: "0", border: "2px solid firebrick"}}>
                <CardBody style={{display: "flex",justifyContent: "center"}}>
                  <Icons player={playerName} />
                </CardBody>
              </Card>
            ))}
          </div>
          {winningMessage && (
            <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}} onClick={replayGame}>
              <FaRedo size="4em" />
              <h1 style={{margin: "10px"}}>Replay</h1>
            </div>
          )}
        </Col>
        <Col md='3'>
          <div>
            {!winningMessage && <h1>{`Turn: ${isCrossTurn ? "Cross" : "Zero"}`}</h1>}
            {winningMessage && <h1 style={{color: "green"}}>{winningMessage}</h1>}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DualPlay;
