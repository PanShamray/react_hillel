import React, { useState } from "react";

const EmojiCounter = () => {
  const [emojis, setEmojis] = useState([
    { emoji: "😊", count: 0 },
    { emoji: "😂", count: 0 },
    { emoji: "😍", count: 0 },
  ]);

  const [winner, setWinner] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleVote = (index) => {
    if (!showResults) {
      const newEmojis = [...emojis];
      newEmojis[index].count++;
      setEmojis(newEmojis);
    }
  };

  const handleShowResults = () => {
    if (!showResults) {
      let maxVotes = -1;
      let winningEmoji = null;
      emojis.forEach((emoji) => {
        if (emoji.count > maxVotes) {
          maxVotes = emoji.count;
          winningEmoji = emoji.emoji;
        }
      });
      setWinner(winningEmoji);
      setShowResults(true);
    }
  };

  return (
    <>
      <h2>Голосування за найкращий смайлик</h2>
      <ul>
        {emojis.map((emoji, index) => (
          <li key={index}>
            <span>{emoji.emoji}</span>
            <button onClick={() => handleVote(index)}>Проголосувати</button>
            <span> Голоси: {emoji.count}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleShowResults}>Хто переміг?</button>
      {showResults && <p>Переможець: {winner}</p>}
    </>
  );
};

export default EmojiCounter;