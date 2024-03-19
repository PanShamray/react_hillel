import React, { useState } from "react";

const EmojiVotingApp = () => {
  const [calc, setCalc] = useState(new Array(5).fill(0));
  const emoji = ["😀", "🥰", "😑", "🤢", "🤮"];

  const handleSmileyClick = (index) => {
    const newCalc = [...calc];
    newCalc[index]++;
    setCalc(newCalc);
  };

  const showResults = () => {
    const maxVotes = Math.max(...calc);
    const winners = calc.reduce((acc, curr, index) => {
      if (curr === maxVotes) acc.push(emoji[index]);
      return acc;
    }, []);

    if (winners.length === emoji.length) {
      alert("Всі емоджі мають однакову кількість голосів");
    } else {
      alert(`Переможець(-ці): ${winners.join(", ")}`);
    }
  };

  return (
    <div>
      {emoji.map((em, index) => (
        <div key={index}>
          <span className="smile" onClick={() => handleSmileyClick(index)}>
            { em }
          </span>
          <span>{calc[index]}</span>
        </div>
      ))}
      <button className="btn" onClick={showResults}>Результати</button>
    </div>
  );
};

export default EmojiVotingApp;