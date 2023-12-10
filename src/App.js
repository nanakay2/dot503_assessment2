import "./App.css";
import {
  addNumbers,
  subtractTwoNumbers,
  multiplyNumbers,
  divideTwoNumbers,
  capitalizeText
} from "./utils";
import { useEffect, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (userInput.length === 3) {
      setAnswer(
        operatorsAndTheirFunctions[userInput[1]](
          Number(userInput[0]),
          Number(userInput[2])
        )
      );
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput, operatorsAndTheirFunctions]);

  const clearInput = () => {
    setUserInput("");
    setError("");
    setAnswer("");
  };

  const checkForValidInput = (input) => {
    if ((userInput.length === 0 || userInput.length === 2) && isNaN(input)) {
      setError("Please enter a number first");
      return false;
    }
    if (userInput.length === 1 && !isNaN(input)) {
      setError("Please enter an operation");
      return false;
    }
    if (userInput.length < 3) setUserInput(`${userInput}${input}`);
    if (userInput.length === 3) {
      setUserInput(`${input}`);
    }
    setError("");
    return true;
  };

  const operatorsAndTheirFunctions = {
    "+": addNumbers,
    "-": subtractTwoNumbers,
    "÷": divideTwoNumbers,
    x: multiplyNumbers,
  };

  const firstSetOfNumbers = [1, 2, 3, 4, 5];
  const secondSetOfNumbers = [6, 7, 8, 9, 0];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          backgroundColor: "#5c5c5d",
        }}
      >
        <div
          style={{ height: "105px", backgroundColor: "#fff", padding: "15px" }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontSize: "13px",
              textAlign: "center",
            }}
          >
            {capitalizeText("Perform a simple mathematical operation using any two single digit numbers")}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              justifyContent: "flex-end",
            }}
          >
            {userInput ? (
              <>
                <span>{userInput[0]}</span>
                <span>{userInput[1]}</span>
                <span>{userInput[2]}</span>
              </>
            ) : (
              <span>0</span>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <span>=</span>
            <span>{answer ? answer : 0}</span>
          </div>

          {error && (
            <p
              style={{
                marginTop: "10px",
                fontStyle: "italic",
                fontSize: "13px",
                textAlign: "center",
                color: "red",
              }}
            >
              {error}
            </p>
          )}
        </div>

        <div
          style={{
            padding: "15px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "#272728",
          }}
        >
          {Object.keys(operatorsAndTheirFunctions).map((item) => (
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#3c3c3d",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                checkForValidInput(item);
              }}
            >
              {item}
            </div>
          ))}

          <div
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "25px",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#3c3c3d",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={clearInput}
          >
            A/C
          </div>
        </div>

        <div
          style={{
            padding: "15px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "#5c5c5d",
            marginBottom: "20px",
          }}
        >
          {firstSetOfNumbers.map((item) => (
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fea005",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                checkForValidInput(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "15px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: "#5c5c5d",
            marginBottom: "20px",
          }}
        >
          {secondSetOfNumbers.map((item) => (
            <div
              style={{
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fea005",
                color: "white",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                checkForValidInput(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
