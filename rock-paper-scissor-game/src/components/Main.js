import React, { useState, useEffect } from "react";
import Result from "./Result";
import Display from "./Display";
import Choices from "./Choices";

import { getRandomGameItem, calculatorUserWinner } from "../utils";

const gameItems = [
  {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  },
  {
    url: "/images/rock.png",
    id: 1,
    winItemIds: [2],
    name: "Rock",
  },
  {
    url: "/images/scissor.png",
    id: 2,
    winItemIds: [0],
    name: "Scissor",
  },
];

export default function Main() {
  const [result, setResult] = useState("N/N");
  const [userGameItem, setUserGameItem] = useState(null);
  const [computerGameItem, setComputerGameItem] = useState(null);

  const handleGameItemChange = (gameItem) => {
    setUserGameItem({ ...gameItem });
  };

  useEffect(() => {
    if (userGameItem) {
      const computerNewItem = getRandomGameItem(gameItems); // generate a random object item
      setComputerGameItem({ ...computerNewItem }); // set new object item for computer game item
      setResult(calculatorUserWinner(userGameItem, computerNewItem)); // set outcome for result
    }
  }, [userGameItem]);

  return (
    <div className="conainer">
      <div className="main">
        <Result
          userGameItem={userGameItem}
          computerGameItem={computerGameItem}
          result={result}
        />
        <Display />
        <Choices
          gameItems={gameItems}
          handleGameItemChange={handleGameItemChange}
        />
      </div>
    </div>
  );
}
