import React, { useState } from "react";

const EmojiVotingApp = () => {

  const emoji = ["😀", "🥰", "😑", "🤢", "🤮"];
  const [calc, setCalc] = useState(new Array(emoji.length).fill(0));
  
  const handleSmileClick = (index) => {
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
    <div className="wrapper">
      {emoji.map((emoji, index) => (

        <div key={index}>
          <span className="wrapper__smile" onClick={() => handleSmileClick(index)}>
            {emoji}
          </span>
          <span>{calc[index]}</span>
        </div>
        
      ))}

      <button className="wrapper__btn" onClick={showResults}>Результати</button>

    </div>
  );
};

export default EmojiVotingApp;