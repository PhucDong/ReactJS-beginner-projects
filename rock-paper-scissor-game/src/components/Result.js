import React from "react";

function Result({ userGameItem, computerGameItem, result }) {
  return (
    <div>
      <h1 className="result-header">Result</h1>
      <div className="result-wrapper">
        {userGameItem && <span>{userGameItem.name}</span>}

        <span className="result">{result}</span>

        {computerGameItem && <span>{computerGameItem.name}</span>}
      </div>
    </div>
  );
}

export default Result;
