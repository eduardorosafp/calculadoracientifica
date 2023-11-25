import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 1.8em;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: none;
  margin: 5px;
  border-radius: 4px;
  transition: 0.1s;
  box-shadow: 5px 5px 8px #00000020, -5px -5px 8px #ffff;

  &:hover {
    box-shadow: inset 5px 5px 8px rgba(16, 16, 16, 0.1),
      inset -5px -5px 8px #fff;
    background: #fff;
  }
`;

const Display = styled.input`
  margin-bottom: 0.5em;
  width: auto;
  height: 70px;
  font-size: 35px;
  outline: none;
  border: none;
  text-align: right;
  padding-right: 0.5em;
  background: #ecf0f3;
  border-radius: 6px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
`;

const EvalButton = styled(Button)`
  background: #33ccff;
  color: #fff;
  box-shadow: inset 5px 5px 8px #66d9ff, inset -5px -5px 8px #00ace6;

  &:hover {
    box-shadow: inset 5px 5px 8px #00ace6, inset -5px -5px 8px #00ace6;
  }
`;

const ACButton = styled(Button)`
  background: #33cc33;
  color: #fff;

  &:hover {
    box-shadow: inset 5px 5px 8px #2eb82e, inset -5px -5px 8px #33cc33;
  }
`;

const CEButton = styled(Button)`
  background: #ff3399;
  color: #fff;

  &:hover {
    box-shadow: inset 5px 5px 8px #e60073, inset -5px -5px 8px #ff3399;
  }
`;

function Calculator() {
  const [screenValue, setScreenValue] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "×") {
      buttonText = "*";
    }

    if (buttonText === "÷") {
      buttonText = "/";
    }

    setScreenValue(screenValue + buttonText);
  };

  const handleMathFunction = (mathFunction) => {
    setScreenValue(mathFunction(parseFloat(screenValue)));
  };

  const handleBackspace = () => {
    setScreenValue(screenValue.slice(0, -1));
  };

  const handleClear = () => {
    setScreenValue("");
  };

  const evaluateExpression = () => {
    try {
      setScreenValue(eval(screenValue).toString());
    } catch (error) {
      setScreenValue("Error");
    }
  };

  return (
    <Container>
      <div className="display">
        <Display type="text" value={screenValue} />
      </div>

      <div className="btns">
        <Row>
          <CEButton onClick={handleBackspace}>CE</CEButton>
          <Button onClick={() => handleMathFunction(Math.factorial)}>x!</Button>
          <Button className="btn">(</Button>
          <Button className="btn">)</Button>
          <Button className="btn">%</Button>
          <ACButton onClick={handleClear}>AC</ACButton>
        </Row>

        <Row>
          <Button onClick={() => handleButtonClick("sin(")}>sin</Button>
          <Button onClick={() => handleMathFunction(() => 3.14159265359)}>
            π
          </Button>
          <Button className="btn">7</Button>
          <Button className="btn">8</Button>
          <Button className="btn">9</Button>
          <Button className="btn" onClick={() => handleButtonClick("/")}>
            ÷
          </Button>
        </Row>

        <Row>
          <Button onClick={() => handleButtonClick("cos(")}>cos</Button>
          <Button onClick={() => handleMathFunction(Math.log)}>log</Button>
          <Button className="btn">4</Button>
          <Button className="btn">5</Button>
          <Button className="btn">6</Button>
          <Button className="btn" onClick={() => handleButtonClick("*")}>
            ×
          </Button>
        </Row>

        <Row>
          <Button onClick={() => handleButtonClick("tan(")}>tan</Button>
          <Button onClick={() => handleMathFunction(Math.sqrt)}>√</Button>
          <Button className="btn">1</Button>
          <Button className="btn">2</Button>
          <Button className="btn">3</Button>
          <Button className="btn" onClick={() => handleButtonClick("-")}>
            -
          </Button>
        </Row>

        <Row>
          <Button onClick={() => handleMathFunction(() => 2.71828182846)}>
            e
          </Button>
          <Button onClick={() => handleMathFunction(Math.pow)}>
            x{" "}
            <span
              style={{ position: "relative", bottom: ".4em", right: ".1em" }}
            >
              y
            </span>
          </Button>
          <Button className="btn" onClick={() => handleButtonClick("0")}>
            0
          </Button>
          <Button className="btn" onClick={() => handleButtonClick(".")}>
            .
          </Button>
          <EvalButton onClick={evaluateExpression}>=</EvalButton>
          <Button className="btn" onClick={() => handleButtonClick("+")}>
            +
          </Button>
        </Row>
      </div>
    </Container>
  );
}

export default Calculator;
